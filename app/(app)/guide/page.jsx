import EndpointItem from "@/components/features/guidePage/EndpointItem";
import Title from "@/components/common/text/Title";
import guideSections from "@/utils/guide/guideSections";

export const metadata = {
  title: "API Guide",
};

function ApiGuidePage() {
  const { endpointSections } = guideSections();

  return (
    <div className="flex flex-col gap-8">
      <Title font="font-heading" heading="API Guide" />

      <div className="flex flex-col gap-2">
        <Title font="font-primary" subHeading="What is this API for?" />
        <p>
          Mako provides a free RESTful API that external portfolio sites can use
          to dynamically render projects from. <br />
          Using our API endpoints, users can retrieve the projects that they
          have saved on Mako, which will then be rendered on their portfolio
          site.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Title font="font-primary" subHeading="Note:" />
        <ul className="pl-8">
          <li className="list-disc">
            The RESTful API returns JSON responses in the body
          </li>
          <li className="list-disc">Every request must be GET requests</li>
        </ul>
      </div>

      {endpointSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <Title subHeading={section.title} style="text-xl font-semibold!" />
          <p>{section.description}</p>

          {section.items.map((item, index) => (
            <EndpointItem
              key={index}
              titleHeading={item.title}
              titleStyle="md:text-xl!"
              code={item.code}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ApiGuidePage;
