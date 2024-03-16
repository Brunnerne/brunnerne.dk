import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import CTFs from '@writeups/writeups.json';
import Link from 'next/link';
import Card from '@components/web/molecules/Card';
import MarkdownHTML from '@components/web/molecules/MarkdownHTML';

export default function Page() {
  const router = useRouter()

  let slug = [];
  if (router.query.slug instanceof Array) {
    slug = router.query.slug;
  } else {
    slug = [router.query.slug ?? ""];
  }

  const { year, ctf, category, writeup } = validateSlug(router.query.slug as string[]);
  const list = [year, ctf, category, writeup].filter((x) => x !== null);

  return (
    <div className="pt-24 lg:pt-24 pb-11 ">
      {/* Heading */}
      <h1 className="text-3xl lg:text-5xl font-bold text-dark-foreground text-center">
        Brunnerne writeups
      </h1>
      <h2 className="mt-4 text-xl lg:text-2xl font-bold text-dark-foreground text-center">
        {list.join(' / ')}
      </h2>


      {/* content */}
      <Card className="mt-16 max-w-5xl text-wrap mx-auto">
        <p className="mb-4">
          <Link href={`/writeups/${slug.slice(0, -1).join('/')}`}>
            ← Go one step up
          </Link>
        </p>
        <CardContent year={year} ctf={ctf} category={category} writeup={writeup} />
      </Card>

      {/* Back footer */}
      <footer className="mt-16 text-center">
        <Link href="/writeups">
          Go back to writeup overview
        </Link>
      </footer>
    </div>
  );
};

function CardContent({ year, ctf, category, writeup }) {
  const router = useRouter()
  const [content, setContent] = React.useState<string | null>("Loading...");

  useEffect(() => {
    if (router.query.slug && year && ctf && category && writeup) {
      fetch(`/writeups-md/${year}/${ctf}/${category}/${writeup}.md`).then(async (res) => {
        if (!res.ok) {
          setContent("*Could not load writeup*");
          return;
        }
        setContent(await res.text());
      });
    }
  }, [router.query.slug, year, ctf, category, writeup]);

  if (!router.query.slug) {
    return <p>Loading...</p>;
  }

  if (year === null) {
    return router.push('/writeups');
  }

  if (!ctf) {
    return <YearList year={year} />;
  }

  if (!category) {
    return <CTFList year={year} ctf={ctf} />;
  }

  if (!writeup) {
    return <CategoryList year={year} ctf={ctf} category={category} />;
  }

  // If writeup is in list, return writeup
  // Writeup is stored in a markdown file, as the format of this path
  try {
    return <MarkdownHTML content={content} includeHTML />;
  } catch (error) {
    console.error(error);
    return <p>Writeup not found</p>;
  }
}

function validateSlug(slug: string[]): { year: number, ctf: string, category: string, writeup: string } {
  if (!slug) {
    return { year: null, ctf: null, category: null, writeup: null }
  }

  // Get year (first element in slug)
  const year = parseInt(slug[0] ?? "");

  if (isNaN(year) && !CTFList[year]) {
    return { year: null, ctf: null, category: null, writeup: null }
  }

  // Get CTF name (second element in slug)
  const ctf = slug[1] ?? "";

  if (!ctf || !CTFs[year][ctf]) {
    return { year, ctf: null, category: null, writeup: null }
  }

  // Get category (third element in slug)
  const category = slug[2] ?? "";

  if (!category || !CTFs[year][ctf][category]) {
    return { year, ctf, category: null, writeup: null }
  }

  // Get writeup name (fourth element in slug)
  const writeup = slug[3] ?? "";

  if (!writeup || !CTFs[year][ctf][category].includes(writeup)) {
    return { year, ctf, category, writeup: null }
  }

  return { year, ctf, category, writeup };
}


function YearList({ year }) {
  return (
    <ul className="list-disc list-inside text-lg pr-8">
      {Object.keys(CTFs[year]).map((ctf, i) => (
        <li key={i}>
          <Link href={`/writeups/${year}/${ctf}`}>{ctf}</Link>
        </li>
      ))}
    </ul>
  );
}

function CTFList({ year, ctf }) {
  return (
    <ul className="list-disc list-inside text-lg pr-8">
      {Object.keys(CTFs[year][ctf]).map((category, i) => (
        <li key={i}>
          <Link href={`/writeups/${year}/${ctf}/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

function CategoryList({ year, ctf, category }) {
  return (
    <ul className="list-disc list-inside text-lg pr-8">
      {CTFs[year][ctf][category].map((writeup, i) => (
        <li key={i}>
          <Link href={`/writeups/${year}/${ctf}/${category}/${writeup}`}>{writeup}</Link>
        </li>
      ))}
    </ul>
  );
}
