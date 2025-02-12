import React from "react";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  onLogout?: () => void; // Add optional prop
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    if (onLogout) onLogout(); // Call onLogout if provided
    navigate("/signin"); // Redirect to Sign-in page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
