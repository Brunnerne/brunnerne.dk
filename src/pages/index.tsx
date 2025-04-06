import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import RollingRevealText from '../components/web/molecules/RollingRevealText';
import RollingText from '../components/web/atoms/RollingText';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { get } from 'http';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const HEADERTIMEOUT = 800;
const SUBHEADERTIMEOUT = 1200;
const CHARTIME = 50;
const BUTTONSTIMEOUT = SUBHEADERTIMEOUT + ((35 + 37) * CHARTIME);

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const router = useRouter();

  const [getInTouch, setGetInTouch] = React.useState("Get in touch");

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div ref={inputRef} className='pt-24 lg:pt-52 pb-11 flex flex-col items-center bg-dark-background animate-fade'>
        <h1 className='mt-15 text-5xl lg:text-8xl font-bold text-dark-foreground'>
          <RollingRevealText text="Brunnerne" charTime={CHARTIME} timeout={HEADERTIMEOUT} />
        </h1>
        <h2 className='mt-5 text-xl lg:text-3xl font-bold text-dark-foreground text-center'>
          <RollingRevealText className='hidden lg:block' text="CTF team, based in southern Denmark" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT} />
          <span className='flex flex-wrap justify-center lg:hidden'>
            <RollingRevealText text="CTF" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT} />&nbsp;
            <RollingRevealText text="team," charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (4 * CHARTIME)} />&nbsp;
            <RollingRevealText text="based" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (10 * CHARTIME)} />&nbsp;
            <RollingRevealText text="in" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (16 * CHARTIME)} />&nbsp;
            <RollingRevealText text="southern" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (19 * CHARTIME)} />&nbsp;
            <RollingRevealText text="Denmark" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (28 * CHARTIME)} />
          </span>
        </h2>
        <div className='mt-52'>
          <h2>
            <RollingRevealText text="Log in to the Terminal to get started" charTime={CHARTIME} timeout={SUBHEADERTIMEOUT + (35 * CHARTIME)} />
          </h2>
        </div>
        <div className='mt-8'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              router.push('/starting');
            }}
          >
            <RollingRevealText text="Launch terminal" charTime={CHARTIME} timeout={BUTTONSTIMEOUT} />
          </button>
        </div>
        <div className='mt-10 text-center'>
          <button
            className='px-4 py-2 text-xl font-bold text-dark-background bg-dark-yellow border-2 border-dark-yellow rounded-md hover:bg-dark-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-dark-yellow focus:ring-offset-2'
            onClick={() => {
              setGetInTouch("Loading...");
              setTimeout(() => {
                setGetInTouch("Copying...");
              }, 1000);

              setTimeout(() => {
                setGetInTouch(`${prefix()}@` + config.site);

                // Pase to clipboard
                navigator.clipboard.writeText(`${prefix()}@` + config.site).then(() => {
                  console.log('Copied to clipboard');
                }
                ).catch((err) => {
                  console.error('Failed to copy: ', err);
                }
                );
              }, 1500);
            }}
          >
            <RollingRevealText text={getInTouch} charTime={CHARTIME} timeout={BUTTONSTIMEOUT + (16 * CHARTIME)} />
          </button>
          {
            getInTouch === `${prefix()}@${config.site}` &&
            (<small>
              <br />
              Email is copied to clipboard
            </small>)
          }
        </div>
        <div className='mt-10'>
          <Link href="/writeups">
            <RollingRevealText text="Or read our writeups" charTime={CHARTIME} timeout={BUTTONSTIMEOUT + (28 * CHARTIME)} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

function prefix() {
  const offset = [0x63, 0x62, 0x65, 0x7f, 0x6f, 0x75, 0x62];
  const text = [206, 209, 211, 243, 208, 224, 214];

  // Add the prefix
  return text.map((byte, index) => {
    return String.fromCharCode(byte - offset[index]);
  }).join('');
}
