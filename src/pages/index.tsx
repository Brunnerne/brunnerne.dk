import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import RollingRevealText from '../components/web/molecules/RollingRevealText';
import RollingText from '../components/web/atoms/RollingText';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const HEADERTIMEOUT = 800;
const SUBHEADERTIMEOUT = 1200;
const BUTTONSTIMEOUT = SUBHEADERTIMEOUT + ((35 + 37) * 50);

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div ref={inputRef} className='pt-24 lg:pt-52 pb-11 flex flex-col items-center bg-dark-background animate-fade'>
        <h1 className='mt-15 text-5xl lg:text-8xl font-bold text-dark-foreground'>
          <RollingRevealText text="Brunnerne" charTime={50} timeout={HEADERTIMEOUT} />
        </h1>
        <h2 className='mt-5 text-xl lg:text-3xl font-bold text-dark-foreground text-center'>
          <RollingRevealText className='hidden lg:block' text="CTF team, based in southern Denmark" charTime={50} timeout={SUBHEADERTIMEOUT} />
          <span className='flex flex-wrap justify-center lg:hidden'>
            <RollingRevealText text="CTF" charTime={50} timeout={SUBHEADERTIMEOUT} />&nbsp;
            <RollingRevealText text="team," charTime={50} timeout={SUBHEADERTIMEOUT + (4 * 50)} />&nbsp;
            <RollingRevealText text="based" charTime={50} timeout={SUBHEADERTIMEOUT + (10 * 50)} />&nbsp;
            <RollingRevealText text="in" charTime={50} timeout={SUBHEADERTIMEOUT + (16 * 50)} />&nbsp;
            <RollingRevealText text="southern" charTime={50} timeout={SUBHEADERTIMEOUT + (19 * 50)} />&nbsp;
            <RollingRevealText text="Denmark" charTime={50} timeout={SUBHEADERTIMEOUT + (28 * 50)} />
          </span>
        </h2>
        <div className='mt-52'>
          <h2>
            <RollingRevealText text="Log in to the Terminal to get started" charTime={50} timeout={SUBHEADERTIMEOUT + (35 * 50)} />
          </h2>
        </div>
        <div className='mt-8'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              router.push('/starting');
            }}
          >
            <RollingRevealText text="Launch terminal" charTime={50} timeout={BUTTONSTIMEOUT} />
          </button>
        </div>
        <div className='mt-10'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              window.location.href = 'http://discord.brunnerne.dk';
            }}
          >
            <RollingRevealText text="Join Discord" charTime={50} timeout={BUTTONSTIMEOUT + (16 * 50)} />
          </button>
        </div>
        <div className='mt-10'>
          <Link href="/writeups">
            <RollingRevealText text="Or read our writeups" charTime={50} timeout={BUTTONSTIMEOUT + (28 * 50)} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
