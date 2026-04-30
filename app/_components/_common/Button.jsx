import Image from "next/image";

function Button({ children, className = "", icon, alt }) {
  return (
    <button className={`flex items-center gap-2 btn ${className}`}>
      {icon && <Image src={icon} width={10} height={10} alt={alt} />}
      {children}
    </button>
  );
}

export default Button;
