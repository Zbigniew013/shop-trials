function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className=' max-w-7xl mx-auto w-full'>
        <nav className='bg-amber-500 px-4 py-2'>Navigation</nav>
      </header>
      <main className='flex-grow max-w-7xl mx-auto w-full px-4 py-2'>
        Main Page
      </main>
      <footer className='max-w-7xl mx-auto w-full bg-amber-500 px-4 py-2'>
        Foot
      </footer>
    </div>
  );
}

export default Home;
