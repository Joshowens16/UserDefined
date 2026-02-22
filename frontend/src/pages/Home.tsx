import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, loading, logout } = useAuth();
  const [healthStatus, setHealthStatus] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealthStatus(data.status))
      .catch(() => setHealthStatus("error"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Fullstack Boilerplate
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        React + TypeScript + Tailwind &mdash; Express + Prisma + PostgreSQL
      </p>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <p className="text-sm text-gray-500">
          API Health:{" "}
          <span
            className={
              healthStatus === "ok"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {healthStatus ?? "checking..."}
          </span>
        </p>
      </div>
      {loading ? null : user ? (
        <div className="text-center">
          <p className="text-gray-700 mb-2">
            Logged in as{" "}
            <span className="font-semibold">{user.name || user.email}</span>
          </p>
          <p className="text-sm text-gray-500 mb-4">{user.email}</p>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
