import React from "react";

function LoadingPage({ pageName = "contenu" }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black opacity-30 text-coral-dark text-2xl font-sans">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <p className="text-xl animate-pulse">
          Chargement de la page {pageName}...
        </p>
      </div>
    </div>
  );
}

export default LoadingPage;
