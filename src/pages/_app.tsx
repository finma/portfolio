import AOS from 'aos';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

import 'aos/dist/aos.css';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
