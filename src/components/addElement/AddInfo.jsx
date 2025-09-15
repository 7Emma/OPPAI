import { useState, useEffect } from "react";
import { createProfile, getProfiles } from "../../services/api";
import {
  Save,
  User,
  Tags,
  Star,
  Palette,
  Plus,
  X,
  Link as LinkIcon,
  Code,
  Cloud,
  Database,
  Monitor,
  Layout,
  Network,
  Bug,
  Book,
  Smartphone,
  CheckCircle,
  Upload,
  Eye,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import LoadingButton from "../common/LoadingButton";
import Toast from "../common/Toast";

// Sélection des spécialités reliées aux icones
const specialityIcons = {
  "Développeur Full Stack": Code,
  "Ingénieur IA": Cloud,
  Backend: Database,
  Frontend: Monitor,
  DevOps: Network,
  "QA Analyst": Bug,
  "Data Engineer": Database,
  Mobile: Smartphone,
  "UI/UX Designer": Layout,
};

function AddInfo() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    technologies: [],
    speciality: "",
    description: "",
    portfolioLink: "",
    email: "",
    github: "",
    linkedin: "",
    projects: 0,
    rating: 0,
    gradient: "#FF6F61",
  });

  const [newTechnology, setNewTechnology] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour afficher le toast
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfiles(); // Récupère le profil de l'utilisateur connecté
        if (response.data) {
          setFormData(response.data); // Préremplir le formulaire avec les données existantes
        }
      } catch (error) {
        console.log("Pas de profil existant, formulaire vide.");
        // Si pas de profil, le formulaire reste vide (initial state)
      } finally {
        setIsVisible(true);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === "projects" || name === "rating"
            ? value === ""
              ? ""
              : Number(value)
            : value,
      }));
    }
  };

  const handleGradientColorChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gradient: e.target.value,
    }));
  };

  const addTechnology = () => {
    if (
      newTechnology.trim() &&
      !formData.technologies.includes(newTechnology.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()],
      }));
      setNewTechnology("");
    }
  };

  const removeTechnology = (index) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification de tous les champs de formData
    const allFields = Object.keys(formData);
    const isFormValid = allFields.every((field) => {
      // Les champs 'image', 'technologies' et 'gradient' ont des vérifications spécifiques
      if (field === "image") return !!formData.image;
      if (field === "technologies") return formData.technologies.length > 0;
      if (field === "gradient") return !!formData.gradient;
      if (
        field === "portfolioLink" ||
        field === "github" ||
        field === "linkedin"
      )
        return true; // Les liens ne sont pas obligatoires

      // Pour les autres champs, vérifier s'ils sont remplis
      return formData[field] && String(formData[field]).trim() !== "";
    });

    if (!isFormValid) {
      showToast("Veuillez remplir tous les champs obligatoires.", "error");
      return;
    }

    setIsLoading(true);

    // Simuler une requête API
    try {
      const response = await createProfile(formData);
      console.log("Données envoyées:", response.data);
      showToast("Profil mis à jour avec succès !");
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire:",
        error.response?.data?.message || error.message
      );
      showToast("Erreur lors de la mise à jour du profil.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const SelectedIcon = specialityIcons[formData.speciality] || Book;

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 p-4 md:p-8 font-sans">
      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .card {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }

        .card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .input-focus {
          transform: scale(1.01);
          box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.1);
        }

        .tech-tag {
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          transform: translateX(2px);
        }

        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .button-hover:hover {
          transform: translateY(-1px);
        }

        .icon-hover:hover {
          transform: rotate(90deg);
        }

        .icon-hover {
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Bouton Retour */}
      <Link
        to="/dashboard"
        className="fixed left-4 top-4 text-xl bg-gradient-to-r from-red-400 to-cyan-400 text-white px-4 py-2 rounded-full shadow hover:opacity-80 transition"
      >
        ← Retour
      </Link>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div
            className={`rounded-2xl p-6 shadow-xl text-white overflow-hidden relative transition-all duration-500 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{
              background: `linear-gradient(135deg, ${formData.gradient}, #40E0D0)`,
            }}
          >
            <h1 className="text-3xl font-bold mb-2 relative z-10">
              <Sparkles className="inline-block w-8 h-8 mr-2" />
              Formulaire Profil Développeur
            </h1>
            <p className="opacity-90 relative z-10">
              Remplissez tous les champs pour créer un profil complet
            </p>
          </div>

          {/* Informations de base */}
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg backdrop-blur-sm card hover-lift transition-all duration-300 ${
              isVisible ? "show" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-[#40E0D0] icon-hover" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Informations de base
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="ex: David IDOHOU Asabi Kendou"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200 ${
                    focusedField === "name" ? "input-focus" : ""
                  }`}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rôle <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("role")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="ex: Développeur Full Stack & Ingénieur IA"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200 ${
                    focusedField === "role" ? "input-focus" : ""
                  }`}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#40E0D0] file:text-white hover:file:bg-cyan-600 transition-all duration-200"
                    required
                  />
                  <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {formData.image && (
                <div className="flex justify-center items-center animate-slide-in">
                  <div className="relative group">
                    <img
                      src={formData.image}
                      alt="Aperçu de la photo"
                      className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-[#40E0D0] transition-all duration-200 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spécialité <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Sélectionnez votre spécialité
                    </option>
                    {Object.keys(specialityIcons).map((speciality) => (
                      <option key={speciality} value={speciality}>
                        {speciality}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <SelectedIcon
                      className={`w-5 h-5 text-gray-400 transition-all duration-200 ${
                        formData.speciality ? "text-[#40E0D0]" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("description")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  placeholder="Décrivez votre expertise et votre approche..."
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200 resize-none ${
                    focusedField === "description" ? "input-focus" : ""
                  }`}
                  required
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Tags className="w-6 h-6 text-[#FF6F61] icon-hover" />
              <h2 className="text-2xl font-bold text-[#FF6F61]">
                Technologies <span className="text-red-500">*</span>
              </h2>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                placeholder="Ajouter une technologie (ex: React, Python...)"
                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200"
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTechnology())
                }
              />
              <button
                type="button"
                onClick={addTechnology}
                className="w-full sm:w-auto px-6 py-3 bg-[#FF6F61] text-white rounded-lg font-medium hover:bg-[#E65C50] transition-all duration-200 flex items-center justify-center gap-2 button-hover"
              >
                <Plus className="w-4 h-4" /> Ajouter
              </button>
            </div>
            <div className="space-y-2">
              {formData.technologies.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Aucune technologie ajoutée
                </p>
              ) : (
                formData.technologies.map((tech, index) => (
                  <div
                    key={`tech-${tech.replace(/\s+/g, '-').toLowerCase()}-${index}`}
                    className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border-l-4 border-[#40E0D0] tech-tag animate-slide-in"
                  >
                    <span className="font-medium text-gray-800">{tech}</span>
                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-all duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Contacts et Liens */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <LinkIcon className="w-6 h-6 text-[#40E0D0] icon-hover" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Contacts et Liens
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "portfolioLink",
                  label: "Lien Portfolio",
                  type: "url",
                  placeholder: "https://mon-portfolio.com",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "contact@exemple.com",
                  required: true,
                },
                {
                  name: "github",
                  label: "Pseudo GitHub",
                  type: "text",
                  placeholder: "davididohou",
                  required: true,
                },
                {
                  name: "linkedin",
                  label: "Pseudo LinkedIn",
                  type: "text",
                  placeholder: "david-idohou",
                  required: true,
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Statistiques */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-[#FF6F61] icon-hover" />
              <h2 className="text-2xl font-bold text-[#FF6F61]">
                Statistiques
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de projets <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note (sur 5) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>
          </div>

          {/* Couleurs */}
          <div
            className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-[#40E0D0] icon-hover" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Couleur de Thème <span className="text-red-500">*</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <label className="w-full text-sm font-medium text-gray-700">
                Sélectionnez la couleur du dégradé
              </label>
              <input
                type="color"
                value={formData.gradient}
                onChange={handleGradientColorChange}
                className="w-12 h-10 cursor-pointer border border-gray-300 rounded-lg hover:scale-105 transition-transform duration-200"
                required
              />
              <span
                className="ml-2 text-sm font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded transition-colors duration-200"
                style={{ color: formData.gradient }}
              >
                {formData.gradient}
              </span>
            </div>
            <div
              className="h-4 rounded-lg mt-3 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${formData.gradient}, #40E0D0)`,
              }}
            />
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-center pb-8">
            <LoadingButton
              onClick={handleSubmit}
              loading={isLoading}
              className="px-8 py-4 bg-[#FF6F61] text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-[#E65C50] flex items-center gap-3 button-hover transition-all duration-200"
            >
              <Save size={20} />
              <span>
                {isLoading ? "Publication..." : "Générer le profil Dev OPPAI"}
              </span>
            </LoadingButton>
          </div>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default AddInfo;
