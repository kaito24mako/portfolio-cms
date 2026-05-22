import Title from "@/components/common/text/Title";

function EndpointItem({ ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <Title subHeading={props.titleHeading} style={props.titleStyle} />
      <div className="mockup-code w-full">
        <pre>
          <code>{props.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default EndpointItem;
