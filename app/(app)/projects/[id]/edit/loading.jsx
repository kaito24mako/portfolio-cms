import Spinner from "@/components/common/loader/Spinner";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="-translate-y-24 flex flex-col gap-3 items-center">
        <p className="text-xl">Loading project data...</p>
        <Spinner size={80} />
      </div>
    </div>
  );
}

export default loading;
