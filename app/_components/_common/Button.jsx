import Image from "next/image";
import Link from "next/link";

function Button({ children, className = "", icon, alt = "", href }) {
  const Icon = typeof icon === "function" ? icon : null;
  const content = (
    <>
      {/* {icon && <Image src={icon} width={10} height={10} alt={alt} />} */}
      {/* use svg component if prop is a component, else make it an Image */}
      {Icon ? (
        <Icon />
      ) : icon ? (
        <Image src={icon} width={10} height={10} alt={alt} />
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`gap-2 btn shadow-sm ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`gap-2 btn shadow-sm ${className}`}>{content}</button>
  );
}

export default Button;
