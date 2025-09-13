import React from "react";
import { Users, FileText, Clock } from "lucide-react";
import StatsCard from "../StatsCard";

const DashboardPage = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatsCard
        title="Utilisateurs totaux"
        value={stats.totalUsers}
        icon={Users}
        color="red"
      />
      <StatsCard
        title="Utilisateurs actifs"
        value={stats.activeUsers}
        icon={Users}
        color="green"
      />
      <StatsCard
        title="Publications totales"
        value={stats.totalPublications}
        icon={FileText}
        color="blue"
      />
      <StatsCard
        title="Publications en attente"
        value={stats.pendingPublications}
        icon={Clock}
        color="yellow"
      />
    </div>
  );
};

export default DashboardPage;
