import React, { useState } from "react";
import { Send } from "lucide-react";
import LoadingButton from "../LoadingButton";
import Toast from "../Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", formData);
    // Simule un envoi asynchrone (API)
    setTimeout(() => {
      setLoading(false);
      setToast("Message envoyé !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    });

    setTimeout(() => setToast(""), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-coral/20 backdrop-blur-sm">
      <div className="flex items-center mb-6">
        <Send size={24} className="text-coral mr-3" />
        <h3 className="text-2xl font-bold text-white font-mono">
          Démarrer un Projet
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Nom / Entreprise
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
              placeholder="Votre nom ou entreprise"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Type de Projet
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
            required
          >
            <option value="">Sélectionnez un type de projet</option>
            <option value="web">Développement Web</option>
            <option value="mobile">Application Mobile</option>
            <option value="api">API & Backend</option>
            <option value="consulting">Consulting</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Description du Projet
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Décrivez votre projet, vos besoins, timeline et budget approximatif..."
            required
          ></textarea>
        </div>

        {/* Bouton avec spinner */}
        <LoadingButton
          isLoading={loading}
          type="submit"
          className="w-full bg-gradient-to-r from-coral to-turquoise px-8 py-4 rounded-lg text-white font-semibold hover:from-coral-dark hover:to-turquoise-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-coral/25 flex items-center justify-center"
        >
          <Send size={20} className="mr-2" />
          {loading ? "Envoi..." : "Envoyer le Message"}
        </LoadingButton>
      </form>
    </div>
  );
};

export default ContactForm;
