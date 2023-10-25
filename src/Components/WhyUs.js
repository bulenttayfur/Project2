import { WhyUsDatas } from "../Datas/WhyUsDatas";

const WhyUs = () => {
  const imageUrl = WhyUsDatas.map((data) => {
    return data.image;
  });

  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        paddingBottom: "20%",
        backgroundSize: "40%",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="container">
        <div className="d-grid">
          <div className="d-flex justify-content-center gap-2">
            <div
              className="d-flex flex-column gap-2"
              style={{ width: "595px" }}
            >
              <h1 className="text-center">Why Us</h1>
              <p className="text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex"
          style={{ position: "relative", top: "180px", paddingLeft: "40%" }}
        >
          <div>
            <h2>Built The App That Everyone Love.</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <button type="button" className="btn btn-primary" style={{color:"black", backgroundColor:"white"}}>
            Get More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
