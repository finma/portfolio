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
          <Link href='/'>
            <a className='cursor-new-tab inline-block hover:text-blue-900'>
              <p className='z-auto px-3 py-1 text-xl font-medium tracking-widest text-white pointer-events-none'>
                finma
              </p>
            </a>
          </Link>
          <div className='hidden lg:block'>
            <HamburgerSpin
              isActive={isOpen}
              toggleButton={toggleButton}
              barColor='white'
              buttonWidth={55}
            />
          </div>
          <div className='block lg:hidden'>
            <HamburgerSpin
              isActive={isOpen}
              toggleButton={toggleButton}
              barColor='white'
              buttonWidth={40}
            />
          </div>
        </div>
      </header>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
