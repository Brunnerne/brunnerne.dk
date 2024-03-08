import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/terminal/input';
import { useHistory } from '../components/terminal/history/hook';
import { History } from '../components/terminal/history/History';
import { banner } from '../utils/bin';

interface TerminalPageProps {
    inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Terminal: React.FC<TerminalPageProps> = ({ inputRef }) => {
    const containerRef = React.useRef(null);
    const {
        history,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useHistory([]);

    const init = React.useCallback(() => setHistory(banner()), []);

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView();
            inputRef.current.focus({ preventScroll: true });
        }
    }, [history, inputRef]);

    return (
        <>
            <Head>
                <title>{config.title} | Terminal</title>
            </Head>

            <div className="p-8 overflow-hidden h-full border-2 rounded border-dark-yellow">
                <div ref={containerRef} className="overflow-y-auto h-full">
                    <History history={history} />

                    <Input
                        inputRef={inputRef}
                        containerRef={containerRef}
                        command={command}
                        history={history}
                        lastCommandIndex={lastCommandIndex}
                        setCommand={setCommand}
                        setHistory={setHistory}
                        setLastCommandIndex={setLastCommandIndex}
                        clearHistory={clearHistory}
                    />
                </div>
            </div>
        </>
    );
};

export default Terminal;
