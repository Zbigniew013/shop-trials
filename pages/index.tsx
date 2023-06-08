import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ReactNode } from 'react';

const DUMMY_DATA = {
  description: `React is indeed a great choice, not only because it will enable you to
  build any application that you can imagine, but also because there is
  always a huge demand for skilled react developers like the one that
  you will become by the end of this course.`,
  thumbnailUrl: `https://picsum.photos/id/9/5000/3269`,
  thumbnailAlt: `notebook`,
  rating: 4.5,
};

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return <div className='text-amber-700 font-extrabold'>{rating}</div>;
}

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

function Product({ data }: ProductProps) {
  return (
    <div>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <p>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
}

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <div>
      <main className='flex-grow max-w-7xl mx-auto grid sm:grid-cols-2 p-6 gap-6'>
        {children}
      </main>
    </div>
  );
}

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Main>
        <Product data={DUMMY_DATA} />
      </Main>
      <Footer />
    </div>
  );
}

export default Home;
