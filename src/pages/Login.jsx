import { useState } from "react";
import { requestLoginCode, verifyLoginCode } from "../services/api";
import {
  Mail,
  KeyRound,
  Send,
  CheckCircle,
  ArrowLeft,
  Loader2,
} from "lucide-react";

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
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>

      <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md">
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
          {/* Champ email stylisé */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"></div>
            <div className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <div className="flex items-center">
                <div className="pl-4 pr-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email ou username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 py-4 pr-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Bouton submit avec animation */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {/* Animation de brillance */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="relative flex items-center justify-center">
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

          {/* Message d'erreur/succès */}
          {message && (
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-lg blur-sm"></div>
              <div className="relative bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm text-center font-medium">
                  {message}
                </p>
              </div>
            </div>
          )}
        </form>

        {/* Footer décoratif */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
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
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>

      <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md">
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
          {/* Champ code stylisé */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-sm"></div>
            <div className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <div className="flex items-center">
                <div className="pl-4 pr-3">
                  <KeyRound className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Entrez votre code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="flex-1 py-4 pr-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-center text-lg font-mono tracking-widest"
                />
              </div>
            </div>
          </div>

          {/* Bouton submit avec animation */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:shadow-emerald-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {/* Animation de brillance */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="relative flex items-center justify-center">
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

          {/* Message d'erreur */}
          {message && (
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-lg blur-sm"></div>
              <div className="relative bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm text-center font-medium">
                  {message}
                </p>
              </div>
            </div>
          )}
        </form>

        {/* Footer avec retour */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Vérification sécurisée
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [step, setStep] = useState("email"); // "email" ou "code"
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const handleCodeSent = (emailValue) => {
    setEmail(emailValue);
    setStep("code");
  };

  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    alert("Connexion réussie ! Bienvenue " + loggedUser.username);
    // Redirection vers dashboard ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-4">
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-md">
        {step === "email" ? (
          <EnterEmail onCodeSent={handleCodeSent} />
        ) : (
          <EnterCode email={email} onLogin={handleLogin} />
        )}
      </div>

      {/* Background décoratif */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default LoginPage;
