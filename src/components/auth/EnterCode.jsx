import { useState } from "react";
import { api } from "../api";

const EnterCode = ({ email, onLogin }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/verify-code", { email, code });
      localStorage.setItem("token", res.data.token);
      onLogin(); // callback pour signaler que le login est OK
    } catch (err) {
      setError(err.response?.data?.message || "Code invalide");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleVerify} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold">Entrez le code reçu</h2>
      <input
        type="text"
        placeholder="Code à 6 chiffres"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        className="border px-3 py-2 rounded w-full"
      />
      {error ? <p className="text-red-500">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Vérification..." : "Valider le code"}
      </button>
    </form>
  );
};

export default EnterCode;
