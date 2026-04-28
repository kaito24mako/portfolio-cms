import Image from "next/image";
import bg from "@/public/placeholders/library.png";

function CardSmall({ imgAlt = "", title, description, btnText = "" }) {
  return (
    <div className="card image-full shadow-sm">
      <figure className="relative min-h-48">
        <Image
          src={bg}
          fill
          className="object-cover object-top"
          placeholder="blur"
          alt={imgAlt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-soft btn-sm">{btnText}</button>
        </div>
      </div>
    </div>
  );
}

export default CardSmall;
