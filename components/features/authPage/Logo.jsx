import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center pr-8">
      <Image
        src="/logo.svg"
        width={120}
        height={120}
        loading="eager"
        alt="Logo of Mako"
      />
      <h1 className="text-6xl font-heading">Mako</h1>
    </div>
  );
}

export default Logo;
