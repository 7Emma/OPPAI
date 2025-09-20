import {
  CheckCircle,
  PlusCircle,
  Pencil,
  Info,
  LogOut,
  User,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import LoadingButton from "../components/common/LoadingButton";

function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Protection de la route : redirige si non authentifié
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    setIsLoggingOut(true);
    try {
      logout(); // logout n'est pas async
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-gray-100">
      {/* Navbar */}
      <nav className="bg-slate-800/90 backdrop-blur-sm shadow-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo et titre */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Dashboard
              </h1>
            </div>

            {/* User info et logout */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-sm text-gray-400">
                <span className="text-gray-500">Connecté:</span>
                <span className="ml-1 text-teal-400 font-medium">
                  {user.email}
                </span>
              </div>
              <LoadingButton
                onClick={handleLogout}
                loading={isLoggingOut}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 sm:px-5 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                {!isLoggingOut && (
                  <LogOut size={16} className="sm:w-5 sm:h-5" />
                )}
                <span className="hidden sm:inline">
                  {isLoggingOut ? "En cours..." : "Déconnexion"}
                </span>
                <span className="sm:hidden">
                  {isLoggingOut ? "..." : "Logout"}
                </span>
              </LoadingButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-slate-800/50 rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 border border-slate-700">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Bienvenue dans votre tableau de bord !
            </h2>
            <div className="bg-green-600/20 text-green-400 border border-green-600 rounded-lg p-4 flex items-center justify-center sm:justify-start shadow-inner">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium">
                Authentification réussie !
              </span>
            </div>
          </div>
        </div>

        {/* Action Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Link
            to="/add-info"
            className="group bg-gradient-to-r from-teal-500 to-orange-500 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold min-h-[140px]"
          >
            <Info
              size={32}
              className="mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-base sm:text-lg leading-tight">
              Ajouter/Modifier votre profil
            </span>
          </Link>

          <Link
            to="/add-new"
            className="group bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600 hover:bg-slate-600 hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold min-h-[140px]"
          >
            <PlusCircle
              size={32}
              className="mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-base sm:text-lg leading-tight">
              Ajouter une actualité
            </span>
          </Link>

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="group bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600 hover:bg-slate-600 hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold min-h-[140px] sm:col-span-2 lg:col-span-1"
            >
              <User
                size={32}
                className="mb-3 text-rose-500 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-base sm:text-lg leading-tight">
                Administration
              </span>
            </Link>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-400">Profil</p>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  Complet
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg">
                <PlusCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-400">Articles</p>
                <p className="text-lg sm:text-xl font-semibold text-white">0</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-400">Statut</p>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  Actif
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-orange-500/20 rounded-lg">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-400">Rôle</p>
                <p className="text-lg sm:text-xl font-semibold text-white capitalize">
                  {user?.role || "Développeur"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
