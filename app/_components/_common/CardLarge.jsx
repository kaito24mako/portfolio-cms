import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";
import GithubIcon from "../_images/_icons/GithubIcon";
import WebIcon from "../_images/_icons/WebIcon";
import EditIcon from "../_images/_icons/EditIcon";

function CardLarge() {
  return (
    <div className="flex flex-col md:flex-row w-fit rounded-sm overflow-hidden shadow-md bg-base-300 h-max">
      <div className="flex flex-col gap-3 shadow-sm p-6 md:p-8 rounded-l-sm">
        <div className="flex flex-col items-center gap-2">
          {/* title and badge */}
          <div className="flex items-center gap-2 sm:gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">Book Library</h2>
            <Badge text="Active" className="badge-success" />
          </div>

          {/* updatedAt */}
          <p className="text-xs sm:text-sm opacity-87">
            Last modified: Feb 24, 2026
          </p>

          {/* project description */}
          <p className="text-xs sm:text-sm max-w-[30ch] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, ad
            laboriosam voluptatum consectetur reiciendis beatae.
          </p>

          <div className="flex gap-2">
            <Badge text="Next.js" className="badge-soft badge-primary" />
            <Badge text="Tailwind CSS" className="badge-soft badge-primary" />
            <Badge text="SQLite" className="badge-soft badge-primary" />
          </div>
        </div>

        {/* edit button */}
        <Button className="btn-sm" icon={EditIcon}>
          Edit
        </Button>
      </div>

      <div className="relative h-full shrink-0 self-stretch overflow-hidden">
        <Image
          src="/placeholders/library.png"
          width={510}
          height={510}
          alt="Library Project"
        />

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

export default CardLarge;
