import Spinner from "@/components/common/loader/Spinner";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="-translate-y-24 flex flex-col gap-3 items-center">
        <span className="text-2xl skeleton skeleton-text">
          Loading projects...
        </span>
        <Spinner size={50} />
      </div>
    </div>
  );
}

export default loading;
