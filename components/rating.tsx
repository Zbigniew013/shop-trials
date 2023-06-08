interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  return <div className='text-amber-700 font-extrabold'>{rating}</div>;
}
