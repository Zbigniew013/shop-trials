import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { ProductDetails } from '@/components/product';

const DUMMY_DATA = {
  title: `Laptop`,
  description: `React is indeed a great choice, not only because it will enable you to
  build any application that you can imagine, but also because there is
  always a huge demand for skilled react developers like the one that
  you will become by the end of this course.`,
  thumbnailUrl: `https://picsum.photos/id/9/5000/3269`,
  thumbnailAlt: `notebook`,
  rating: 4.5,
};

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Main>
        <ProductDetails data={DUMMY_DATA} />
      </Main>
      <Footer />
    </div>
  );
}

export default Home;
