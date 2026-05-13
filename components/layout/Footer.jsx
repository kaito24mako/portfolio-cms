import Image from "next/image";
import React from "react";

import facebook from "@/public/socials/facebook.png";
import github from "@/public/socials/github.png";
import instagram from "@/public/socials/instagram.png";

const socials = [
  { link: "https://github.com/", image: facebook, alt: "Link to Facebook" },
  { link: "https://facebook.com/", image: github, alt: "Link to GitHub" },
  {
    link: "https://instagram.com/",
    image: instagram,
    alt: "Link to Instagram",
  },
];

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 mt-10">
      <aside className="grid-flow-col items-center">
        <p>Kaito Watanabe © {new Date().getFullYear()}</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.580-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.930-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.170 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.220 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.220 1.61-.01 2.91-.01 3.31 0 .32.21.69.82.57C20.57 21.8 24 17.3 24 1224 5.37 18.63 0 12 0z" />
          </svg>
        </a>
        {/* {socials.map((s) => (
          <a href={s.link} target="_blank" key={s.link}>
            <Image src={s.image} alt={s.alt} width={28} height={28} />
          </a>
        ))} */}
      </nav>
    </footer>
  );
}

export default Footer;
