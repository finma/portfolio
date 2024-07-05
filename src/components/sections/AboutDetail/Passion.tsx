import { passionItems } from '@/data/data';

import { CardPassion } from './components/CardPassion';

export const Passion = () => {
  return (
    <section className='flex flex-col mb-32 w-full h-full'>
      <div
        data-aos='fade-right'
        data-aos-easing='easeInOutCubic'
        data-aos-duration='1000'
        className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'
      >
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>02</span> Passion
        </h3>
      </div>
      <div className='flex flex-col justify-center items-center m-auto mt-0 space-y-10 w-full h-full lg:flex-row lg:justify-evenly lg:items-start lg:mt-20 lg:space-y-0'>
        {passionItems.map(({ title, icon, description }, index) => (
          <div
            key={title}
            data-aos='fade-up'
            data-aos-easing='easeInOutCubic'
            data-aos-duration='1000'
            data-aos-delay={index * 200}
          >
            <CardPassion title={title} icon={icon}>
              {description}
            </CardPassion>
          </div>
        ))}
      </div>
    </section>
  );
};
