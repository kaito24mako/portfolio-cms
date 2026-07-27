"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children }) {
  // pending is true while server action runs (like redirecting)
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-neutral mt-4" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default SubmitButton;
