import Image from "next/image";
import bg from "@/public/placeholders/library.png";
import Button from "../Button";

function SmallCard({ ...props }) {
  return (
    <div className="card card-sm md:card-md 2xl:card-lg image-full shadow-md h-50 md:h-60">
      <figure className="relative">
        <Image
          src={bg}
          fill
          className="object-cover object-top"
          placeholder="blur"
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <Button
            className="btn btn-sm btn-soft "
            icon={props.btnIcon}
            href={props.btnLink}
          >
            {props.btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
