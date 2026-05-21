import Button from "@/components/common/button/Button";
import Title from "@/components/common/text/Title";

function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title font="font-heading" heading="About Us" />

      <div className="flex flex-col gap-2">
        <Title font="font-heading" subHeading="What does Mako do?" />
        <p>
          Mako provides a way for developers to curate their portfolio site with
          ease.
        </p>
        <p>
          Instead of having to manually update your portfolio site with every
          new project, you can publish and display your projects through Mako.
        </p>
        <p>Maintaining your portfolio has never been easier! ✨</p>
      </div>

      <div className="flex flex-col gap-2">
        <Title font="font-heading" subHeading="Key features:" />
        <ul className="pl-3">
          <li>
            ✴︎ A <strong>free</strong> API to connect your portfolio site to
          </li>
          <li>
            ✴︎ <strong>Create</strong> your projects on Mako and publish to your
            portfolio
          </li>
          <li>
            ✴︎ <strong>Store</strong> your projects, published and unpublished,
            for tracking purposes
          </li>
          <li>
            ✴︎ Get <strong>statistics</strong> on how many projects use certain
            technologies
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <Title font="font-heading" subHeading="Connect to our API" />
        <p>
          To use Mako&apos;s services, you will first have to connect your
          portfolio site to our free RESTful API.
        </p>
        <p>Refer to our API guide for instructions:</p>
        <Button href="/guide" className="w-fit btn-primary">
          API guide
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Title font="font-heading" subHeading="Features coming soon..." />
        <ul className="pl-8">
          <li className="list-disc">
            Tags page with statistics on what and how many projects are using a
            certain technology
          </li>
          <li className="list-disc">
            An authentication/login system to make projects unique to each user
          </li>
          <li className="list-disc">
            Uploading a thumbnail image to a project
          </li>
          <li className="list-disc">
            Activity page with logs on the user&apos;s activities over time
          </li>
          <li className="list-disc">
            API endpoint for only published projects
          </li>
        </ul>
      </div>

      {/* <div className="flex flex-col gap-2">
        <Title font="font-heading" subHeading="I hope you enjoy the app!" />
      </div> */}
    </div>
  );
}

export default AboutPage;
