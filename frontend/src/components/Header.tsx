import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <div className="m-4 h-24  flex items-center justify-between px-12 bg-white rounded-lg shadow p-8 w-full">
      <div className="w-40">
        <Link to="/">
          <FaHome size={48} />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">User Defined</h1>
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
    </div>
  );
}

export default Header;
