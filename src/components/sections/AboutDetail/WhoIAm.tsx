import { getAge } from '@/lib/helper';

export const WhoIAm = () => {
  const age = getAge();

  return (
    <section className='flex flex-col mb-32 w-full h-full lg:flex-row'>
      <div className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'>
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>01</span> Who I Am
        </h3>
      </div>
      <div className='px-10 w-full h-full lg:px-12 lg:w-1/2'>
        <p className='leading-[1.4rem] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem] lg:text-justify'>
          Hello, my name is Firman Maulana. I am {age} years old and live in
          Indonesia. I am currently studying as a student at the Faculty of
          Engineering, majoring in Information Technology at the Siliwangi
          University.
        </p>
      </div>
    </section>
  );
};
