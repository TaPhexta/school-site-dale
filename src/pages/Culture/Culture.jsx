import activities from "../../data/cultural-activities.json";
import Checkerboard from "../../components/Checkerboard/CheckerBoard";
import "./Culture.css";

function Culture() {
  return (
    <div className="culture-page">
      <section className="culture-hero">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/culture-hero.jpg`}
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
          <Checkerboard
            key={index}
            {...activity}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
}

export default Culture;
