import Spinner from "@/components/common/loader/Spinner";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="-translate-y-45 flex flex-col gap-3 items-center">
        <span className="text-xl skeleton skeleton-text">
          Loading project data...
        </span>
        <Spinner size={50} />
      </div>
    </div>
  );
}

export default loading;
