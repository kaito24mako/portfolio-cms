import Title from "@/components/common/text/Title";
import Link from "daisyui/components/link";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Contact Us"
        subHeading="Have any questions or want to contact me for business inquiries?"
      />

      <div className="flex flex-col gap-2"></div>
    </div>
  );
}

export default AboutPage;
