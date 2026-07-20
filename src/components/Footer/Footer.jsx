import { Link } from "react-router-dom";
import Navigation from "../../data/navigation.json";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      data-name="footer"
      data-file="components/Footer.js"
    >
      <div className="container-custom">
        <div className="footer-grid">
          <div className="md:col-span-1">
            <div className="footer-brand">
              <div className="footer-logo">D</div>

              <div>
                <h3 className="footer-title">DALE COLLEGE</h3>

                <p className="footer-subtitle">Boys' High School</p>
              </div>
            </div>

            <p className="footer-description">
              Shaping men of character, integrity, and leadership since 1861.
              Per Ardua ad Astra.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>

            <ul className="footer-list">
              <li className="footer-item">
                <div className="icon-map-pin footer-icon"></div>

                <span>
                  King William's Town,
                  <br />
                  Eastern Cape, South Africa
                </span>
              </li>

              <li className="footer-item-center">
                <div className="icon-phone footer-icon"></div>

                <span>+27 43 642 1968</span>
              </li>

              <li className="footer-item-center">
                <div className="icon-mail footer-icon"></div>

                <span>admin@dalecollege.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>

            <ul className="footer-links">
              {Navigation.filter((item) => item.showInFooter).map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Newsletter</h4>

            <p className="footer-newsletter-text">
              Subscribe to receive the latest news from the Heron.
            </p>

            <form className="footer-form">
              <input
                type="email"
                placeholder="Your Email Address"
                className="footer-input"
              />

              <button className="btn btn-primary w-full text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Dale College Boys' High School.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>

            <Link to="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
