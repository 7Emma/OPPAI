import { useState } from "react";
import { motion } from "framer-motion";
import {
  PlusCircle,
  FileText,
  User,
  Calendar,
  Tag,
  Image,
  Clock,
  Star,
  Send,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import Toast from "../Toast";
import LoadingButton from "../Spinner/LoadingButton";

function AddNewsForm() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    date: "",
    category: "",
    image: "",
    readTime: "",
    featured: false,
  });

  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Le titre est obligatoire";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Le contenu est obligatoire";
    }

    if (!formData.author.trim()) {
      newErrors.author = "L'auteur est obligatoire";
    }

    if (!formData.date) {
      newErrors.date = "La date est obligatoire";
    }

    if (!formData.category) {
      newErrors.category = "La catégorie est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Vérifier la taille du fichier (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast("L'image ne doit pas dépasser 5MB", "error");
        return;
      }

      // Vérifier le type de fichier
      if (!file.type.startsWith("image/")) {
        showToast("Veuillez sélectionner un fichier image valide", "error");
        return;
      }

      const localUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: localUrl }));
      showToast("Image uploadée avec succès !", "success");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Veuillez corriger les erreurs dans le formulaire", "error");
      return;
    }

    setIsLoading(true);

    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Nouvel article :", formData);

      // Réinitialiser le formulaire
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        author: "",
        date: "",
        category: "",
        image: "",
        readTime: "",
        featured: false,
      });

      showToast("Article publié avec succès ! 🎉", "success");
    } catch (error) {
      showToast("Erreur lors de la publication. Veuillez réessayer.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    "Tech",
    "IA",
    "Web Dev",
    "Mobile",
    "DevOps",
    "Cybersécurité",
    "Open Source",
    "Innovation",
    "Tutoriel",
    "Actualités",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const inputClassName = (fieldName) => `
    w-full p-4 rounded-2xl bg-slate-800/60 border transition-all duration-300
    text-white placeholder-turquoise/50 focus:outline-none focus:ring-2
    ${
      errors[fieldName]
        ? "border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20"
        : "border-turquoise/20 focus:border-coral/50 focus:ring-coral/20"
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Bouton Retour */}
        <Link
          to="/dashboard"
          className="absolute left-0 top-0 m-4 text-xl bg-gradient-to-r from-red-400 to-cyan-400 text-white px-4 py-2 rounded-full shadow hover:opacity-80 transition"
        >
          ← Retour
        </Link>

        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;Nouvel Article/&gt;
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-cyan-400/80 text-lg">
            Partagez vos connaissances ou informations avec la communauté OPPAI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              {/* Titre */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center text-cyan-400 font-semibold mb-2">
                  <FileText className="mr-2" size={18} />
                  Titre de l'article *
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Ex: Les dernières innovations en IA..."
                  value={formData.title}
                  onChange={handleChange}
                  className={inputClassName("title")}
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">{errors.title}</p>
                )}
              </motion.div>

              {/* Résumé */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center text-cyan-400 font-semibold mb-2">
                  <Eye className="mr-2" size={18} />
                  Résumé (aperçu)
                </label>
                <textarea
                  name="excerpt"
                  placeholder="Un bref aperçu de votre article..."
                  value={formData.excerpt}
                  onChange={handleChange}
                  className={inputClassName("excerpt")}
                  rows={3}
                />
              </motion.div>

              {/* Contenu */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center text-cyan-400 font-semibold mb-2">
                  <FileText className="mr-2" size={18} />
                  Contenu complet *
                </label>
                <textarea
                  name="content"
                  placeholder="Rédigez votre article complet ici..."
                  value={formData.content}
                  onChange={handleChange}
                  className={inputClassName("content")}
                  rows={8}
                />
                {errors.content && (
                  <p className="text-red-400 text-sm mt-1">{errors.content}</p>
                )}
              </motion.div>

              {/* Ligne avec Auteur et Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-cyan-400 font-semibold mb-2">
                    <User className="mr-2" size={18} />
                    Auteur *
                  </label>
                  <input
                    type="text"
                    name="author"
                    placeholder="Votre nom"
                    value={formData.author}
                    onChange={handleChange}
                    className={inputClassName("author")}
                  />
                  {errors.author && (
                    <p className="text-red-400 text-sm mt-1">{errors.author}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-cyan-400 font-semibold mb-2">
                    <Calendar className="mr-2" size={18} />
                    Date de publication *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClassName("date")}
                  />
                  {errors.date && (
                    <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                  )}
                </motion.div>
              </div>

              {/* Ligne avec Catégorie et Temps de lecture */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-cyan-400 font-semibold mb-2">
                    <Tag className="mr-2" size={18} />
                    Catégorie *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={inputClassName("category")}
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-800">
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-cyan-400 font-semibold mb-2">
                    <Clock className="mr-2" size={18} />
                    Temps de lecture
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    placeholder="Ex: 5 min"
                    value={formData.readTime}
                    onChange={handleChange}
                    className={inputClassName("readTime")}
                  />
                </motion.div>
              </div>

              {/* Image */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center text-cyan-400 font-semibold mb-2">
                  <Image className="mr-2" size={18} />
                  Image de couverture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-4 rounded-2xl bg-slate-800/60 border border-turquoise/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-400/20 file:text-cyan-400 hover:file:bg-cyan-400/30 transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Ou collez un lien image..."
                  value={
                    formData.image?.startsWith("http") ? formData.image : ""
                  }
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, image: e.target.value }))
                  }
                  className="w-full p-4 rounded-2xl bg-slate-800/60 border border-turquoise/20 text-white placeholder-turquoise/50 focus:border-coral/50 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300 mt-2"
                />
              </motion.div>

              {/* Article à la une */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-800/40 border border-turquoise/20 hover:border-coral/30 transition-all duration-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-400 bg-transparent border-2 border-turquoise/50 rounded focus:ring-red-400 focus:ring-2"
                  />
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-cyan-400 font-semibold">
                    Mettre en article à la une
                  </span>
                </label>
              </motion.div>

              {/* Bouton Submit avec LoadingButton */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LoadingButton
                  onClick={handleSubmit}
                  loading={isLoading}
                  className="w-full"
                >
                  <Send size={20} />
                  <span>
                    {isLoading ? "Publication..." : "Publier l'article"}
                  </span>
                </LoadingButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Aperçu/Preview */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="sticky top-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <Eye className="mr-2" size={20} />
                  Aperçu Live
                </h3>

                {/* Preview Card */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-turquoise/10">
                  {formData.image && (
                    <div className="w-full h-32 bg-slate-700 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-bold text-cyan-400 text-sm line-clamp-2">
                      {formData.title || "Titre de votre article..."}
                    </h4>

                    <p className="text-xs text-cyan-400/70 line-clamp-2">
                      {formData.excerpt || "Résumé de votre article..."}
                    </p>

                    <div className="flex items-center justify-between text-xs text-cyan-400/50">
                      <span>{formData.author || "Auteur"}</span>
                      <span>{formData.readTime || "X min"}</span>
                    </div>

                    {formData.category && (
                      <span className="inline-block px-2 py-1 bg-red-400/20 text-red-400 text-xs rounded-full">
                        {formData.category}
                      </span>
                    )}

                    {formData.featured && (
                      <div className="flex items-center text-yellow-400 text-xs">
                        <Star size={12} className="mr-1" />
                        Article à la une
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-red-400/5 to-cyan-400/5 rounded-2xl p-6 border border-turquoise/20 mt-6">
                <h4 className="font-bold text-cyan-400 mb-3">💡 Conseils</h4>
                <ul className="text-sm text-cyan-400/80 space-y-2">
                  <li>• Utilisez un titre accrocheur et descriptif</li>
                  <li>• Ajoutez une image de qualité (max 5MB)</li>
                  <li>• Rédigez un résumé engageant</li>
                  <li>• Choisissez la catégorie appropriée</li>
                  <li>• Estimez le temps de lecture</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AddNewsForm;
