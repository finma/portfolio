import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { HamburgerSpin } from 'react-animated-burgers';

import UnstyledLink from '@/components/links/UnstyledLink';
const links = [
  { label: 'home', section: '/#home', href: '/' },
  { label: 'about', section: '/#about', href: '/about' },
  { label: 'portfolio', section: '/#portfolio', href: '/portfolio' },
  { label: 'contact', section: '/#contact', href: '/contact' },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='z-[20] fixed py-4 w-full bg-transparent outline-none'>
        <div className='layout flex justify-between items-center h-14'>
          <UnstyledLink
            href='/'
            className='text-xl font-medium tracking-widest text-white cursor-pointer pointer-events-none'
          >
            finma
          </UnstyledLink>
          <HamburgerSpin
            isActive={isOpen}
            toggleButton={toggleButton}
            barColor='white'
            buttonWidth={55}
          />
          {/* <nav>
          <ul className='flex justify-between items-center space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav> */}
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={navbar}
            initial='closed'
            exit='closed'
            animate={isOpen ? 'open' : 'closed'}
            className='from-dark to-red-custom via-dark-blue z-[19] flex fixed justify-center items-center w-full h-screen bg-gradient-to-tr'
          >
            <motion.nav
              variants={menu}
              className='flex flex-col px-2 space-y-8 text-center'
            >
              {links.map(({ href, label }) => {
                return (
                  <motion.button
                    key={href}
                    onClick={() => {
                      setIsOpen(false);
                      router.push(href);
                    }}
                    variants={menuItem}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`md:text-8xl text-5xl font-medium text-white uppercase transition duration-200 transform hover:scale-110 ${
                        router.asPath === href && 'line-through'
                      }`}
                    >
                      {label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const navbar = {
  open: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  closed: {
    y: '-100vh',
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const menu = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
