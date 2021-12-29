import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';

import { links } from '@/data/data';
export default function Bottombar() {
  const router = useRouter();

  return (
    <div className='z-[18] flex fixed bottom-0 justify-center w-full h-16 bg-transparent lg:hidden'>
      <nav className='flex space-x-6 w-min'>
        {links.map(({ href, icon }) => {
          return (
            <Link key={href} href={href}>
              <a
                className={`cursor-newtab inline-block p-2 h-6 hover:text-primary-400 ${
                  router.asPath === href || router.route === `${href}/[workID]`
                    ? 'text-primary-400'
                    : 'text-white'
                }`}
              >
                {ReactHtmlParser(icon)}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
