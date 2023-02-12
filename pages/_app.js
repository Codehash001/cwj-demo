import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 100})
  }, []);
  
  return (
   
    <>
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  <Analytics />
  </>
  
  )
}
