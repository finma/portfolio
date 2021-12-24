export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='w-full h-10 bg-transparent'>
      <p className='text-sm text-center text-white'>
        &copy;{year} FINMA. All Right Reserved
      </p>
    </div>
  );
};
