import { CheckCircle, AlertCircle, X, Eye } from "lucide-react";
import { motion } from "framer-motion";

function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Eye,
  };

  const colors = {
    success: "from-green-500 to-emerald-500",
    error: "from-red-500 to-pink-500",
    info: "from-blue-500 to-cyan-500",
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      className="fixed top-4 right-4 z-50"
    >
      <div
        className={`bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 flex items-center space-x-3 min-w-[300px]`}
      >
        <Icon size={20} />
        <span className="font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default Toast;
