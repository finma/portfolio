import Button from '@/components/buttons/Button';

export const Form = () => {
  return (
    <div
      data-aos='fade'
      data-aos-easing='easeInOutCubic'
      data-aos-duration='1000'
      className='flex justify-center items-start px-4 w-full md:p-0 lg:items-center lg:w-1/2'
    >
      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 mb-2 w-full md:mb-0 md:w-1/2'>
            <label
              className='block mb-2 text-sm font-bold tracking-wide text-white'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='border-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='name'
              type='text'
              placeholder='Name'
              required
            />
          </div>
          <div className='px-3 w-full md:w-1/2'>
            <label
              className='block mb-2 text-sm font-bold tracking-wide text-white'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='border-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='email'
              type='email'
              placeholder='Email'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 w-full'>
            <label
              className='block mb-2 text-sm font-bold tracking-wide text-white'
              htmlFor='password'
            >
              Subject
            </label>
            <input
              className='border-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='password'
              type='text'
              placeholder='Subject'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 w-full'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-bold tracking-wide text-white'
            >
              Message
            </label>
            <textarea
              className='border-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='message'
              rows={4}
              placeholder='Message'
              required
            ></textarea>
          </div>
        </div>
        <Button variant='primary'>Send message!</Button>
      </form>
    </div>
  );
};
