import Link from "next/link";
import SocialsList from "../features/footer/SocialsList";

const services = [
  { title: "Dashboard", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Tags", link: "/tags" },
  { title: "Activity", link: "/activity" },
];

const company = [
  { title: "API guide", link: "/guide" },
  { title: "About us", link: "/about" },
  { title: "Contact", link: "/contact" },
];

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-5 ">
      <nav>
        <h3 className="footer-title">Services</h3>
        {services.map((s) => (
          <Link href={s.link} className="link link-hover" key={s.title}>
            {s.title}
          </Link>
        ))}
      </nav>

      <nav>
        <h3 className="footer-title">Company</h3>
        {company.map((c) => (
          <Link href={c.link} className="link link-hover" key={c.title}>
            {c.title}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-10">
        <div>
          <h3 className="footer-title">Social</h3>
          <div className="grid grid-flow-col gap-4">
            <SocialsList />
          </div>
        </div>

        <h3 className="footer-title">Copyright © 2026 Kaito Watanabe</h3>
      </nav>
    </footer>
  );
}

export default Footer;
