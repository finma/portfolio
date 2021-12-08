import { motion } from 'framer-motion';

export const Heading = () => {
  return (
    <div className='absolute w-full h-screen'>
      <div className='flex flex-col justify-center pb-10 space-y-4 w-full h-screen lg:space-y-8'>
        <motion.div
          variants={textAnimation}
          initial='initial'
          whileInView='showHeading'
          className='space-y-1 w-full lg:space-y-5'
        >
          <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
            FIRMAN
          </h1>
          <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
            MAULANA
          </h1>
        </motion.div>
        <motion.div
          variants={textAnimation}
          initial='initial'
          whileInView='showLines'
          className='space-y-2 md:space-y-4'
        >
          <div className='bg-red-custom w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:w-[88px]'></div>
          <div className='bg-red-custom ml-[30px] w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:ml-[44px] md:w-[88px]'></div>
        </motion.div>
        <motion.div
          variants={textAnimation}
          initial='initial'
          whileInView='showText'
        >
          <h2 className='text-sm font-medium tracking-wider text-white md:text-2xl md:leading-relaxed'>
            mern stack <br /> &nbsp;&nbsp;&nbsp; developer.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

const textAnimation = {
  initial: {
    x: '-100vw',
  },
  showHeading: {
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  showLines: {
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
  showText: {
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};
