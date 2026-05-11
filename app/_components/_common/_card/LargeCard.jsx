import Image from "next/image";
import Badge from "../Badge";
import Button from "../Button";
import GithubIcon from "../../_images/_icons/GithubIcon";
import WebIcon from "../../_images/_icons/WebIcon";
import EditIcon from "../../_images/_icons/EditIcon";

function LargeCard({ tags = [], ...props }) {
  return (
    <div className="flex flex-col md:flex-row w-fit rounded-sm shadow-md bg-base-300">
      <div className="flex flex-col gap-3 shadow-sm p-6 md:p-8 rounded-l-sm">
        <div className="flex flex-col items-center gap-2">
          {/* title and badge */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-semibold">{props.title}</h2>
            <Badge
              text={props.status}
              className={
                (props.status === "Published" && "badge-success") ||
                (props.status === "Draft" && "badge-warning") ||
                (props.status === "Archived" && "badge-info")
              }
            />
          </div>

          {/* updatedAt */}
          <p className="text-xs sm:text-sm opacity-87">
            Last edited: {props.updatedAt}
          </p>

          {/* project description */}
          <p className="text-xs sm:text-sm max-w-[30ch] text-center">
            {props.description}
          </p>

          {/* tags */}
          <div className="flex gap-2">
            {tags.length > 0 &&
              tags.map((t, index) => (
                <Badge
                  text={t}
                  className="badge-soft badge-primary"
                  key={index}
                />
              ))}
          </div>
        </div>

        {/* edit button */}
        <Button
          className="btn-sm bg-base-100 hover:bg-base-300"
          icon={EditIcon}
          href={`/projects/${props.id}/edit`}
        >
          Edit
        </Button>
      </div>

      <div className="relative h-full overflow-hidden">
        {props.image && (
          <Image src={props.image} width={510} height={510} alt={props.alt} />
        )}

        <div className="absolute bottom-3 flex justify-between gap-3 w-full px-3">
          <Button className="btn-sm" icon={WebIcon} href={props.siteUrl}>
            View Site
          </Button>
          <Button className="btn-sm" icon={GithubIcon} href={props.githubUrl}>
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
