import Link from 'next/link';

// Default export is used to export a function from a module. 
export default function FirstPost() {
    return (
    <>
     <h1>First Post</h1>
     <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    );
  }