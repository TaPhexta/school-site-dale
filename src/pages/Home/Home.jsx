import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="news-heading">
            <div>
              <span className="news-tag">Latest News</span>

              <h2>Life at Dale</h2>
            </div>

            <a href="#" className="news-link">
              View All News
              <span className="icon-arrow-right"></span>
            </a>
          </div>

          <div className="news-grid">
            {[1, 2, 3].map((item) => (
              <article key={item} className="news-card">
                <div className="news-image">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      item === 1
                        ? "1519003300449-424423927692"
                        : item === 2
                          ? "1509062522246-3755977927d7"
                          : "1523580494863-6f3031224c94"
                    }?q=80&w=800&auto=format&fit=crop`}
                    alt="News"
                  />
                </div>

                <div className="news-content">
                  <div className="news-category">Sport</div>

                  <h3>
                    {item === 1
                      ? "First XV Rugby Team Dominates Regional Derby"
                      : item === 2
                        ? "Academic Awards Ceremony 2025"
                        : "New Science Centre Opening"}
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <a href="#">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
