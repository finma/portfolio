/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormEvent, useRef, useState } from 'react';
import { toast } from 'sonner';

import Button from '@/components/buttons/Button';
import { FormInput } from '@/components/form/FormInput';
import { FormTextarea } from '@/components/form/FormTextarea';

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
          {/* Name */}
          <div className='px-3 mb-2 w-full md:mb-0 md:w-1/2'>
            <FormInput
              id='name'
              label='Name'
              type='text'
              placeholder='Name'
              required
            />
          </div>

          {/* Email */}
          <div className='px-3 w-full md:w-1/2'>
            <FormInput
              id='email'
              label='Email'
              type='email'
              placeholder='Email'
            />
          </div>
        </div>

        {/* Subject */}
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 w-full'>
            <FormInput
              id='subject'
              label='Subject'
              type='text'
              placeholder='Subject'
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className='flex flex-wrap -mx-3 mb-2 lg:mb-6'>
          <div className='px-3 w-full'>
            <FormTextarea
              id='message'
              label='Message'
              placeholder='Message'
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
