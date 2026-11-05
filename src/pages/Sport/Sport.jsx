import Checkerboard from "../../components/Checkerboard/CheckerBoard";
import sport from "../../data/sport.json";
import "./Sport.css";

function Sport() {
  return (
    <div className="sport-page">
      <section className="sport-hero">
        <div className="sport-hero-overlay"></div>

        <img
          src={`${import.meta.env.BASE_URL}assets/images/sport/waterpoloProvincial.jpeg`}
          alt="Sport"
        />

        <div className="sport-hero-content container-custom">
          <h1>Sport</h1>
          <p>Battlefields of Character</p>
        </div>
      </section>

      <section className="sport-sections">
        {sport.map((sport, index) => (
          <Checkerboard
            key={sport.title}
            {...sport}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
}

export default Sport;
