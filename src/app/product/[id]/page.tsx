import { getProductById } from "@/api/get-products";
import { BuyButton } from "@/components/buy-button";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        return {
            title: "Produto não encontrado",
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 800,
                },
            ],
        },
    };
}

export default async function Product({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main className='grid grid-cols-2 items-stretch max-w-295 mx-auto gap-16 py-12'>
            <div className='w-full max-w-xl h-164 bg-gradient rounded-lg p-1 flex items-center justify-center'>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={520}
                    height={520}
                    priority
                    quality={100}
                />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl text-gray-300 font-bold'>{product.name}</h1>
                <span className='mt-4 block text-2xl text-green-500'>
                    {product.price}
                </span>

                <p className='mt-10 text-sm leading-relaxed text-gray-300'>
                    {product.description}
                </p>

                <BuyButton
                    priceId={product.priceId!}
                />
            </div>
        </main>
    );
}