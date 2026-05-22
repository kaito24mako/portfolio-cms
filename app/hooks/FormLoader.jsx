"use client";

import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";

function FormLoader() {
  // useFormStatus provides status info of the last form submission
  const { pending } = useFormStatus();

  // useRef used to refer to something that we don't want triggering re-renders
  const toastId = useRef(null);

  useEffect(() => {
    // Show one loading toast when the form starts submitting
    if (pending && !toastId.current) {
      toastId.current = toast.loading("Saving changes...");
    }

    // Remove the loading toast once submission is no longer pending
    if (!pending && toastId.current) {
      toast.dismiss(toastId.current);
      toastId.current = null;
    }

    // Also dismiss the toast if the component unmounts during redirect
    return () => {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    };
  }, [pending]);

  return null;
}

export default FormLoader;
