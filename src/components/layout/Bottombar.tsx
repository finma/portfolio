import { useRouter } from 'next/router';

import UnstyledLink from '../links/UnstyledLink';

export default function Bottombar() {
  const router = useRouter();

  return (
    <div className='z-[18] flex fixed bottom-0 justify-center w-full h-16 bg-transparent lg:hidden'>
      <nav className='flex space-x-6 w-min'>
        {links.map(({ href, icon }) => {
          return (
            <UnstyledLink
              key={href}
              href={href}
              className={`cursor-newtab inline-block p-2 h-6 hover:text-primary-400 ${
                router.asPath === href || router.route === `${href}/[workID]`
                  ? 'text-primary-400'
                  : 'text-white'
              }`}
            >
              {icon}
            </UnstyledLink>
          );
        })}
      </nav>
    </div>
  );
}

const links = [
  {
    href: '/',
    icon: (
      <svg
        key='home'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
  },
  {
    label: 'about',
    section: '/#about',
    href: '/about',
    icon: (
      <svg
        key='user'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        />
      </svg>
    ),
  },
  {
    label: 'portfolio',
    section: '/#portfolio',
    href: '/portfolio',
    icon: (
      <svg
        key='work'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: 'contact',
    section: '/#contact',
    href: '/contact',
    icon: (
      <svg
        key='contact'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
        />
      </svg>
    ),
  },
];
