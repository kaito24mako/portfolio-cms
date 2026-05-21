function Title({ font, heading, subHeading, style }) {
  return (
    <div className="flex flex-col gap-1 mr-3">
      <h1 className={`text-4xl sm:text-5xl font-semibold ${font}`}>
        {heading}
      </h1>
      <h2 className={`text-base sm:text-xl md:text-2xl font-light ${style}`}>
        {subHeading}
      </h2>
    </div>
  );
}

export default Title;
