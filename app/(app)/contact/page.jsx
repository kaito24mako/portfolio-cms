import Title from "@/components/common/text/Title";
import SocialsList from "@/components/features/footer/SocialsList";
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
        subHeading="Have any problems or inquiries? Contact us via phone or email."
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Title font="font-primary" subHeading="Phone number" />
          <Link href="tel:+61416127431">
            <p className="link link-hover">(+61) 416127431</p>
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <Title font="font-primary" subHeading="Email" />
          <Link href="mailto:kaitowatanabemcc@gmail.com">
            <p className="link link-hover">kaitowatanabemcc@gmail.com</p>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <Title font="font-primary" subHeading="Social network" />
          <div className="flex gap-3">
            <SocialsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
