import { Rating } from '@/components/rating';

interface ProductProps {
  data: {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export function Product({ data }: ProductProps) {
  return (
    <div>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <h2 className='p-4 text-2xl font-bold'>{data.title}</h2>
      <p className='p-4'>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
}
