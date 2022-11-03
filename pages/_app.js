import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Header from '../Components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
