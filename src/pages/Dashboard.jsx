import React from "react";
import { CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import AddInfo from "../components/AddInfo";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-coral to-turquoise">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>
              Connecté en tant que: <strong>{user.email}</strong>
            </span>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Bienvenue !</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span>Authentification réussie !</span>
          </div>
        </div>
        <AddInfo />
      </main>
    </div>
  );
};

export default Dashboard;
