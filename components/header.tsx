import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className=' max-w-7xl mx-auto w-full'>
      <nav className='bg-amber-500 px-4 py-2'>
        <Link
          href='/'
          className={` ${
            currentRoute === '/' ? 'underline decoration-red-400' : ''
          }`}
        >
          Main
        </Link>
        <Link
          href='/about'
          className={` ${
            currentRoute === '/about' ? 'underline decoration-red-400' : ''
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
