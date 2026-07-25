import { Link, Navigate, useParams } from "react-router-dom";

import newsItems from "../../data/news.json";

import "./NewsArticle.css";

function NewsArticle() {
  const { slug } = useParams();

  const articles = [...newsItems].sort(
    (a, b) => new Date(b.published) - new Date(a.published),
  );

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug && item.category === article.category,
    )
    .slice(0, 3);

  const previousArticle = articles.find((item) => item.id === article.id - 1);

  const nextArticle = articles.find((item) => item.id === article.id + 1);

  return (
    <main className="article-page">
      {/* Newspaper Header */}

      <section className="article-header container-custom">
        <p className="article-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/news">News</Link>
          <span>/</span>
          <span>{article.category}</span>
        </p>

        <h1>THE HERON</h1>

        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.date}</span>
          <span>{article.author}</span>
          <span>{article.readingTime}</span>
        </div>
      </section>

      {/* Article */}

      <article className="container-custom article">
        <h2 className="article-title">{article.title}</h2>

        {article.images.length > 0 && (
          <div className="article-hero-image">
            <img src={article.images[0]} alt={article.title} />
          </div>
        )}

        <div className="article-body">
          {Array.isArray(article.content) ? (
            article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{article.content}</p>
          )}
        </div>

        {article.images.length > 1 && (
          <section className="article-gallery">
            {article.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${article.title} ${index + 2}`}
              />
            ))}
          </section>
        )}
      </article>

      {/* Previous / Next */}

      <section className="container-custom article-navigation">
        {previousArticle ? (
          <Link
            to={`/news/${previousArticle.slug}`}
            className="article-nav-card"
          >
            <span>← Previous</span>
            <h3>{previousArticle.title}</h3>
          </Link>
        ) : (
          <div></div>
        )}

        {nextArticle ? (
          <Link
            to={`/news/${nextArticle.slug}`}
            className="article-nav-card article-nav-right"
          >
            <span>Next →</span>
            <h3>{nextArticle.title}</h3>
          </Link>
        ) : (
          <div></div>
        )}
      </section>

      {/* Related */}

      <section className="container-custom related-news">
        <div className="related-heading">
          <h2>Continue Reading</h2>

          <Link to="/news">View All News →</Link>
        </div>

        <div className="related-grid">
          {relatedArticles.map((item) => (
            <article key={item.id} className="related-card">
              <img src={item.images[0]} alt={item.title} />

              <div>
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.excerpt}</p>

                <Link to={`/news/${item.slug}`}>Read Article →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default NewsArticle;
