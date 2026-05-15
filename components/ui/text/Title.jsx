function Title({ font, heading, subHeading }) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className={`text-4xl sm:text-5xl ${font} font-semibold`}>
        {heading}
      </h1>
      <h2 className="text-base sm:text-2xl font-light">{subHeading}</h2>
    </div>
  );
}

export default Title;
