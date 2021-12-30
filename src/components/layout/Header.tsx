import Image from 'next/image';
import { useState } from 'react';
import { HamburgerSpin } from 'react-animated-burgers';

import Navbar from '@/components/layout/Navbar';

import CustomLink from '../links/CustomLink';
import UnstyledLink from '../links/UnstyledLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='fixed z-20 py-4 w-full bg-transparent outline-none'>
        <div className='flex relative justify-between items-center px-6 h-14'>
          <CustomLink
            href='/'
            className='cursor-newtab py-1 ml-3 text-xl tracking-widest text-white'
          >
            finma
          </CustomLink>
          <div className='flex items-center space-x-1 lg:space-x-4'>
            <div className='space-x-4 lg:space-x-6 lg:h-8'>
              <UnstyledLink
                href='https://www.linkedin.com/in/firmanmaulana2432/'
                className='w-6 h-6 lg:w-8 lg:h-8'
              >
                <Image
                  src='/icons/linkedin.svg'
                  alt=''
                  width={32}
                  height={32}
                />
              </UnstyledLink>
              <UnstyledLink
                href='https://github.com/finma'
                className='w-6 h-6 lg:w-8 lg:h-8'
              >
                <Image src='/icons/github.svg' alt='' width={32} height={32} />
              </UnstyledLink>
            </div>
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
