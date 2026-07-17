import "./Boarding.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import houses from "../../data/boarding-houses.json";
import routine from "../../data/boarding-routine.json";

function Boarding() {
  return (
    <div className="boarding-page">
      <Header activePage="boarding" />

      <section className="boarding-hero">
        <div className="boarding-hero-image">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2000&auto=format&fit=crop"
            alt="Boarding"
          />
          <div className="boarding-overlay"></div>
        </div>

        <div className="container-custom boarding-content">
          <div className="boarding-text">
            <h1>Home Away From Home</h1>

            <p>
              Boarding at Dale is more than accommodation. It's an induction
              into a brotherhood. Here, bonds are forged that last a lifetime.
            </p>

            <button className="btn btn-primary">Download Boarding Guide</button>
          </div>
        </div>
      </section>

      <section className="boarding-houses section-padding">
        <div className="container-custom">
          <div className="houses-grid">
            {houses.map((house, index) => (
              <article className="house-card" key={index}>
                <div className="house-icon">
                  <i className={`icon-${house.icon}`}></i>
                </div>

                <h3>{house.name}</h3>

                <p>{house.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="boarding-routine">
        <div className="container-custom routine-grid">
          <div className="routine-content">
            <h2>A Structured Life</h2>

            <p>
              Routine is the bedrock of discipline. Our boarders follow a
              carefully structured schedule that balances academic rigor, sport,
              and leisure.
            </p>

            <ul className="routine-list">
              {routine.map((item, index) => (
                <li key={index}>
                  <span>{item.time}</span>
                  <small>{item.activity}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="routine-image">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              alt="Boarding Life"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Boarding;
