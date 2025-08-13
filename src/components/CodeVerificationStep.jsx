import React from "react";
import { Lock, CheckCircle, AlertCircle } from "lucide-react";

const CodeVerificationStep = ({
  email,
  code,
  setCode,
  onSubmit,
  onBack,
  loading,
  error,
  resendCode,
}) => {
  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-coral to-turquoise rounded-2xl shadow-xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-turquoise mb-2">Vérification</h2>
        <p className="text-gray-600">
          Un code à 6 chiffres a été envoyé à <br />
          <span className="font-medium">{email}</span>
        </p>
      </div>

      {/* Input */}
      <div className="space-y-6">
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          placeholder="123456"
          className="w-full text-center text-2xl font-mono tracking-widest py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          maxLength="6"
          disabled={loading}
        />

        {error && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={onSubmit}
          disabled={loading || code.length !== 6}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Vérifier</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-sm">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800"
            disabled={loading}
          >
            ← Changer d'email
          </button>
          <button
            onClick={resendCode}
            className="text-blue-600 hover:text-blue-800"
            disabled={loading}
          >
            Renvoyer le code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeVerificationStep;
