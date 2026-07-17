import "./Header.css";

function Header({ activePage = "home" }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "index.html" },
    { name: "Our Story", href: "about.html" },
    { name: "Academics", href: "academics.html" },
    { name: "Sport", href: "sport.html" },
    { name: "Culture", href: "culture.html" },
    { name: "Boarding", href: "boarding.html" },
    { name: "News", href: "news.html" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const isHome =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname === "/app";

      if (isHome) {
        const element = document.querySelector(href);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        window.location.href = `index.html${href}`;
      }
    } else {
      window.location.href = href;
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        isScrolled ? "header-scrolled" : "header-transparent"
      }`}
      data-name="header"
      data-file="components/Header.js"
    >
      <div className="container-custom flex justify-between items-center">
        <a href="index.html" className="header-logo">
          <div
            className={`header-logo-circle ${
              isScrolled
                ? "header-logo-circle-scrolled"
                : "header-logo-circle-transparent"
            }`}
          >
            <div className="header-logo-letter">D</div>
          </div>

          <div>
            <span
              className={`header-title ${
                isScrolled ? "header-title-dark" : "header-title-light"
              }`}
            >
              DALE COLLEGE
            </span>

            <span
              className={`header-subtitle ${
                isScrolled ? "header-subtitle-dark" : "header-subtitle-light"
              }`}
            >
              Boys' High School
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`header-nav-link ${
                isScrolled ? "header-nav-dark" : "header-nav-light"
              } ${
                activePage === item.name.toLowerCase()
                  ? "header-nav-active"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}

          <a
            href="admissions.html"
            className={`btn ${
              isScrolled ? "btn-primary" : "btn-outline"
            } text-xs px-5 py-2`}
          >
            Apply Now
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div
            className={`icon-${mobileMenuOpen ? "x" : "menu"} text-2xl ${
              isScrolled ? "text-[var(--dale-black)]" : "text-white"
            }`}
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="header-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="header-mobile-link"
            >
              {item.name}
            </button>
          ))}

          <button className="btn btn-primary mt-4">Apply Now</button>
        </div>
      )}
    </header>
  );
}

export default Header;
