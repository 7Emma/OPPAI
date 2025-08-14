import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white px-4">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6 text-center">
      Oups ! La page que vous recherchez n'existe pas.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-coral rounded-lg text-white font-medium hover:bg-rose-500 transition-colors"
    >
      Retour à l'accueil
    </Link>
  </div>
);

export default NotFound;
