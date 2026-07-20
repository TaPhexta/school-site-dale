import activities from "../../data/cultural-activities.json";
import Checkerboard from "../../components/Checkerboard/CheckerBoard";
import "./Culture.css";

function Culture() {
  return (
    <div className="culture-page">
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
