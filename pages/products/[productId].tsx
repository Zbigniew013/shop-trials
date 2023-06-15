import { ProductDetails } from '@/components/product';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

function ProductIdPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data) return <h1>Ooops... Something went wrong...</h1>;

  return (
    <div>
      <Link href={`/products`}>Back to Main Page</Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
}
export default ProductIdPage;

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ productId: string }>) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: StoreApiResponse = await res.json();

  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

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
export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map(product => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),

    // paths: [{ params: { productId: '1' } }],
    fallback: false,
  };
}
