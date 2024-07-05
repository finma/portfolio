/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormEvent, useRef, useState } from 'react';
import { toast } from 'sonner';

import Button from '@/components/buttons/Button';

export const Form = () => {
  const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_URL!;

  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => {
        if (response.ok) {
          toast.success('Your message has been sent!');
          formRef.current?.reset();
        } else {
          toast.error('Your message has not been sent!');
        }
      })
      .catch((error) => console.error('Error sending message!', error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      data-aos='fade'
      data-aos-easing='easeInOutCubic'
      data-aos-duration='1000'
      className='flex justify-center items-start px-8 w-full md:p-0 lg:items-center lg:w-1/2'
    >
      <form onSubmit={onSubmit} ref={formRef} className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 mb-2 w-full md:mb-0 md:w-1/2'>
            <label
              className='block mb-2 text-sm font-bold tracking-wide text-white'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='name'
              name='name'
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
              className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='email'
              name='email'
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
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full leading-tight text-white bg-transparent rounded border-2 appearance-none focus:bg-transparent focus:outline-none'
              id='subject'
              name='subject'
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
              className='border-red-custom caret-red-custom block px-4 py-3 mb-3 w-full h-32 leading-tight text-white bg-transparent rounded border-2 appearance-none resize-none focus:bg-transparent focus:outline-none'
              id='message'
              name='message'
              placeholder='Message'
              rows={4}
              required
            />
          </div>
        </div>
        <Button type='submit' variant='primary' isLoading={isLoading}>
          Send message!
        </Button>
      </form>
    </div>
  );
};
