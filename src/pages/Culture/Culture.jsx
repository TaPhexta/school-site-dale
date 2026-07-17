import "./Culture.css";

import CheckerboardSection from "../../components/CheckerboardSection/CheckerboardSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import activities from "../../data/culture-activities.json";

function Culture() {
  return (
    <div className="culture-page">
      <Header activePage="culture" />

      <section className="culture-hero">
        <img
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop"
          alt="Culture"
        />

        <div className="culture-overlay"></div>

        <div className="container-custom culture-hero-content">
          <h1>Culture</h1>
          <p>The Soul of the School</p>
        </div>
      </section>

      <section className="culture-sections">
        {activities.map((activity, index) => (
          <CheckerboardSection
            key={index}
            {...activity}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Culture;
