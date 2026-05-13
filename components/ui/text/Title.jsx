function Title({ font, heading, subHeading }) {
  return (
    <div>
      <h1 className={`text-4xl sm:text-5xl ${font} font-semibold`}>
        {heading}
      </h1>
      <h2 className="text-base sm:text-2xl sm:opacity-80 font-light">
        {subHeading}
      </h2>
    </div>
  );
}

export default Title;
