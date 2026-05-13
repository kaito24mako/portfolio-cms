import Image from "next/image";
import React from "react";

import GithubIcon from "@/components/icons/ui/GithubIcon";
import facebook from "@/public/socials/facebook.png";
import github from "@/public/socials/github.png";
import instagram from "@/public/socials/instagram.png";
import InstagramIcon from "../icons/ui/InstagramIcon";

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
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-3"
        >
          <GithubIcon />
          <InstagramIcon />
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
