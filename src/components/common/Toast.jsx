import { useEffect } from "react";
import { X } from "lucide-react";
import Portal from "../Portal";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  if (!message) return null;

  return (
    <Portal>
      <div
        className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in max-w-sm`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{message}</span>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default Toast;
