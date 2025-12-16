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


    const products = data.map(product => {
        const defaultPrice = product?.default_price as Stripe.Price
        const price = String((defaultPrice?.unit_amount ? defaultPrice.unit_amount : 0) / 100)

        return {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.images[0],
            price
        }
    })

    return {
        products
    };
}