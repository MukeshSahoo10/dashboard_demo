import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  UserCircle,
  Clock,
  Wallet,
  PieChart,
  Users,
  ArrowRightLeft,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

// Declare the prop type for Sidebar to accept onLogout function
interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  // Accepting the onLogout prop
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    onLogout(); // Call the onLogout function passed from App.tsx
    navigate("/signin"); // Redirect to the login page after logout

    // Optionally reset the sidebar state when logged out
    setIsSidebarOpen(false);
  };

  // Navigation items array
  const navItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    { path: "/profile", icon: <UserCircle size={20} />, label: "Profile" },
    {
      path: "/account-activation",
      icon: <Clock size={20} />,
      label: "Account Activation",
    },
    { path: "/deposits", icon: <Wallet size={20} />, label: "Deposit" },
    {
      path: "/income-reports",
      icon: <PieChart size={20} />,
      label: "Income Reports",
    },
    { path: "/my-team", icon: <Users size={20} />, label: "My Team" },
    {
      path: "/withdrawals",
      icon: <ArrowRightLeft size={20} />,
      label: "Withdraw",
    },
    { path: "/support", icon: <HelpCircle size={20} />, label: "Support" },
  ];

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`w-56 bg-gradient-to-b from-gray-900 to-blue-700 text-white h-screen p-4 fixed top-0 left-0 transition-transform duration-300 ease-in-out z-50 shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="p-4 border-b border-blue-600 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center">
            <UserCircle size={36} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Om Keshari Panda</h3>
            <p className="text-xs text-blue-200">0137757</p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="mt-4">
          {navItems.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                to={item.path}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition text-sm"
              >
                {item.icon}
                <span className="ml-2 text-xs">{item.label}</span>
              </Link>
            </li>
          ))}
          {/* Logout Button */}
          <li className="mb-1">
            <button
              onClick={handleLogout}
              className="flex items-center p-2 rounded-lg hover:bg-red-600 transition w-full text-left text-sm"
            >
              <LogOut size={20} />
              <span className="ml-2 text-xs">Logout</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Toggle Button for Sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 bg-blue-700 text-white p-2 rounded-full z-50 shadow-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
