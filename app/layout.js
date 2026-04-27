// import styles
import "@/app/_styles/globals.css";

// import components
import Sidebar from "./_components/_layout/Sidebar";

// fonts
import { Geist, Cabin, Fira_Sans, Poiret_One } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
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
    default: "Dashboard | Mako",
  },
  description: "A portfolio CMS for easy customisation of portfolios.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cabin.variable} ${firaSans.variable} ${poiret.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content antialiased">
        <Sidebar>
          <div className="flex-1 p-4">
            <main>{children}</main>
          </div>
        </Sidebar>
      </body>
    </html>
  );
}
