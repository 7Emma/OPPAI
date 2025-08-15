import { motion } from "framer-motion";

function LoadingButton({
  children,
  loading = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden
        bg-gradient-to-r from-coral to-turquoise 
        text-white font-bold py-4 px-8 rounded-2xl 
        transition-all duration-300 shadow-lg hover:shadow-xl
        flex items-center justify-center space-x-2
        ${
          loading || disabled
            ? "opacity-70 cursor-not-allowed"
            : "hover:scale-105"
        }
        ${className}
      `}
      {...props}
    >
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
        />
      )}
      {children}
    </button>
  );
}

export default LoadingButton;
