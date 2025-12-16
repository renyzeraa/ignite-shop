import { getProductBySessionId } from "@/api/get-products";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

interface SuccessPageProps {
    searchParams: Promise<{ session_id: string }>;
}

export async function generateMetadata() {
    return {
        title: "Compra efetuada com sucesso",
    };
}

export default async function Success({ searchParams }: SuccessPageProps) {
    const { session_id } = await searchParams;

    if (!session_id) {
        return redirect('/');
    }

    const { costumerName, product } = await getProductBySessionId(session_id);

    if (!costumerName || !product) {
        return notFound();
    }

    return (
        <main className="flex flex-col items-center justify-center mx-auto h-164">
            <h1 className="text-2xl text-gray-100">Compra efetuada</h1>

            <div className="w-full max-w-32.5 h-36.25 bg-gradient rounded-lg px-1 mt-16 flex items-center justify-center">
                <Image src={product.imageUrl} alt={product.name} width={130} height={145} />
            </div>

            <p className="text-xl text-gray-300 max-w-140 text-center mt-8 leading-[1.4]">
                Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
            </p>

            <Link href="/" className="block mt-20 text-lg text-green-700 font-bold hover:text-green-500">
                Voltar ao catálogo
            </Link>
        </main>
    )
}