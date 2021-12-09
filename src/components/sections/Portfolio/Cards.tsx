import Image from 'next/image';
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
        <a>
          <div className='overflow-hidden relative w-full h-full'>
            <Image
              src={image}
              layout='fill'
              alt=''
              className='image transition duration-200 transform hover:scale-110'
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export const Cards = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 pt-20 pb-10 w-1/2'>
      {items.map(({ image, href }, i) => (
        <Card key={i} image={image} href={href} delay={i} />
      ))}
    </div>
  );
};

const items = [
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
  {
    image: '/images/profile.webp',
    href: 'localhost:3000',
  },
];
