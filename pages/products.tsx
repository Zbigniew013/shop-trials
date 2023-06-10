import { Product } from '@/components/product';
import { InferGetStaticPropsType } from 'next';

function ProducstPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {data.map(product => (
        <li key={product.id}>
          <Product
            data={{
              description: product.description,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
              rating: product.rating.rate,
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProducstPage;

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
}

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
