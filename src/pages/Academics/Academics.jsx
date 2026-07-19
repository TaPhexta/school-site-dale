import "./Academics.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import staff from "../../data/staff-placeholder.json";

function Academics() {
  return (
    <div className="academics-page">
      <Header activePage="academics" />

      <section className="academics-hero">
        <div className="academics-pattern"></div>

        <div className="container-custom academics-hero-content">
          <h1>Academic Excellence</h1>

          <div className="academics-intro">
            <p>
              "To cultivate an environment where intellectual curiosity meets
              disciplined study. We strive to produce young men who are critical
              thinkers, articulate speakers, and lifelong learners."
            </p>

            <div className="academics-divider"></div>

            <span>The Dale Vision</span>
          </div>
        </div>
      </section>

      <section className="academics-staff section-padding">
        <div className="container-custom">
          <h2>Our Faculty</h2>

          <div className="staff-grid">
            {staff.map((member, index) => (
              <article className="staff-card" key={index}>
                <div className="staff-image">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="staff-info">
                  <h3>{member.name}</h3>
                  <p className="staff-role">{member.role}</p>
                  <p className="staff-subject">{member.subject}</p>
                </div>

                <div className="staff-mail">
                  <i className="icon-mail"></i>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Academics;
