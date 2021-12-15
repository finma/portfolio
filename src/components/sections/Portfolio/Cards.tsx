/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface CardProps {
  image: string;
  href: string;
  delay: number;
}

const Card = ({ image, href, delay }: CardProps) => {
  return (
    <div
      data-aos='fade-left'
      data-aos-easing='easeInOutCubic'
      data-aos-duration='1000'
      data-aos-delay={`${delay}00`}
      className='w-full h-full'
    >
      <Link href={href}>
        <a target='_blank'>
          <div className='overflow-hidden relative w-full h-full'>
            <img
              src={image}
              alt=''
              className='object-cover w-full h-full filter brightness-75 transition duration-200 transform hover:brightness-100 hover:scale-110'
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export const Cards = () => {
  return (
    <>
      <div className='hidden grid-cols-3 grid-rows-3 pt-20 pb-10 w-1/2 lg:grid'>
        {items.map(({ image, href }, i) => (
          <Card key={i} image={image} href={href} delay={i} />
        ))}
      </div>
      <div className='grid grid-cols-2 grid-rows-2 pt-20 w-full lg:hidden'>
        {items
          .map(({ image, href }, i) => (
            <Card key={i} image={image} href={href} delay={i} />
          ))
          .slice(0, 6)}
      </div>
    </>
  );
};

const items = [
  {
    title: 'Cryptoverse',
    image: '/images/Cryptoverse.webp',
    href: 'https://cryptoversee.vercel.app/',
  },
  {
    title: 'Memories',
    image: '/images/Memories.webp',
    href: 'https://finma-memories-app.netlify.app/',
  },
  {
    title: 'GameStore',
    image: '/images/GameStore.png',
    href: 'https://gamestoreku.vercel.app/',
  },
  {
    title: 'ReactAdmin',
    image: '/images/ReactAdmin.webp',
    href: 'https://finmaadmin.netlify.app/',
  },
  {
    title: 'RandQuote',
    image: '/images/Randquote.webp',
    href: 'https://randquote.vercel.app/',
  },
  {
    title: 'QuranApp',
    image: '/images/QuranApp.webp',
    href: 'https://webquran.vercel.app/',
  },
  {
    title: 'PizzaJoint',
    image: '/images/PizzaJoint.webp',
    href: 'https://pizzajointapp.vercel.app/',
  },
  {
    title: 'Calculator',
    image: '/images/Calculator.webp',
    href: 'https://kalkulatorku.vercel.app/',
  },
  {
    title: 'ChatRoom',
    image: '/images/ChatRoom.webp',
    href: 'https://metachatroom.netlify.app/',
  },
];
