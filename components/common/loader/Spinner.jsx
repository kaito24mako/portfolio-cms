import { ClipLoader } from "react-spinners";

function Spinner({ size = 40 }) {
  return <ClipLoader color="currentColor" size={size} />;
}

export default Spinner;
