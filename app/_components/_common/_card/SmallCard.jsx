import Image from "next/image";
import bg from "@/public/placeholders/library.png";
import Button from "../Button";

function SmallCard({ imgAlt = "", title, description, btnText = "" }) {
  return (
    <div className="card image-full shadow-md card-sm h-50 md:h-60">
      <figure className="relative min-h-45">
        <Image
          src={bg}
          fill
          className="object-cover object-top"
          placeholder="blur"
          alt={imgAlt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
          <Button className="btn-soft btn-sm">{btnText}</Button>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
