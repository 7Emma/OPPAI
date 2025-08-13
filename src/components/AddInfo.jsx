import React, { useState } from "react";
import {
  Save,
  User,
  Briefcase,
  Tags,
  Star,
  Palette,
  Plus,
  X,
  Link,
  Mail,
  Github,
  Linkedin,
  Code,
  Cloud,
  Database,
  Monitor,
  Layout,
  Network,
  Bug,
  Book,
  Smartphone
} from "lucide-react";

// Selection des specialites relies aux icones
const specialityIcons = {
  "Développeur Full Stack": Code,
  "Ingénieur IA": Cloud,
  "Backend": Database,
  "Frontend": Monitor,
  "DevOps": Network,
  "QA Analyst": Bug,
  "Data Engineer": Database,
  "Mobile": Smartphone,
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

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // Gérer l'entrée de fichier pour l'avatar
    if (name === "avatar" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result, // Stocker la chaîne base64 pour l'aperçu
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données formatées:", JSON.stringify(formData, null, 2));
    // Remplacer l'alerte par un modal ou un message plus élégant
    alert(
      "Formulaire soumis ! Consultez la console pour voir le JSON formaté."
    );
  };

  // Obtenir dynamiquement le composant d'icône sélectionné
  const SelectedIcon = specialityIcons[formData.speciality] || Book;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div
            className="rounded-2xl p-6 shadow-xl text-white"
            style={{
              background: `linear-gradient(to right, ${formData.gradient}, #40E0D0)`,
            }}
          >
            <h1 className="text-3xl font-bold mb-2">
              Formulaire Profil Développeur
            </h1>
            <p className="opacity-90">
              Remplissez tous les champs pour créer un profil complet
            </p>
          </div>

          {/* Informations de base */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-[#40E0D0]" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Informations de base
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="ex: David IDOHOU Asabi Kendou"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rôle
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="ex: Développeur Full Stack & Ingénieur IA"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo
                </label>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                />
              </div>

              {/* Apercu de l'images */}
              {formData.avatar && (
                <div className="flex justify-center items-center">
                  <img
                    src={formData.image}
                    alt="Aperçu de la photo"
                    className="w-32 h-32 object-cover rounded-full shadow-md"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spécialité
                </label>
                <div className="relative">
                  <select
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all appearance-none"
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
                    <SelectedIcon className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Décrivez votre expertise et votre approche..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Tags className="w-6 h-6 text-[#FF6F61]" />
              <h2 className="text-2xl font-bold text-[#FF6F61]">
                Technologies
              </h2>
            </div>

            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                placeholder="Ajouter une technologie (ex: React, Python...)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTechnology())
                }
              />
              <button
                type="button"
                onClick={addTechnology}
                className="px-6 py-3 bg-[#FF6F61] text-white rounded-lg font-medium hover:bg-[#E65C50] transition-all flex items-center gap-2"
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
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
                  >
                    <span className="font-medium text-gray-800">{tech}</span>
                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
                      className="text-red-500 hover:text-red-700 p-1 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Contacts et Liens */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Link className="w-6 h-6 text-[#40E0D0]" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Contacts et Liens
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lien Portfolio
                </label>
                <input
                  type="url"
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleInputChange}
                  placeholder="https://mon-portfolio.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@exemple.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pseudo GitHub
                </label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder="davididohou"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pseudo LinkedIn
                </label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="david-idohou"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-[#FF6F61]" />
              <h2 className="text-2xl font-bold text-[#FF6F61]">
                Statistiques
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de projets
                </label>
                <input
                  type="number"
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note (sur 5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Couleurs */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-[#40E0D0]" />
              <h2 className="text-2xl font-bold text-[#40E0D0]">
                Couleur de Thème
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
                className="w-12 h-10 cursor-pointer border border-gray-300 rounded-lg"
              />
              <span className="ml-2 text-sm font-mono text-gray-700">
                {formData.gradient}
              </span>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-center pb-8">
            <button
              type="submit"
              className="px-8 py-4 bg-[#FF6F61] text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-[#E65C50] transform hover:scale-105 transition-all flex items-center gap-3"
            >
              <Save className="w-6 h-6" /> Générer le profil Dev OPPAI
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInfo;
