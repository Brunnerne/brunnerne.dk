import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-5xl font-bold text-dark-foreground'>
        404 - Not Found
      </h1>
      <p className='text-dark-foreground mt-8'>
        The page you are looking for does not exist.
      </p>
      <Link href='/' className='mt-4'>
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
