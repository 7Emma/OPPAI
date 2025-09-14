import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  Users,
  FileText,
  Home,
  ChevronLeft,
  ChevronRight,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import {
  getUsers,
  addUser,
  deleteUser,
  toggleUserStatus,
  getPublications,
  getPendingPublications,
  approvePublication,
  rejectPublication,
} from "../services/api";
// Importation des pages et composants
import DashboardPage from "../components/admin/DashboardPage";
import UsersPage from "../components/admin/UsersPage";
import PublicationsPage from "../components/admin/PublicationsPage";
import SettingsPage from "../components/admin/SettingsPage";
import Toast from "../components/common/Toast";

// ---------- AdminDashboard ----------
const AdminDashboard = () => {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toast, setToast] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Utilisateurs
  const [users, setUsers] = useState([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [userFilters, setUserFilters] = useState({ status: "all", search: "" });

  // Publications
  const [publications, setPublications] = useState([]);
  const [publicationFilters, setPublicationFilters] = useState({
    status: "approved",
    search: "",
  });
  const [pendingPublicationsCount, setPendingPublicationsCount] = useState(0);

  // Notifications
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [renderNotificationMenu, setRenderNotificationMenu] = useState(false);
  const notificationRef = useRef(null);

  // ---------- useEffect ----------
  useEffect(() => {
    fetchUsers();
    fetchPublications();
    fetchPendingPublicationsCount();
    const interval = setInterval(fetchPendingPublicationsCount, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showNotifications) {
      setRenderNotificationMenu(true);
    } else {
      const timer = setTimeout(() => {
        setRenderNotificationMenu(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showNotifications]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      // Petit délai pour éviter les conflits de rendu
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showNotifications]);

  // ---------- Fonctions API ----------
  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      showToast("Erreur lors du chargement des utilisateurs", "error");
    }
  };

  const fetchPublications = async () => {
    try {
      const res = await getPublications();
      setPublications(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des publications :", err);
      showToast("Erreur de chargement des publications", "error");
    }
  };

  const fetchPendingPublicationsCount = async () => {
    try {
      const res = await getPendingPublications();
      setPendingPublicationsCount(res.data.length);
    } catch (err) {
      console.error(
        "Erreur de récupération du compteur de publications :",
        err
      );
    }
  };

  const handleAddUser = async () => {
    if (!newUserEmail) {
      showToast("Veuillez saisir un email", "error");
      return;
    }
    try {
      const response = await addUser({ email: newUserEmail });
      setUsers((prevUsers) => [response.user, ...prevUsers]);
      setNewUserEmail("");
      setModalOpen(false);
      showToast("Utilisateur ajouté avec succès", "success");
    } catch (err) {
      showToast(err.message || "Erreur lors de l'ajout", "error");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u._id !== id));
      showToast("Utilisateur supprimé", "success");
    } catch (err) {
      console.error(err);
      showToast("Erreur lors de la suppression", "error");
    }
  };

  const handleToggleUserStatus = async (id) => {
    try {
      const updatedUser = await toggleUserStatus(id);
      setUsers(users.map((u) => (u._id === id ? updatedUser.data.user : u)));
      showToast("Statut utilisateur modifié", "success");
    } catch (err) {
      console.error(err);
      showToast("Erreur lors de la modification du statut", "error");
    }
  };

  const handlePublicationAction = async (id, action) => {
    try {
      if (action === "approved") {
        await approvePublication(id);
      } else if (action === "rejected") {
        await rejectPublication(id);
      }
      showToast(
        `Publication ${action === "approved" ? "validée" : "rejetée"}`,
        action === "approved" ? "success" : "error"
      );
      // Recharger les publications après l'action
      fetchPublications();
      fetchPendingPublicationsCount();
    } catch (err) {
      console.error(err);
      showToast("Erreur lors de la mise à jour", "error");
    }
  };

  // ---------- Fonctions utilitaires ----------
  const showToast = (message, type = "info") => setToast({ message, type });
  const closeToast = () => setToast(null);

  const filteredUsers = users.filter((user) => {
    const matchesStatus =
      userFilters.status === "all" || user.status === userFilters.status;
    const matchesSearch =
      user.username?.toLowerCase().includes(userFilters.search.toLowerCase()) ||
      user.email?.toLowerCase().includes(userFilters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const filteredPublications = publications.filter((pub) => {
    const matchesStatus =
      publicationFilters.status === "all" ||
      pub.status === publicationFilters.status;
    const matchesSearch =
      pub.title
        ?.toLowerCase()
        .includes(publicationFilters.search.toLowerCase()) ||
      pub.author?.username
        ?.toLowerCase()
        .includes(publicationFilters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === "active").length,
    totalPublications: publications.length,
    pendingPublications: pendingPublicationsCount,
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: Home,
      component: DashboardPage,
    },
    {
      id: "publications",
      label: "Publications",
      icon: FileText,
      component: PublicationsPage,
    },
    { id: "users", label: "Utilisateurs", icon: Users, component: UsersPage },
    {
      id: "settings",
      label: "Paramètres",
      icon: Settings,
      component: SettingsPage,
    },
  ];

  const CurrentPage = menuItems.find(
    (item) => item.id === currentPage
  )?.component;

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
      case "active":
        return "bg-green-100 text-green-800";
      case "rejected":
      case "inactive":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "approved":
        return "Validée";
      case "rejected":
        return "Rejetée";
      case "pending":
        return "En attente";
      case "active":
        return "Actif";
      case "inactive":
        return "Inactif";
      default:
        return status;
    }
  };

  const pageProps = {
    dashboard: { stats },
    users: {
      users,
      filteredUsers,
      userFilters,
      setUserFilters,
      openModal: () => {
        setModalType("addUser");
        setModalOpen(true);
      },
      handleToggleUserStatus,
      handleDeleteUser,
      getStatusColor,
      getStatusLabel,
      modalOpen,
      modalType,
      setModalOpen,
      newUserEmail,
      setNewUserEmail,
      handleAddUser,
    },
    publications: {
      publications,
      filteredPublications,
      publicationFilters,
      setPublicationFilters,
      handlePublicationAction,
      getStatusColor,
      getStatusLabel,
    },
    settings: {},
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className={`${!sidebarOpen && "hidden"} font-bold text-xl`}>
            Admin
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-gray-700"
          >
            {sidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${
                currentPage === item.id
                  ? "bg-gray-700 border-r-2 border-blue-500"
                  : ""
              }`}
            >
              <item.icon size={20} />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4">
          <button
            onClick={logout}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <LogOut size={20} />
            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>
              Déconnexion
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {menuItems.find((item) => item.id === currentPage)?.label}
          </h2>
          <div className="flex items-center space-x-4">
            {/* Notifications - CORRIGÉ */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Bell size={20} />
                {pendingPublicationsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {pendingPublicationsCount}
                  </span>
                )}
              </button>

              {renderNotificationMenu && (
                <div
                  className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 transition-all duration-300 ${
                    showNotifications
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-3 border-b">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-3 text-sm text-gray-500">
                        Aucune nouvelle notification
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`p-3 border-b ${
                            n.unread ? "bg-blue-50" : ""
                          }`}
                        >
                          <p className="text-sm font-medium">{n.message}</p>
                          <p className="text-xs text-gray-500">{n.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Rendu dynamique de la page */}
          {CurrentPage && (
            <CurrentPage key={currentPage} {...pageProps[currentPage]} />
          )}
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </div>
  );
};

export default AdminDashboard;
