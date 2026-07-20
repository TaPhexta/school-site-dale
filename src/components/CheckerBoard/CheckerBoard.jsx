import "./Checkerboard.css";

function CheckerboardSection({
  title,
  text,
  headImage,
  images = [],
  isReversed = false,
}) {
  return (
    <section
      className={`checkerboard ${isReversed ? "checkerboard-reverse" : ""}`}
    >
      <div className="checkerboard-images">
        <img
          src={headImage || "#"}
          alt={title}
          className="checkerboard-main-image"
        />

        <div className="checkerboard-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image || "#"}
              alt={`${title} ${index + 1}`}
              className="checkerboard-gallery-image"
            />
          ))}
        </div>
      </div>

      <div className="checkerboard-content">
        <h2>{title}</h2>

        <div className="checkerboard-divider"></div>

        <p>{text}</p>

        <button className="btn btn-primary">Learn More</button>
      </div>
    </section>
  );
}

export default CheckerboardSection;
