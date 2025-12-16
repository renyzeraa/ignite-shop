import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export interface GetProductsResponse {
    id: string;
    name: string;
    description: string | null;
    image: string;
    price: string;
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

    return formatProduct(product);
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