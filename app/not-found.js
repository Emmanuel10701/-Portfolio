"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {

  const router = useRouter();
  const rout = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };
  const handleNavigation2 = () => {
    rout.push("/contact");
  };
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className=" font-semibold text-indigo-600 text-2xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleNavigation}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
            <button
              onClick={handleNavigation2}

              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm bg-slate-200"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
    