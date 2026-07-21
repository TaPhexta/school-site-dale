import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import navigation from "../../data/navigation.json";

import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const location = useLocation();
  const currentPage = navigation.find(
    (page) => page.path === location.pathname,
  );
  const useDarkTheme = isScrolled || !currentPage?.hasHero;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${
        isScrolled ? "header-scrolled" : "header-transparent"
      }`}
    >
      <div className="container-custom header-inner">
        <Link to="/" className="header-logo">
          <div
            className={`header-logo-circle ${
              useDarkTheme
                ? "header-logo-circle-scrolled"
                : "header-logo-circle-transparent"
            }`}
          >
            <div className="header-logo-letter">D</div>
          </div>

          <div>
            <span
              className={`header-title ${
                useDarkTheme ? "header-title-dark" : "header-title-light"
              }`}
            >
              DALE COLLEGE
            </span>

            <span
              className={`header-subtitle ${
                useDarkTheme ? "header-subtitle-dark" : "header-subtitle-light"
              }`}
            >
              Boys' High School
            </span>
          </div>
        </Link>

        <nav className="header-nav">
          {navigation
            .filter((item) => item.showInNav)
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "header-nav-link",
                    useDarkTheme ? "header-nav-dark" : "header-nav-light",
                    isActive ? "header-nav-active" : "",
                  ].join(" ")
                }
              >
                {item.name}
              </NavLink>
            ))}

          <Link to="/admissions" className="header-nav-link">
            Apply Now
          </Link>
        </nav>

        <button
          className="header-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div
            className={`icon-${mobileMenuOpen ? "x" : "menu"} text-2xl ${
              useDarkTheme ? "text-[var(--dale-black)]" : "text-white"
            }`}
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="header-mobile-menu">
          <button
            className="header-mobile-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="icon-x"></div>
          </button>

          {navigation
            .filter((item) => item.showInNav)
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="header-mobile-link"
              >
                {item.name}
              </NavLink>
            ))}
        </div>
      )}
    </header>
  );
}

export default Header;
