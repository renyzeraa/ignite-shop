

import { Slider } from '@/components/slider';
import { Product } from '@/components/product';
import { getProducts } from '@/api/get-products';
import { Metadata } from 'next';

export const revalidate = 3600; // ISR: revalida a cada 1 hora

export const metadata: Metadata = {
  title: 'Ignite Shop - Loja de Camisetas',
  description: 'Compre camisetas de alta qualidade com os melhores designs',
  openGraph: {
    title: 'Ignite Shop',
    description: 'Compre camisetas de alta qualidade',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Home() {
  const { products } = await getProducts()

  return (
    <Slider>
      {products.map(({ id, image, name, price }) => (
        <Product
          key={id}
          title={name}
          price={price}
          imgSrc={image}
          href={`/product/${id}`}
        />
      ))}
    </Slider>
  );
}