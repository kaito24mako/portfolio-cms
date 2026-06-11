import Sidebar from "@/components/layout/Sidebar";
import spotlightBg from "@/public/bg/spotlight.svg";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

import { ToastContainer, Slide } from "react-toastify";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppLayout({ children }) {
  // redirect to login page if user has no token
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    // note: Header is nested inside Sidebar because I'm using the DaisyUI sidebar
    <Sidebar>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss={false}
        theme="dark"
        limit={3}
        closeButton={false}
        transition={Slide}
        style={{ zIndex: 100 }}
      />

      <div className="flex-1 p-4 pb-10">
        <Image
          src={spotlightBg}
          fill
          alt="four colourful spotlights"
          className="object-cover object-top pointer-events-none"
        />
        <main className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36 flex-1 w-full">
          {children}
        </main>
      </div>
      <Footer />
    </Sidebar>
  );
}
