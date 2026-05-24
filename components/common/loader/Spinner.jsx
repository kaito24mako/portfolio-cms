import { ClipLoader } from "react-spinners";

function Spinner({ size = 40 }) {
  return <ClipLoader color="currentColor" size={size} speedMultiplier={0.6} />;
}

export default Spinner;
