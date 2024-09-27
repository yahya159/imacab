'use client'
import { useState, useEffect } from "react";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

// Composant de squelette de chargement
function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-32 bg-gray-300 lg:col-span-5 xl:col-span-6"></div>
      <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
          <div className="mt-2 h-8 bg-gray-300 rounded"></div>
          <div className="mt-4 h-4 bg-gray-300 rounded"></div>
          <div className="mt-4 h-4 bg-gray-300 rounded"></div>
          <div className="mt-4 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://www.imacab.net/wp-content/uploads/2022/07/lost-places-1801660_1280-1.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-80"></div>

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <Image src="/svgviewer-png-output.png" alt="Logo" width={100} height={100} />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Imacab
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            IMACAB, YOUR PARTNER IN ELECTRIC CABLES
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <Image src="/logo.svg" alt="Logo" width={100} height={100} />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Imacab
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
              IMACAB, YOUR PARTNER IN ELECTRIC CABLES
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}