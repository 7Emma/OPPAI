import { useState } from "react";
import { requestLoginCode, verifyLoginCode } from "../services/api";
import { Mail, KeyRound, Send, CheckCircle, Loader2 } from "lucide-react";

const EnterEmail = ({ onCodeSent }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const data = await requestLoginCode(email);
      setMessage(data.message);
      onCodeSent(email);
    } catch (err) {
      setMessage(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Glow effect - SIMPLIFIÉ */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>

      <div className="relative bg-white/95 border border-gray-200 shadow-xl p-8 rounded-2xl w-full max-w-md">
        {/* Header avec icône */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connexion</h2>
          <p className="text-gray-600 text-sm">
            Entrez votre email pour recevoir un code de connexion
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ email simplifié */}
          <div className="relative">
            <div className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <div className="flex items-center px-4">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Email ou username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Bouton submit simplifié */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Envoyer le code
                </>
              )}
            </div>
          </button>

          {/* Message d'erreur/succès simplifié */}
          {message && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm text-center font-medium">
                {message}
              </p>
            </div>
          )}
        </form>

        {/* Footer décoratif */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Connexion sécurisée
          </div>
        </div>
      </div>
    </div>
  );
};

const EnterCode = ({ email, onLogin }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const data = await verifyLoginCode(email, code);
      onLogin(data.user);
    } catch (err) {
      setMessage(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Glow effect - SIMPLIFIÉ */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl"></div>

      <div className="relative bg-white/95 border border-gray-200 shadow-xl p-8 rounded-2xl w-full max-w-md">
        {/* Header avec icône */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <KeyRound className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Vérification
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-blue-800 text-sm">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Code envoyé à <span className="font-semibold">{email}</span>
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Entrez le code de vérification reçu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ code simplifié */}
          <div className="relative">
            <div className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <div className="flex items-center px-4">
                <KeyRound className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Entrez votre code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="flex-1 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-center text-lg font-mono tracking-widest"
                />
              </div>
            </div>
          </div>

          {/* Bouton submit simplifié */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  Vérification...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-3" />
                  Se connecter
                </>
              )}
            </div>
          </button>

          {/* Message d'erreur simplifié */}
          {message && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm text-center font-medium">
                {message}
              </p>
            </div>
          )}
        </form>

        {/* Footer simplifié */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Vérification sécurisée
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");

  const handleCodeSent = (emailValue) => {
    setEmail(emailValue);
    setStep("code");
  };

  const handleLogin = (user) => {
    console.log("Connexion réussie :", user);
    window.location.href = "/admin"; // redirection après login
  };

  return (
    <div>
      {step === "email" ? (
        <EnterEmail onCodeSent={handleCodeSent} />
      ) : (
        <EnterCode email={email} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
