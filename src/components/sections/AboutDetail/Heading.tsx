/* eslint-disable @next/next/no-img-element */
export const Heading = () => {
  return (
    <section className='flex flex-col-reverse flex-wrap justify-around w-full h-screen'>
      <div className='flex justify-center items-start px-6 w-full h-1/3 lg:justify-start lg:items-center lg:px-0 lg:w-1/2 lg:h-full'>
        <div className='flex flex-col space-y-4 w-full lg:space-y-8'>
          <div className='space-y-1 w-full lg:space-y-5'>
            <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
              About Me
            </h1>
          </div>
          <div className='space-y-2 w-full md:space-y-4'>
            <div className='bg-red-custom w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:w-[88px]'></div>
            <div className='bg-red-custom ml-[30px] w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:ml-[44px] md:w-[88px]'></div>
          </div>
          <div className='w-full'>
            <h2 className='text-sm font-medium tracking-wider text-white md:text-2xl md:leading-relaxed'>
              I love Coding, Technology, <br /> and Learn New Things.
            </h2>
          </div>
          <div className='w-full'></div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-2/3 lg:w-1/2 lg:h-full'>
        <div className='image-container flex justify-center items-center p-6 w-full h-full md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] lg:p-0'>
          <img
            src='/images/profile.webp'
            alt=''
            className='image w-full h-full rounded-md shadow-xl'
          />
        </div>
      </div>
    </section>
  );
};
