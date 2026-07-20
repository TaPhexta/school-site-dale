import newsItems from "../../data/news.json";
import "./News.css";

function News() {
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
        {newsItems.map((item, index) => (
          <article key={index} className="news-article">
            <div className="news-sidebar">
              <div className="news-category">{item.category}</div>
              <div className="news-date">{item.date}</div>
            </div>

            <div className="news-body">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default News;
