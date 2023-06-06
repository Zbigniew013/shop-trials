import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const DUMMY_DATA = {
  description: `React is indeed a great choice, not only because it will enable you to
  build any application that you can imagine, but also because there is
  always a huge demand for skilled react developers like the one that
  you will become by the end of this course.`,
  thumbnailUrl: `https://picsum.photos/id/9/5000/3269`,
  thumbnailAlt: `notebook`,
  rating: 4.5,
};

function Rating() {
  return (
    <div className='text-amber-700 font-extrabold'>{DUMMY_DATA.rating}</div>
  );
}

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow max-w-7xl mx-auto grid sm:grid-cols-2 p-6 gap-6'>
        <img src={DUMMY_DATA.thumbnailUrl} alt={DUMMY_DATA.thumbnailAlt} />
        <p>{DUMMY_DATA.description}</p>
        <Rating />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
