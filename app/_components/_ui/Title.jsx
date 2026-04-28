function Title({ heading, subHeading }) {
  return (
    <div>
      <h1 className="text-3xl">{heading}</h1>
      <h2>{subHeading}</h2>
    </div>
  );
}

export default Title;
