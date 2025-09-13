import React from "react";
import { Settings } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
      <Settings size={64} className="mb-4" />
      <h2 className="text-xl font-semibold">Paramètres du tableau de bord</h2>
      <p>Cette section est en cours de développement.</p>
    </div>
  );
};

export default SettingsPage;
