import { useRef, useState } from "react";
import { useIntersection, useInterval } from "react-use";

type Props = {
    length: number;
    rollTime?: number;
    className?: string;
}

const possibleChars = 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ|0123456789=';

export default function RollingText({ length, rollTime, className }: Props) {
    const componentRef = useRef(null);
    const intersection = useIntersection(componentRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });

    const [rollingWord, setRollingWord] = useState("");

    useInterval(() => {
        if (intersection && intersection.intersectionRatio >= 0.1) {
            if (length > 0) {
                // Get random text, the length of the original text
                setRollingWord(Array.from({ length: length }, () => possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))).join(''));
            }
        }
    }, rollTime || 50);

    return (
        <span ref={componentRef} suppressHydrationWarning>
            {length > 0 ? rollingWord : ""}
        </span>
    )
}
