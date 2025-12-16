import Image from "next/image"

interface ProductProps {
    title: string
    price: string
    imgSrc: string
    href: string
}

export function Product({ title, price, imgSrc, href }: ProductProps) {
    return (
        <a href={href} className='keen-slider__slide bg-gradient rounded-lg cursor-pointer group relative overflow-hidden flex items-center justify-center'>
            <Image src={imgSrc} width={520} height={480} alt={title} className='object-cover' />

            <footer className='absolute bottom-1 left-1 right-1 bg-black/60 rounded-md p-8 flex items-center justify-between translate-y-[110%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out'>
                <strong className='text-lg'>{title}</strong>
                <span className='text-xl font-bold text-green-300'>{price}</span>
            </footer>
        </a>
    )
}