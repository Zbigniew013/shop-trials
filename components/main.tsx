import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <div>
      <main className='flex-grow max-w-7xl mx-auto grid sm:grid-cols-2 p-6 gap-6 bg-amber-100'>
        {children}
      </main>
    </div>
  );
}
