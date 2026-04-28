import Image from "next/image";

function Statistic() {
  return (
    <div className="flex gap-2 border rounded w-fit py-2 px-4 pr-8">
      <Image src="/icons/stat.svg" width={50} height={50} alt="" />
      <div>
        <h3>Total Projects</h3>
        <span className="font-semibold">5</span>
      </div>
    </div>
  );
}

export default Statistic;
