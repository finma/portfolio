import { getAge } from '@/lib/helper';

export const WhoIAm = () => {
  const age = getAge();

  return (
    <section className='flex flex-col mb-32 w-full h-full lg:flex-row'>
      <div
        data-aos='fade-right'
        data-aos-easing='easeInOutCubic'
        data-aos-duration='1000'
        className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'
      >
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>01</span> Who I Am
        </h3>
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='easeInOutCubic'
        data-aos-duration='1000'
        className='px-10 w-full h-full lg:px-12 lg:w-1/2'
      >
        <p className='leading-[1.4rem] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem] lg:text-justify'>
          Hello, my name is Firman Maulana. I am {age} years old and live in
          Indonesia. I graduated with a Bachelor&apos;s degree in Informatics
          Engineering from Universitas Siliwangi with experience as a fullstack
          developer through internships and freelance work. I am committed to
          becoming a fullstack developer with skills in Javascript/Typescript,
          ReactJS, NextJS, ExpressJS, NestJS, MongoDB, MySQL, etc.
        </p>
      </div>
    </section>
  );
};
