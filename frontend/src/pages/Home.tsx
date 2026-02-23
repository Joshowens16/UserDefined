import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return null;

  // TODO: redirect logged-in users to dashboard once it exists
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Track anything that matters to you
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-xl">
        Create your own metrics, log your progress, and see how far you've come
        &mdash; all in one place.
      </p>
      <Link
        to="/register"
        className="bg-blue-600 text-white text-lg px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}
