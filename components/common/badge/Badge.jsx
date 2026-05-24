import AlertIcon from "@/components/icons/ui/AlertIcon";

function Badge({ icon = false, text, className = "", children }) {
  return (
    <div className={`badge text-xs opacity-95 ${className}`}>
      {icon ? <AlertIcon /> : ""}
      {text}
      {children}
    </div>
  );
}

export default Badge;
