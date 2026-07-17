import "./Hero.css";

function Hero() {
  return (
    <section className="hero" data-name="hero" data-file="components/Hero.js">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1974&auto=format&fit=crop"
          alt="Dale College Main Building"
          className="hero-image"
        />

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <div className="hero-logo">
            <div className="hero-logo-letter">D</div>
          </div>
        </div>

        <h2 className="hero-established">Est. 1861</h2>

        <h1 className="hero-title">
          Per Ardua
          <br />
          <span className="hero-title-gradient">Ad Astra</span>
        </h1>

        <p className="hero-description">
          More than a school. A brotherhood. A legacy.
          <br />
          <span className="hero-description-secondary">
            Through adversity to the stars.
          </span>
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary min-w-[180px]">Our Story</button>

          <button className="btn btn-outline min-w-[180px]">
            Virtual Tour
          </button>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="icon-arrow-down text-2xl"></div>
      </div>
    </section>
  );
}

export default Hero;
