import { Mail, ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmailStep = ({ email, setEmail, onSubmit, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) onSubmit();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-coral to-turquoise rounded-2xl shadow-xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Connexion</h2>
        <p className="text-gray-600">
          Entrez votre email pour recevoir un code de connexion
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Adresse email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={loading}
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading || !email.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Envoyer le code</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-coral text-white rounded-lg font-medium hover:bg-rose-500 transition-colors"
        >
          ← Retour
        </Link>
      </div>
    </div>
  );
};

export default EmailStep;
