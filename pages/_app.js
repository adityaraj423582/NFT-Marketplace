import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { Navbar, Footer } from '../components';
const MyApp = function ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/50c8a54d2d.js"
        crossOrigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
};

export default MyApp;
