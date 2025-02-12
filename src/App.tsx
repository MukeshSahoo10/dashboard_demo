import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AccountActivation from "./components/AccountActivation";
import Deposits from "./components/Deposit";
import IncomeReports from "./components/IncomeReports";
import MyTeam from "./components/MyTeam";
import Withdrawals from "./components/Withdraw";
import Support from "./components/Support";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout"; // No need to pass onLogout

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(userLoggedIn);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar onLogout={handleLogout} />}{" "}
        {/* Pass handleLogout to Sidebar */}
        <div className="p-4 flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to={isAuthenticated ? "/dashboard" : "/signin"} />
              }
            />
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <Profile /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/account-activation"
              element={
                isAuthenticated ? (
                  <AccountActivation />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
            <Route
              path="/deposits"
              element={
                isAuthenticated ? <Deposits /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/income-reports"
              element={
                isAuthenticated ? <IncomeReports /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/my-team"
              element={isAuthenticated ? <MyTeam /> : <Navigate to="/signin" />}
            />
            <Route
              path="/withdrawals"
              element={
                isAuthenticated ? <Withdrawals /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/support"
              element={
                isAuthenticated ? <Support /> : <Navigate to="/signin" />
              }
            />
            <Route path="/logout" element={<Logout />} />{" "}
            {/* No need to pass onLogout */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
