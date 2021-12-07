import Link from 'next/link';
import { useState } from 'react';
import { HamburgerSpin } from 'react-animated-burgers';

import Navbar from '@/components/layout/Navbar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='z-[20] fixed py-4 w-full bg-transparent outline-none'>
        <div className='flex relative justify-between items-center px-6 h-14'>
          <Link href='/components'>
            <a className='inline-block hover:text-blue-900'>
              <p className='z-auto px-3 py-1 text-xl font-medium tracking-widest text-white cursor-pointer pointer-events-none'>
                finma
              </p>
            </a>
          </Link>
          <HamburgerSpin
            isActive={isOpen}
            toggleButton={toggleButton}
            barColor='white'
            buttonWidth={55}
          />
        </div>
      </header>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
