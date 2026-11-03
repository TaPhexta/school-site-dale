import { Link } from "react-router-dom";

import newsItems from "../../data/news.json";

import "./News.css";

function News() {
  const articles = [...newsItems].sort((a, b) => b.id - a.id);

  return (
    <div className="news-page">
      <section className="news-hero container-custom">
        <h1 className="news-title">THE HERON</h1>

        <div className="news-meta">
          <span>Vol. 165</span>
          <span>King William's Town</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </section>

      <section className="container-custom news-content">
        {articles.map((article) => (
          <article key={article.id} className="news-article">
            <div className="news-sidebar">
              <div className="news-category">{article.category}</div>

              <div className="news-date">{article.date}</div>
            </div>

            <div className="news-body">
              {article.images?.length > 0 && (
                <div className="news-feature-image">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/${article.images[0]}`}
                    alt={article.title}
                  />
                </div>
              )}

              <h2>{article.title}</h2>

              <p>{article.excerpt}</p>

              <Link className="news-read-more" to={`/news/${article.slug}`}>
                Continue Reading →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default News;
