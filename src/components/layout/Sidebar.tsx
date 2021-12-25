import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';

import { links } from '@/data/data';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className='w-[120px] z-[18] hidden fixed justify-center items-center h-screen bg-transparent outline-none lg:flex'>
      <nav className='flex flex-col space-y-8 w-12'>
        {links.map(({ href, icon }) => {
          return (
            <Link key={href} href={href}>
              <a
                className={`cursor-newtab inline-block p-2 h-6 hover:text-primary-400 ${
                  router.asPath === href ? 'text-primary-400' : 'text-white'
                }`}
              >
                {ReactHtmlParser(icon)}
              </a>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
