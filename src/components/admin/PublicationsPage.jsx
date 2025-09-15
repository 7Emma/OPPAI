import React from "react";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Bell,
  Filter,
} from "lucide-react";
import Toast from "../../components/common/Toast";
const PublicationsPage = ({
  publications,
  filteredPublications,
  publicationFilters,
  setPublicationFilters,
  handlePublicationAction,
  getStatusColor,
  getStatusLabel,
}) => {
  const handleFilterChange = (e) => {
    setPublicationFilters({
      ...publicationFilters,
      status: e.target.value,
    });
  };
  const handleSearchChange = (e) => {
    setPublicationFilters({
      ...publicationFilters,
      search: e.target.value,
    });
  };
  const noPublicationsMessage = () => {
    switch (publicationFilters.status) {
      case "pending":
        return "Pas de publications en attente de validation.";
      case "approved":
        return "Aucune publication validée.";
      case "rejected":
        return "Aucune publication rejetée.";
      case "all":
        return "Pas de publications à afficher.";
      default:
        return "Pas de publications à afficher.";
    }
  };
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <FileText className="mr-3 text-blue-400" />
        Gestion des Publications
      </h2>
      <p className="text-gray-400 mb-8">
        Gérez l'ensemble des publications : visualisez, validez ou rejetez les
        articles soumis.
      </p>
      {/* Contrôles de filtre et de recherche */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-auto">
          <select
            value={publicationFilters.status}
            onChange={handleFilterChange}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">En Attente</option>
            <option value="approved">Validées</option>
            <option value="rejected">Rejetées</option>
            <option value="all">Toutes</option>
          </select>
          <Filter
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Rechercher par titre ou auteur..."
            value={publicationFilters.search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {filteredPublications.length === 0 ? (
        <div className="text-center p-12 bg-slate-800/50 rounded-lg border border-slate-700">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <p className="text-white text-lg font-semibold">
            {noPublicationsMessage()}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub._id}
              className="bg-slate-800/70 border border-slate-700 rounded-lg p-6 flex flex-col justify-between transition-all hover:border-blue-500"
            >
              <div>
                {pub.image && (
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <span
                  className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${getStatusColor(
                    pub.status
                  )}`}
                >
                  {getStatusLabel(pub.status)}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {pub.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <span className="mr-3 flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    {pub.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {pub.readTime}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                {pub.status === "pending" ? (
                  <div className="flex gap-3 flex-1">
                    <button
                      onClick={() =>
                        handlePublicationAction(pub._id, "approved")
                      }
                      className="flex-1 flex items-center justify-center p-3 bg-green-600/20 text-green-400 rounded-md font-semibold hover:bg-green-600/40 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Approuver
                    </button>
                    <button
                      onClick={() =>
                        handlePublicationAction(pub._id, "rejected")
                      }
                      className="flex-1 flex items-center justify-center p-3 bg-red-600/20 text-red-400 rounded-md font-semibold hover:bg-red-600/40 transition-colors"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Rejeter
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default PublicationsPage;
