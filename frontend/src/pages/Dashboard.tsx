import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Modal from "../components/Modal";
import NewMetricForm from "../components/NewMetricForm";
function Dashboard() {
  const { user, loading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return null;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="flex-1 flex flex-col px-4 py-4">
      <div className="self-start">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Metric
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name || user.email}
        </h1>
        <p className="text-gray-600">Your dashboard is coming soon.</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewMetricForm />
      </Modal>
    </div>
  );
}

export default Dashboard;
