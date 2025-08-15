import { CheckCircle, PlusCircle, Pencil, Info, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LoadingButton from "../components/common/LoadingButton";

function Dashboard() {
  const { user, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout(); // si logout est async
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-gray-100">
      <nav className="bg-slate-800/80 backdrop-blur-sm shadow-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Dashboard
          </h1>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm text-gray-400">
              Connecté en tant que:{" "}
              <strong className="text-turquoise">{user.email}</strong>
            </span>
            <LoadingButton
              onClick={handleLogout}
              loading={isLoggingOut}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              {!isLoggingOut && <LogOut size={20} />}
              <span>{isLoggingOut ? "En cours..." : "Déconnexion"}</span>
            </LoadingButton>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4">
        {/* Welcome Section */}
        <div className="bg-slate-800/50 rounded-2xl shadow-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Bienvenue dans votre tableau de bord !
          </h2>
          <div className="bg-green-600/20 text-green-400 border border-green-600 rounded-lg p-4 flex items-center shadow-inner">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
            <span className="text-lg font-medium">
              Authentification réussie !
            </span>
          </div>
        </div>

        {/* Action Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/add-info"
            className="bg-gradient-to-r from-turquoise to-coral p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold"
          >
            <Info size={36} className="mb-3" />
            <span className="text-lg">Ajouter votre profil</span>
          </Link>
          <Link
            to="/edit-info"
            className="bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600 hover:bg-slate-600 hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold"
          >
            <Pencil size={36} className="mb-3 text-yellow-400" />
            <span className="text-lg">Modifier votre profil</span>
          </Link>
          <Link
            to="/add-new"
            className="bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600 hover:bg-slate-600 hover:scale-[1.02] transition-all duration-300 transform flex flex-col items-center justify-center text-white text-center font-semibold"
          >
            <PlusCircle size={36} className="mb-3 text-green-400" />
            <span className="text-lg">Ajouter une actualité</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
