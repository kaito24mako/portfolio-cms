import "@/styles/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Poiret_One } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poiret = Poiret_One({
  variable: "--font-poiret",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    template: "%s | Mako",
    default: "Mako",
  },
  description: "A portfolio CMS for easy customisation of portfolio sites.",
  keywords: ["portfolio-cms", "cms", "Mako"],
  author: "Kaito Watanabe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${poiret.variable}`}>
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content text-base antialiased font-primary! ">
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
