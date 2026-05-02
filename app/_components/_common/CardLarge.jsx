import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";
import GithubIcon from "../_images/_icons/GithubIcon";
import WebIcon from "../_images/_icons/WebIcon";
import EditIcon from "../_images/_icons/EditIcon";

function CardLarge() {
  return (
    <>
      <div className="flex gap-15 border- p-5 w-fit rounded-xl shadow-md bg-base-300">
        <span className="text-7xl font-heading">1</span>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            {/* title and badge */}
            <div className="flex items-center gap-1 sm:gap-4 flex-col sm:flex-row">
              <h2 className="text-xl md:text-3xl font-semibold">Tic Tac Toe</h2>
              <Badge text="Active" className="badge-success" />
            </div>

            {/* updatedAt */}
            <p className="text-xs sm:text-sm opacity-87">
              Last modified: Feb 24, 2026
            </p>

            {/* project description */}
            <p className="text-xs sm:text-base max-w-[30ch]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, ad
              laboriosam voluptatum consectetur reiciendis beatae.
            </p>
          </div>

          {/* edit button */}
          <Button className="btn-sm" icon={EditIcon}>
            Edit
          </Button>
        </div>

        <div className="relative h-full">
          <div className="border-current rounded">
            <Image
              src="/placeholders/library.png"
              width={450}
              height={450}
              alt="Library Project"
            />
          </div>

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
    </>
  );
}

export default CardLarge;
