import { useState } from "react";
import { api } from "../api"; // ton fichier api.js

const EnterEmail = ({ onCodeSent }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post("/auth/send-code", { email });
      onCodeSent(email); // on passe l’email au parent
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l’envoi du code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold">Connexion</h2>
      <input
        type="email"
        placeholder="Entrez votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border px-3 py-2 rounded w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Envoi en cours..." : "Recevoir un code"}
      </button>
    </form>
  );
};

export default EnterEmail;
