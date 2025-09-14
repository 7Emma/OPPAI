import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { addUser } from "../../services/api"; // <-- notre API centralisée
import Toast from "../common/Toast"; // adapte le chemin si besoin
import { useAuth } from "../../context/AuthContext";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const showToast = (message, type = "success") => setToast({ message, type });
  const closeToast = () => setToast(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      showToast("Veuillez saisir un email", "error");
      return;
    }

    setLoading(true);

    try {
      // Appel à l'API centralisée - seulement l'email est envoyé
      await addUser({ email });

      showToast("Utilisateur ajouté avec succès !", "success");

      // Redirection après un court délai pour voir le toast
      setTimeout(() => {
        navigate("/admin?tab=users");
      }, 1500);
    } catch (err) {
      showToast(
        err.response?.data?.message || err.message || "Erreur lors de l'ajout",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 font-bold text-xl">Admin</div>
        <nav className="flex-1">
          <button
            onClick={() => navigate("/admin")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/admin?tab=users")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 bg-gray-700"
          >
            Utilisateurs
          </button>
          <button
            onClick={() => navigate("/admin?tab=publications")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Publications
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="flex items-center text-gray-400 hover:text-white"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold flex items-center">
            <UserPlus className="mr-2" /> Ajouter un utilisateur
          </h2>
          <button
            onClick={() => navigate("/admin?tab=users")}
            className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Retour
          </button>
        </header>

        {/* Form */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Ajouter un nouvel utilisateur
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Saisissez l'adresse email de l'utilisateur. Un mot de passe
                  temporaire sera généré automatiquement.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ex: utilisateur@entreprise.com"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate("/admin?tab=users")}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  disabled={loading}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !email}
                >
                  {loading ? "Ajout en cours..." : "Ajouter l'utilisateur"}
                </button>
              </div>
            </form>
          </div>

          {/* Toast */}
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={closeToast}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default AddUser;
