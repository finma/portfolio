import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='w-full h-24 bg-transparent lg:h-12'>
      <p className='text-sm text-center text-white'>
        &copy;{year}{' '}
        <Link href='https://github.com/finma'>
          <a className='hover:text-red-custom'>FINMA.</a>
        </Link>{' '}
        All Right Reserved
      </p>
    </div>
  );
};
