import Title from "@/components/common/text/Title";
import Link from "next/link";

export const metadata = {
  title: "Contact",
};

function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Contact"
        subHeading="Have any questions or want to contact me for business inquiries?"
      />

      <div className="flex flex-col gap-2">
        <Title font="font-primary" subHeading="Contact details:" />
        <ul className="pl-8 w-fit">
          <Link href="tel:+61416127431">
            <li className="link link-hover list-disc w-fit">(+61) 416127431</li>
          </Link>
          <Link href="mailto:kaitowatanabemcc@gmail.com">
            <li className="link link-hover list-disc w-fit">
              kaitowatanabemcc@gmail.com
            </li>
          </Link>
        </ul>
      </div>

      <p>This page is a work in progress...</p>
    </div>
  );
}

export default ContactPage;
