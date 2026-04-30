function Title({ heading, subHeading }) {
  return (
    <div>
      <h1 className="text-5xl sm:font-3xl font-heading font-semibold">
        {heading}
      </h1>
      <h2 className="text-2xl opacity-80 font-light">{subHeading}</h2>
    </div>
  );
}

export default Title;
