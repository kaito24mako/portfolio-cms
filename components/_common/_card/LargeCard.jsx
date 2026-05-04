import Image from "next/image";
import Badge from "../Badge";
import Button from "../Button";
import GithubIcon from "../../_images/_icons/GithubIcon";
import WebIcon from "../../_images/_icons/WebIcon";
import EditIcon from "../../_images/_icons/EditIcon";

function LargeCard({ title, updated, description, tags, image, status, alt }) {
  return (
    <div className="flex flex-col md:flex-row w-fit rounded-sm overflow-hidden shadow-md bg-base-300 h-max">
      <div className="flex flex-col gap-3 shadow-sm p-6 md:p-8 rounded-l-sm">
        <div className="flex flex-col items-center gap-2">
          {/* title and badge */}
          <div className="flex items-center gap-2 sm:gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
            <Badge
              text={status}
              className={
                (status === "Published" && "badge-success") ||
                (status === "Draft" && "badge-warning") ||
                (status === "Archived" && "badge-info")
              }
            />
          </div>

          {/* updatedAt */}
          <p className="text-xs sm:text-sm opacity-87">
            Last edited: {updated}
          </p>

          {/* project description */}
          <p className="text-xs sm:text-sm max-w-[30ch] text-center">
            {description}
          </p>

          <div className="flex gap-2">
            {tags?.map((t, index) => {
              return (
                <Badge
                  text={t}
                  className="badge-soft badge-primary"
                  key={index}
                />
              );
            })}
          </div>
        </div>

        {/* edit button */}
        <Button className="btn-sm" icon={EditIcon} href="/projects/edit">
          Edit
        </Button>
      </div>

      <div className="relative h-full shrink-0 self-stretch overflow-hidden">
        <Image src={image} width={510} height={510} alt={alt} />

        <div className="absolute bottom-3 flex justify-between gap-3 w-full px-3">
          <Button className="btn-sm" icon={WebIcon}>
            View Site
          </Button>
          <Button className="btn-sm" icon={GithubIcon}>
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
