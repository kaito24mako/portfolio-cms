// import styles
import "@/app/_styles/globals.css";

// fonts
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

// metadata
export const metadata = {
  title: {
    template: "%s | Mako",
    default: "Mako",
  },
  description: "A portfolio CMS for easy customisation of portfolios.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="nord"
      className={`${geistSans.variable} ${poiret.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content text-base antialiased font-primary!">
        {children}
      </body>
    </html>
  );
}
