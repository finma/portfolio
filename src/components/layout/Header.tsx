import Image from 'next/image';
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
      <header className='fixed z-20 py-4 w-full bg-transparent outline-none'>
        <div className='flex relative justify-between items-center px-6 h-14'>
          <Link href='/'>
            <a className='cursor-new-tab inline-block hover:text-blue-900'>
              <p className='z-auto px-3 py-1 text-xl font-medium tracking-widest text-white pointer-events-none'>
                finma
              </p>
            </a>
          </Link>
          <div className='flex items-center space-x-4 md:space-x-8'>
            <Link href='https://github.com/finma'>
              <a
                target='_blank'
                className='cursor-link image-container w-6 h-6 md:w-8 md:h-8'
              >
                <Image
                  src='/icons/Github-Mark-Light-32px.png'
                  alt=''
                  layout='fill'
                  className='image'
                />
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
        </div>
      </header>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
