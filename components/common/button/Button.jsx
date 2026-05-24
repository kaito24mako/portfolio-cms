import Image from "next/image";
import Link from "next/link";

function Button({
  children,
  className = "",
  icon,
  alt = "",
  href,
  newTab = false,
  ariaLabel = "",
  ...props
}) {
  const IconIsComponent = typeof icon === "function" ? icon : null;

  const content = (
    <>
      {/* if icon prop is a component, return as a component via <Icon/> */}
      {/* ...else return as an svg file via icon */}
      {/* ...else return as a next image via <Image/> */}
      {IconIsComponent ? (
        <IconIsComponent />
      ) : icon ? (
        <Image src={icon} width={10} height={10} alt={alt} />
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`gap-2 btn shadow-sm ${className}`}
        target={newTab ? "_blank" : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`gap-2 btn shadow-sm ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
