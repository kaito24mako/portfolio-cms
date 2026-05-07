import Image from "next/image";
import Link from "next/link";

import notFound from "@/public/placeholders/notFound.svg";

function NotFoundPage() {
  return (
    <div>
      <h1>404 | Page not found </h1>
      <p>You are in the wrong place!</p>
      <Image src={notFound} alt="Not Found Page" loading="lazy" />
      <ul>
        <li>
          <Link href="/">Return to Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default NotFoundPage;
