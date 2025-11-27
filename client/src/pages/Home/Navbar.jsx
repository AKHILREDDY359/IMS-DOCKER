import { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollY }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (scrollY > 80) {
      setNavbarClass("navbar-scrolled");
    } else {
      setNavbarClass("");
    }
  }, [scrollY]);

  useEffect(() => {
    // Try to read username from common locations
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
    } catch (_) {
      // ignore parsing issues
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("user");
    } catch (_) {}
    setUsername("");
    setMenuOpen(false);
    navigate("/login", { replace: true });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${navbarClass} ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-containerr">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/", { replace: true })}
        >
          <h1>IMS</h1>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          {username ? (
            <>
              <li>
                <div className="user-chip" title={username}>
                  <span className="user-avatar" aria-hidden>👤</span>
                  <span className="user-name">{username}</span>
                </div>
              </li>
              <li>
                <button type="button" className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <a
                href="/login"
                className="login-btn"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
