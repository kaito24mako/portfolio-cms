import Image from "next/image";
import Button from "../button/Button";
import Badge from "../badge/Badge";

function SmallCard({ ...props }) {
  return (
    <div className="card card-sm md:card-md 2xl:card-lg image-full shadow-md h-50 md:h-60">
      <figure className="relative">
        <Image
          src={props.image}
          fill
          className="object-cover object-top"
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          <h2 className="card-title">{props.title}</h2>
          <Badge
            text={props.status}
            className={
              (props.status === "Published" && "badge-success") ||
              (props.status === "Draft" && "badge-warning") ||
              (props.status === "Archived" && "badge-info")
            }
          />
        </div>

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
