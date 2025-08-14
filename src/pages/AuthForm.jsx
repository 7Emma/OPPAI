import React, { useState } from "react";
import EmailStep from "../components/authentification/EmailStep";
import CodeVerificationStep from "../components/authentification/CodeVerificationStep";
import { useAuth } from "../context/AuthContext";

const AuthForm = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const sendVerificationCode = async () => {
    setLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(`Code de démonstration envoyé ! Utilisez: 123456`);
    setStep("code");
    setLoading(false);
  };

  const verifyCode = async () => {
    setLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (code === "123456") {
      login(email);
    } else {
      setError("Code invalide.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 flex items-center justify-center p-4">
      {step === "email" ? (
        <EmailStep
          email={email}
          setEmail={setEmail}
          onSubmit={sendVerificationCode}
          loading={loading}
          error={error}
        />
      ) : (
        <CodeVerificationStep
          email={email}
          code={code}
          setCode={setCode}
          onSubmit={verifyCode}
          onBack={() => setStep("email")}
          loading={loading}
          error={error}
          resendCode={sendVerificationCode}
        />
      )}
    </div>
  );
};

export default AuthForm;
