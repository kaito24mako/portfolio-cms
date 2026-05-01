import Image from "next/image";

function Button({ children, className = "", icon, alt = "" }) {
  const Icon = typeof icon === "function" ? icon : null;

  return (
    <button className={`gap-2 btn shadow-sm ${className}`}>
      {/* {icon && <Image src={icon} width={10} height={10} alt={alt} />} */}

      {/* use svg component if prop is a component, else make it an Image */}
      {Icon ? (
        <Icon />
      ) : icon ? (
        <Image src={icon} width={10} height={10} alt={alt} />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
