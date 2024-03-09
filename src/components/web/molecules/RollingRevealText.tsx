import { useRef, useState } from "react";
import { useIntersection, useInterval } from "react-use";
import RollingText from "../atoms/RollingText";

type Props = {
    /** The text to reveal */
    text: string;
    /** The time in milliseconds between each character reveal */
    charTime?: number;
    /** The time in milliseconds between the character change */
    rollTime?: number;
    /** The time in milliseconds to wait before starting the reveal */
    timeout?: number;
    className?: string;
}

export default function RollingRevealText({ text, className, charTime, rollTime, timeout }: Props) {
    const componentRef = useRef(null);
    const intersection = useIntersection(componentRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });

    const [charIndex, setCharIndex] = useState(-1);
    const [startTime, setStartTime] = useState<number>(Date.now());

    useInterval(() => {
        if (intersection && intersection.intersectionRatio >= 0.1) {
            if (timeout) {
                if (Date.now() - startTime < timeout) {
                    return;
                }
            }

            setCharIndex((charIndex) => {
                if (charIndex >= text.length - 1) {
                    return charIndex;
                }

                return charIndex + 1;
            });
        }
    }, charTime || 250);

    return (
        <span ref={componentRef} className={className}>
            {/* Correct word */}
            {text.slice(0, charIndex + 1)}
            {/* Rolling word */}
            <RollingText length={text.length - charIndex - 1} rollTime={rollTime} />
        </span>
    )
}
