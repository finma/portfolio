import ButtonLink from '@/components/links/ButtonLink';

export const Heading = () => {
  return (
    <div className='z-[9] overflow-hidden absolute w-full h-screen'>
      <div className='flex justify-center items-end pb-24 w-full h-full lg:justify-start lg:items-center lg:pb-0'>
        <div className='flex flex-col space-y-4 lg:space-y-8'>
          <div
            data-aos='fade-right'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            className='space-y-1 w-full lg:space-y-5'
          >
            <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
              About Me
            </h1>
          </div>
          <div className='space-y-2 w-full md:space-y-4'>
            <div
              data-aos='fade-right'
              data-aos-easing='anticipate'
              data-aos-duration='1000'
              data-aos-delay='100'
              className='bg-red-custom w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:w-[88px]'
            ></div>
            <div
              data-aos='fade-right'
              data-aos-easing='anticipate'
              data-aos-duration='1000'
              data-aos-delay='150'
              className='bg-red-custom ml-[30px] w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:ml-[44px] md:w-[88px]'
            ></div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='w-full'
          >
            <h2 className='text-sm font-medium tracking-wider text-white md:text-2xl md:leading-relaxed'>
              I love Coding, Technology, <br /> and Learn New Things.
            </h2>
          </div>
          <div
            data-aos='fade-right'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='300'
            className='w-full'
          >
            <ButtonLink variant='primary' href='/components'>
              Show me more
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
