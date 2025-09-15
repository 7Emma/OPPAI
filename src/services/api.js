import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

// Intercepteur pour ajouter le token automatiquement
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers["x-auth-token"] = token;
    console.log("Token envoyé :", localStorage.getItem("token"));
  }
  return req;
});

// --- Auth ---
export const requestLoginCode = async (email) => {
  const res = await api.post("/auth/login", { email });
  return res.data; // { message: "Code envoyé..." }
};

export const verifyLoginCode = async (email, code) => {
  const res = await api.post("/auth/login", { email, code });
  const data = res.data;

  if (data.token) localStorage.setItem("token", data.token);

  return data; // { token, user }
};

// --- Users ---
export const getUsers = () => api.get("/admin/users");
export const addUser = (userData) =>
  api.post("/admin/register-developer", userData);
export const deleteUser = (id) => api.delete(`/admin/users/${id}`);
export const toggleUserStatus = (id) =>
  api.patch(`/admin/users/${id}/toggle-status`);

// Récupérer tous les profils
export const getProfiles = () => api.get("/profile/all");

// Créer un profil
export const createProfile = (data) => {
  return api.post("/profile", data);
};

// --- News (Membres) ---
export const createNews = (payload) => api.post("/news", payload);
export const getNews = () => api.get("/news?status=approved");

// --- Publications ---
// Récupère toutes les publications (avec un filtre de statut optionnel)
export const getPublications = (status = "") => {
  const endpoint = status
    ? `/admin/publications?status=${status}`
    : "/admin/publications";
  return api.get(endpoint);
};
// Récupère les publications en attente de validation.
export const getPendingPublications = () =>
  api.get("/admin/publications?status=pending");
// Crée une nouvelle publication (avec un statut "pending" par défaut)
export const createPublication = (publicationData) => {
  const dataWithStatus = { ...publicationData, status: "pending" };
  return api.post("/publications", dataWithStatus);
};
// Approuve une publication.
export const approvePublication = (id) =>
  api.patch(`/admin/publications/${id}/approve`);
// Rejette une publication.
export const rejectPublication = (id) =>
  api.patch(`/admin/publications/${id}/reject`);
