import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { addUser } from "../../services/api"; // <-- notre API centralisée
import Toast from "../common/Toast"; // adapte le chemin si besoin
import { useAuth } from "../../context/AuthContext";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const showToast = (message, type = "success") => setToast({ message, type });
  const closeToast = () => setToast(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel à l'API centralisée
      await addUser({ email, password });

      showToast("Utilisateur ajouté avec succès !", "success");
      navigate("/admin?tab=users");
    } catch (err) {
      showToast(err.response?.data?.message || err.message, "error");
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
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
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
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Retour
          </button>
        </header>

        {/* Form */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border rounded px-3 py-2 w-full"
                  placeholder="ex: user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border rounded px-3 py-2 w-full"
                  placeholder="********"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => navigate("/admin?tab=users")}
                  className="border px-4 py-2 rounded"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Ajouter
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
