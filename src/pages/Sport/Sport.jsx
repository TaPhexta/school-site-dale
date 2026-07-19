import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import sports from "../../data/sport.json";
import "./Sport.css";

function Sport() {
  return (
    <div className="sport-page">
      <Header activePage="sport" />

      <section className="sport-hero">
        <div className="sport-hero-overlay"></div>

        <img
          src="https://images.unsplash.com/photo-1519003300449-424423927692?q=80&w=2072&auto=format&fit=crop"
          alt="Rugby"
        />

        <div className="sport-hero-content container-custom">
          <h1>Sport</h1>
          <p>Battlefields of Character</p>
        </div>
      </section>

      <section className="sport-sections">
        {sports.map((sport, index) => (
          <CheckerboardSection
            key={index}
            {...sport}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Sport;
