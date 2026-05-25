import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import bgWaves from "@/public/bg/spotlight.svg";

function NotFoundPage() {
  return (
    <Sidebar>
      <div className="p-4 min-h-screen">
        <Image
          src={bgWaves}
          fill
          alt=""
          className="object-cover object-top pointer-events-none"
        />
        <div className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36 flex min-h-full justify-center">
          <div className="flex flex-col gap-4 text-center mt-50">
            <h1 className="text-5xl">404</h1>
            <h1 className="text-3xl">
              Oops, we couldn&apos;t find the page you&apos;re looking for.
            </h1>
            <Link href="/" className="link link-hover font-medium">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Sidebar>
  );
}

export default NotFoundPage;
