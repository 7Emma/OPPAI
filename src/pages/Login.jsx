import { useState } from "react";
import {
  Mail,
  KeyRound,
  Send,
  CheckCircle,
  Loader2,
  Shield,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { requestLoginCode, verifyLoginCode } from "../services/api";

const EnterEmail = ({ onCodeSent }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    if (!email) {
      setMessage("Veuillez entrer votre email");
      setLoading(false);
      return;
    }
    try {
      const data = await requestLoginCode(email);
      setMessage(data.message);
      setTimeout(() => onCodeSent(email), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-coral-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-md">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-3xl blur-xl scale-105"></div>

        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 overflow-hidden">
          {/* Header shimmer effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-orange-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-teal-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <Mail className="w-10 h-10 text-white" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-ping" />
              </div>
            </div>

            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-teal-400 bg-clip-text text-transparent mb-3">
              OPPAI
            </h1>

            <h2 className="text-xl font-semibold text-white mb-2">
              Connexion Sécurisée
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Rejoignez le collectif des développeurs passionnés
            </p>
          </div>

          <div className="space-y-6">
            {/* Email input with enhanced design */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/40 focus-within:border-teal-400/60 focus-within:bg-white/15">
                <div className="flex items-center px-5 py-4">
                  <Mail className="w-5 h-5 text-teal-400 mr-4 transition-colors duration-300" />
                  <input
                    type="email"
                    placeholder="votre.email@oppai.dev"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                </div>

                {/* Input bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Submit button with advanced effects */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="relative w-full group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-orange-600 to-teal-600 transition-all duration-300 group-hover:from-teal-500 group-hover:via-orange-500 group-hover:to-teal-500"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div className="relative px-6 py-4 text-white font-semibold text-lg">
                <div className="flex items-center justify-center">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      <span className="animate-pulse">
                        Génération du code magique...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Envoyer le Code</span>
                    </>
                  )}
                </div>
              </div>
            </button>

            {/* Message with enhanced styling */}
            {message && (
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 animate-pulse"></div>
                <div className="relative bg-teal-500/10 backdrop-blur-sm border border-teal-400/30 rounded-xl p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-400 mr-3 animate-pulse" />
                    <p className="text-teal-300 font-medium">{message}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-sm text-gray-400 bg-white/5 rounded-full px-4 py-2 border border-white/10">
              <Shield className="w-4 h-4 mr-2 text-teal-400" />
              <span>Authentification cryptée SSL/TLS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnterCode = ({ email, onLogin, onBack }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    if (!code) {
      setMessage("Veuillez entrer le code");
      setLoading(false);
      return;
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-teal-500/20 rounded-3xl blur-xl scale-105"></div>

        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 overflow-hidden">
          {/* Back button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 p-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          {/* Header shimmer effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          {/* Header */}
          <div className="text-center mb-8 mt-4">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                <KeyRound className="w-10 h-10 text-white" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-ping" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Code de Vérification
            </h2>

            {/* Email confirmation with better design */}
            <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                <div>
                  <p className="text-orange-300 text-sm">Code envoyé à</p>
                  <p className="text-white font-semibold">{email}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm">
              Entrez le code reçu pour accéder au collectif OPPAI
            </p>
          </div>

          <div className="space-y-6">
            {/* Code input with special styling */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/40 focus-within:border-orange-400/60 focus-within:bg-white/15">
                <div className="flex items-center px-5 py-4">
                  <KeyRound className="w-5 h-5 text-orange-400 mr-4" />
                  <input
                    type="text"
                    placeholder="• • • • • •"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-center text-xl font-mono tracking-widest"
                  />
                </div>

                {/* Input bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="relative w-full group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-teal-600 to-orange-600 transition-all duration-300 group-hover:from-orange-500 group-hover:via-teal-500 group-hover:to-orange-500"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div className="relative px-6 py-4 text-white font-semibold text-lg">
                <div className="flex items-center justify-center">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      <span className="animate-pulse">
                        Accès au sanctuaire...
                      </span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                      <span>Rejoindre OPPAI</span>
                    </>
                  )}
                </div>
              </div>
            </button>

            {/* Error message */}
            {message && (
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 animate-pulse"></div>
                <div className="relative bg-red-500/10 backdrop-blur-sm border border-red-400/30 rounded-xl p-4">
                  <p className="text-red-300 font-medium text-center">
                    {message}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-sm text-gray-400 bg-white/5 rounded-full px-4 py-2 border border-white/10">
              <Shield className="w-4 h-4 mr-2 text-orange-400" />
              <span>Verification cryptographique</span>
            </div>
          </div>

          {/* Demo hint */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              💡 Code de test:{" "}
              <span className="font-mono text-orange-400">123456</span>
            </p>
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
    alert(`Bienvenue dans OPPAI, ${user.name}!`);
    
    // Redirection selon le rôle de l'utilisateur
    if (user.role === 'admin') {
      window.location.href = "/admin";
    } else {
      window.location.href = "/Dashboard";
    }
  };

  const handleBack = () => {
    setStep("email");
  };

  return (
    <>
      {step === "email" ? (
        <EnterEmail onCodeSent={handleCodeSent} />
      ) : (
        <EnterCode email={email} onLogin={handleLogin} onBack={handleBack} />
      )}
    </>
  );
};

export default LoginPage;
