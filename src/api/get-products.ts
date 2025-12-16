import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export interface GetProductsResponse {
    id: string;
    name: string;
    description: string | null;
    image: string;
    price: string;
    priceId?: string;
}

export async function getProducts(): Promise<{ products: GetProductsResponse[] }> {
    const { data } = await stripe.products.list({
        active: true,
        expand: ['data.default_price'],
    })

    const products = data.map(formatProduct)

    return {
        products
    };
}

export async function getProductById(id: string): Promise<GetProductsResponse | null> {
    const product = await stripe.products.retrieve(id, {
        expand: ['default_price'],
    })

    if (!product) {
        return null;
    }

    return {
        ...formatProduct(product),
        priceId: (product.default_price as Stripe.Price).id,
    };
}

export async function getProductBySessionId(sessionId: string) {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const costumerName = session?.customer_details?.name;
    const product = session?.line_items?.data[0]?.price?.product as Stripe.Product;

    return {
        costumerName,
        product: {
            name: product.name,
            imageUrl: product.images[0]
        }
    }
}

function formatProductPrice(defaultPrice: Stripe.Price): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format((defaultPrice?.unit_amount ? defaultPrice.unit_amount : 0) / 100)
}

function formatProduct(product: Stripe.Product): GetProductsResponse {
    const price = formatProductPrice(product?.default_price as Stripe.Price)
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price
    }
}