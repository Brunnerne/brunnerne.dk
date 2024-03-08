import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import RollingRevealText from '../components/web/molecules/RollingRevealText';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div ref={inputRef} className='pt-80 flex flex-col items-center bg-dark-background animate-fade'>
        <h1 className='mt-15 text-5xl lg:text-8xl font-bold text-dark-foreground'>
          <RollingRevealText text="Brunnerne" charTime={50} timeout={1000} />
        </h1>
        <h2 className='mt-5 text-xl lg:text-3xl font-bold text-dark-foreground'>
          <RollingRevealText text="CTF team, based in southern Denmark" charTime={50} timeout={1500} />
        </h2>
        <div className='mt-52'>
          <h2>Log in to the Terminal to get started</h2>
        </div>
        <div className='mt-8'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              window.location.href = '/terminal';
            }}
          >
            <RollingRevealText text="Launch terminal" charTime={50} timeout={3200} />
          </button>
        </div>
        <div className='mt-10'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              window.location.href = 'http://discord.brunnerne.dk';
            }}
          >
            <RollingRevealText text="Join Discord" charTime={50} timeout={3800} />
          </button>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
