function LoadingPage({
  pageName = "contenu",
  variant = "default",
  showLogo = false,
  logoText = "APP",
}) {
  const variants = {
    default: "bg-slate-900 text-white",
    light: "bg-gray-50 text-gray-800",
    dark: "bg-black text-white",
    gradient:
      "bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white",
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${variants[variant]}`}
    >
      <div className="flex flex-col items-center gap-8 p-8">
        {/* Logo/Brand Section */}
        {showLogo && (
          <div className="mb-4 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">{logoText}</span>
            </div>
          </div>
        )}

        {/* Modern Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-300/20 border-t-blue-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin animate-reverse"
            style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">
            Chargement en cours
          </h2>
          <p className="text-base opacity-75 animate-pulse">
            Préparation de la page {pageName}...
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2 mt-4">
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-300/20 rounded-full overflow-hidden mt-6">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <style jsx='true'>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}

export default LoadingPage;
