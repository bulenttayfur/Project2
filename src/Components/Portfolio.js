import portfolio from "../Photos/portfolio.png";

const Portfolio = () => {
  return (
    <div className="d-grid">
      <div className="container">
        <div className="d-flex justify-content-center gap-2">
          <div className="d-flex flex-column gap-2" style={{ width: "595px" }}>
            <h1 className="text-center">Our Portfolio</h1>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={portfolio} alt="portfolio" width={"100%"} />
      </div>
    </div>
  );
};
export default Portfolio;
