import { useState } from "react";
import { Send } from "lucide-react";
import LoadingButton from "../Spinner/LoadingButton";
import Toast from "../Toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simule un envoi asynchrone
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setLoading(false);
      setToast("Message envoyé !");
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Supprime le toast après 5s
      setTimeout(() => setToast(""), 5000);
    }, 1500);
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
              placeholder="Votre nom ou entreprise"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
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
              placeholder="votre@email.com"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
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
            placeholder="Décrivez votre projet, vos besoins, timeline et budget approximatif..."
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300 resize-none"
            required
          ></textarea>
        </div>

        <LoadingButton
          type="submit"
          loading={loading}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Send size={20} />
          <span>{loading ? "Envoi..." : "Envoyer le message"}</span>
        </LoadingButton>
      </form>

      {toast && <Toast message={toast} />}
    </div>
  );
}

export default ContactForm;
