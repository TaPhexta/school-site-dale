import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

import newsItems from "../../data/news.json";

function Home() {
  const latestNews = [...newsItems].sort((a, b) => b.id - a.id).slice(0, 4);

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

            <Link to="/news" className="news-link">
              View All News
              <span className="icon-arrow-right"></span>
            </Link>
          </div>

          <div className="news-grid">
            {latestNews.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <img
                    src={
                      article.images?.[0] ||
                      "/assets/images/placeholders/news-placeholder.jpg"
                    }
                    alt={article.title}
                  />
                </div>

                <div className="news-content">
                  <div className="news-category">{article.category}</div>

                  <h3>{article.title}</h3>

                  <p>{article.excerpt}</p>

                  <Link to={`/news/${article.slug}`}>Read More</Link>
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
