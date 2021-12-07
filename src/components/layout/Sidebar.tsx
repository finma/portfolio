import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const items = [
  { label: 'home', section: '/#home', href: '/' },
  { label: 'about', section: '/#about', href: '/about' },
  { label: 'portfolio', section: '/#portfolio', href: '/portfolio' },
  { label: 'contact', section: '/#contact', href: '/contact' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className='w-[120px] z-[1] hidden fixed justify-center items-center h-screen bg-transparent outline-none lg:flex'>
      <nav className='flex flex-col space-y-6 w-12'>
        {items.map(({ href }) => {
          return (
            <Link key={href} href={href}>
              <a className='inline-block p-2'>
                {router.asPath === href ? (
                  <motion.div
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    exit={{ width: '28px' }}
                    className='h-[3px] bg-white rounded-r-full rounded-l-full'
                  ></motion.div>
                ) : (
                  <motion.div
                    variants={variant}
                    initial='initial'
                    className='h-[3px] w-[28px] bg-white rounded-r-full rounded-l-full'
                  ></motion.div>
                )}
              </a>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

const variant = {
  initial: {
    width: '28px',
  },
  animate: {
    width: '44px',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

export default Sidebar;
