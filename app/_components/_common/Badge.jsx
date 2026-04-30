import AlertIcon from "../_images/_icons/AlertIcon";

function Badge({ icon = false, text }) {
  return (
    <div className="badge badge-ghost text-xs opacity-80">
      {icon ? <AlertIcon /> : ""}
      {text}
    </div>
  );
}

export default Badge;
