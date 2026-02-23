import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome back, {user.name || user.email}
      </h1>
      <p className="text-gray-600">Your dashboard is coming soon.</p>
    </div>
  );
}

export default Dashboard;
