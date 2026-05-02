import AlertIcon from "../_images/_icons/AlertIcon";

function Badge({ icon = false, text, className = "" }) {
  return (
    <div className={`badge text-xs opacity-80 ${className}`}>
      {icon ? <AlertIcon /> : ""}
      {text}
    </div>
  );
}

export default Badge;
