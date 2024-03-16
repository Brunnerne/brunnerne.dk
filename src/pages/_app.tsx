import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps, router }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <meta charSet="UTF-8" />

        <meta name="manifest" content="/site.webmanifest" />

        <meta name="description" content="Brunnerne, CTF team based in southern Denmark" />
        <meta name="keywords" content="Brunnerne, CTF, Capture The Flag, Cybersecurity, Cyber, Security, Denmark, Southern Denmark" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brunnerne.dk" />
        <meta property="og:title" content="Brunnerne" />
        <meta property="og:description" content="Brunnerne, CTF team based in southern Denmark" />
        <meta property="og:image" content="https://brunnerne.dk/assets/logo-bg.webp" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://brunnerne.dk" />
        <meta property="twitter:title" content="Brunnerne" />
        <meta property="twitter:description" content="Brunnerne, CTF team based in southern Denmark" />
        <meta property="twitter:image" content="https://brunnerne.dk/assets/logo-bg.webp" />
      </Head>

      {/* min-w-max */}
      <div
        className="text-dark-foreground  text-xs 2xl:min-w-full 2xl:text-base"
        onClick={onClickAnywhere}
      >
        <div className="bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </div>
      </div>
    </>
  );
};

export default App;
