

import { Slider } from '@/components/slider';
import { Product } from '@/components/product';
import { getProducts } from '@/api/get-products';

export default async function Home() {
  const { products } = await getProducts()

  return (
    <Slider>
      {products.map(({ id, image, name, price }) => (
        <Product
          key={id}
          title={name}
          price={`R$ ${price}`}
          imgSrc={image}
          href={`product/${id}`}
        />
      ))}
    </Slider>
  );
}
