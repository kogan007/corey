import { useEffect, useState } from "react";
import { clsx } from "clsx";

function ValidationMessage({
  message,
  isSubmitting,
  type = "error",
  errorClassName,
}: {
  message: string;
  isSubmitting: boolean;
  type?: "error" | "success";
  errorClassName?: string;
}) {
  const [show, setShow] = useState(!!message);

  useEffect(() => {
    const id = setTimeout(() => {
      const hasMessage = !!message;
      setShow(hasMessage && !isSubmitting);
    });
    return () => clearTimeout(id);
  }, [message, isSubmitting]);

  return (
    <div
      className={clsx(
        errorClassName ?? "",
        show ? "opacity-100" : "opacity-0 h-0",
        type === "error" ? "text-red-500" : "text-green-500",
        "transition-all duration-300 ease-in-out"
      )}
    >
      {message}
    </div>
  );
}

export default ValidationMessage;
