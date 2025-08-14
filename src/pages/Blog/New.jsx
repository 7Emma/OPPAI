import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import newsData from "../../Datas/new";

const categories = ["Tous", "Technologie", "Business", "Mise à jour", "Équipe"];

function New() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrage des actualités
  const filteredNews = newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "Tous" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.find((news) => news.featured);
  const regularNews = filteredNews.filter((news) => !news.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-10">
            <span className="animate-pulse bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              Nos Actualités
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Restez informé de nos dernières innovations, partenariats et
            développements. Découvrez les coulisses de notre aventure
            technologique.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-turquoise focus:border-turquoise transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-turquoise to-cyan-400 text-white shadow-lg"
                        : "bg-white/10 backdrop-blur-sm text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredNews && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Tag className="w-6 h-6 text-coral mr-2" />À la Une
            </h2>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden hover:bg-white/15 hover:shadow-coral/20 hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-coral to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {featuredNews.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-300 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{featuredNews.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>
                        {new Date(featuredNews.date).toLocaleDateString(
                          "fr-FR"
                        )}
                      </span>
                    </div>
                    <button className="flex items-center text-turquoise hover:text-cyan-300 font-medium transition-colors group">
                      Lire plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Autres Actualités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl overflow-hidden hover:bg-white/15 hover:shadow-2xl hover:shadow-turquoise/20 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gradient-to-r from-turquoise to-cyan-400 text-white px-2 py-1 rounded text-xs font-medium shadow-md">
                        {news.category}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-xs text-gray-300 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {news.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-400">
                        <User className="w-3 h-3 mr-1" />
                        <span className="mr-2">{news.author}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>
                          {new Date(news.date).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                      <button className="flex items-center text-turquoise hover:text-cyan-300 text-sm font-medium transition-colors group">
                        Lire
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Aucune actualité trouvée
            </h3>
            <p className="text-gray-300">
              Essayez de modifier vos critères de recherche ou sélectionnez une
              autre catégorie.
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-turquoise/80 via-cyan-500/80 to-slate-700/80 rounded-2xl p-8 text-center text-white shadow-2xl border border-white/20">
          <h3 className="text-2xl font-bold mb-4">
            Ne manquez aucune actualité !
          </h3>
          <p className="mb-6 opacity-90">
            Abonnez-vous à notre newsletter pour recevoir les dernières
            nouvelles directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-200 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors"
            />
            <button className="bg-coral-dark backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 hover:shadow-lg transition-all duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
