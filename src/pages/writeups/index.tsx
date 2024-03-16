import React from "react";
import Card from "@components/web/molecules/Card";
import Link from "next/link";
import CTFs from "@writeups/writeups.json";

interface props {
    inputRef?: React.MutableRefObject<HTMLInputElement>;
}

const page: React.FC<props> = () => {
    return (
        <div className="pt-24 lg:pt-24 pb-11 ">
            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl font-bold text-dark-foreground text-center">
                Brunnerne writeups
            </h1>
            <h2 className="mt-4 text-xl lg:text-2xl font-bold text-dark-foreground text-center">
                Select a year to view writeups
            </h2>

            {/* content */}
            <Card className="mt-16 max-w-5xl text-wrap mx-auto">
                <ul className="list-disc list-inside text-lg pr-8">
                    {Object.keys(CTFs).map((year, i) => (
                        <li key={i}>
                            <Link href={`/writeups/${year}`}>{year}</Link>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Back footer */}
            <footer className="mt-16 text-center">
                <Link href="/">Go back to Home</Link>
            </footer>
        </div>
    );
}

export default page;
