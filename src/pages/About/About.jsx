import Header from "../components/Header";
import Footer from "../components/Footer";

import historyTimeline from "../data/historyTimeline.json";

import "./about.css";

function About() {
  return (
    <div className="about-page">
      <Header activePage="our story" />

      <section className="about-hero">
        <h1 className="about-title">Where It All Began</h1>

        <p className="about-subtitle">The Dale Odyssey</p>
      </section>

      <section className="about-timeline">
        <div className="timeline-line"></div>

        {historyTimeline.map((section, index) => (
          <article key={section.year} className="timeline-section">
            <div className="timeline-background">
              <img src={section.image} alt={section.title} />

              <div className="timeline-overlay"></div>
            </div>

            <div
              className={`container-custom timeline-content ${
                index % 2 === 0 ? "" : "timeline-reverse"
              }`}
            >
              <div className="timeline-text">
                <span className="timeline-year">{section.year}</span>

                <h2>{section.title}</h2>

                <div className="timeline-description">{section.text}</div>
              </div>

              <div className="timeline-image">
                <div className="timeline-image-border">
                  <div className="timeline-image-wrapper">
                    <img src={section.image} alt={section.title} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default About;
