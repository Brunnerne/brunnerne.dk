import config from '../../config.json';
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useInterval } from 'react-use';

interface StartingPageProps {
    inputRef: React.MutableRefObject<HTMLInputElement>;
}

const updateInterval = 10;
const totalDuration = 3000;
const hitProcentage = 100 - (Math.random() * 30);

const StartingPage: React.FC<StartingPageProps> = ({ inputRef }) => {
    const router = useRouter();
    const [percent, setPercent] = React.useState(0);
    const [startTime, setStartTime] = React.useState(Date.now());
    const [eta, setEta] = React.useState(0);

    useEffect(() => {
        setTimeout(() => {
            router.push("/terminal");
        }, totalDuration);
    }, [router]);

    useInterval(() => {
        if (percent < hitProcentage) {
            // Smoothly go up in percent until the correct percent is reached
            // Added procentage is proporsional to the difference between the current percent and the correct percent
            let difference = (hitProcentage - percent) / 100;
            difference = Math.max(difference, 0.01);


            if (percent >= hitProcentage) {
                difference = 0;
            }

            setPercent(percent + difference);
        }

        // Calculate ETA
        const timeSinceStart = Date.now() - startTime; 
        const timePassed = timeSinceStart / totalDuration;
        const timeLeft = 1 - timePassed;
        if (timeLeft < 0) {
            setEta(0);
            return;
        } 
        setEta((timeLeft * totalDuration) / 1000);
    }, updateInterval);

    return (
        <>
            <Head>
                <title>{config.title}</title>
            </Head>

            <div ref={inputRef} className='flex flex-col items-center justify-center h-full animate-fade'>
                <div className='w-96'>
                    <h3>
                        <span className='text-primary'>Loading...</span>
                    </h3>
                    <div className='h-2'>
                        <div className='w-full h-full bg-tertiary rounded-full'>
                            <div className={'h-full rounded-full bg-primary'} style={{ width: percent + "%" }}></div>
                        </div>
                    </div>
                    <div className='flex justify-between w-96'>
                        <small>
                            <span className='text-primary'>{percent.toFixed(0)}%</span>
                        </small>
                        <small>
                            <span className='text-primary'>ETA: {eta.toFixed(0)}s</span>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StartingPage;
