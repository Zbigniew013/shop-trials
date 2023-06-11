import { Product } from '@/components/product';
import { error } from 'console';
import { useQuery } from 'react-query';

async function getProducts() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
}

function ProductsCSRPage() {
  const { data, isLoading, isError } = useQuery('products', getProducts);

  if (isLoading) return <h1>Loading...</h1>;
  if (!data || isError) return <h1>Ooops... Something went wrong...</h1>;

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {data.map(product => (
        <li key={product.id} className='shadow-xl border-spacing-2'>
          <Product
            data={{
              title: product.title,
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

export default ProductsCSRPage;

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
