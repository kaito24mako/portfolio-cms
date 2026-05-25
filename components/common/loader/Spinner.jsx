import { ClipLoader } from "react-spinners";

function Spinner({ size = 40 }) {
  return (
    <ClipLoader
      color="currentColor"
      size={size}
      speedMultiplier={0.6}
      cssOverride={{ opacity: 0.5 }}
    />
  );
}

export default Spinner;
