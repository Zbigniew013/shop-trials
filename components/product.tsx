import { Rating } from '@/components/rating';

interface ProductDetails {
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export function ProductDetails({ data }: ProductProps) {
  return (
    <div>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className='p-4 text-2xl font-bold'>{data.title}</h2>
      <p className='p-4'>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
}

type ProductListItem = Pick<
  ProductDetails,
  'title' | 'thumbnailUrl' | 'thumbnailAlt'
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export function ProductListItem({ data }: ProductListItemProps) {
  return (
    <div>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className='p-4 text-2xl font-bold'>{data.title}</h2>
    </div>
  );
}
