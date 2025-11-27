import "./Menubar.css";
import { assets } from "../../assets/assets.js";
import { Link, Links, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const Menubar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthData, auth } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuthData(null, null);
    navigate("/login");
  };

  useEffect(() => {
    try {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
        return;
      }
      const userRaw = localStorage.getItem("user");
      if (userRaw) {
        const user = JSON.parse(userRaw);
        const name = user?.name || user?.username || user?.email || "";
        if (name) setUsername(name);
      }
    } catch (_) {}
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isAdmin = auth.role === "ROLE_ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="#">
        IMS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/explore") ? "fw-bold text-warning" : ""
              }`}
              to="/explore"
            >
              Explore
            </Link>
          </li>
          {isAdmin && (
            <>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/dashboard") ? "fw-bold text-warning" : ""
                  }`}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/Stock") ? "fw-bold text-warning" : ""
                  }`}
                  to="/Stock"
                >
                  Stock
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/items") ? "fw-bold text-warning" : ""
                  }`}
                  to="/items"
                >
                  Manage Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/category") ? "fw-bold text-warning" : ""
                  }`}
                  to="/category"
                >
                  Manage Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/users") ? "fw-bold text-warning" : ""
                  }`}
                  to="/users"
                >
                  Manage Users
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/orders") ? "fw-bold text-warning" : ""
              }`}
              to="/orders"
            >
              Order History
            </Link>
          </li>
        </ul>
        {/*Add the dropdown for userprofile*/}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={assets.profile} alt="" height={32} width={32} />
              {username && (
                <span className="navbar-username ms-2" title={username}>
                  {username}
                </span>
              )}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              {username && (
                <li>
                  <span className="dropdown-item-text fw-semibold">{username}</span>
                </li>
              )}
              <li>
                <a href="#!" className="dropdown-item">
                  Settings
                </a>
                <a href="#!" className="dropdown-item">
                  Activity log
                </a>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <a href="#!" className="dropdown-item" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
