import Image from "next/image";
import bg from "@/public/placeholders/library.png";
import Button from "./Button";

function CardSmall({ imgAlt = "", title, description, btnText = "" }) {
  return (
    <div className="card image-full shadow-md card-sm">
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

export default CardSmall;
