import { ServiceDatas } from "../Datas/ServiceDatas";

function Services() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column gap-2" style={{ width: "595px" }}>
              <h1 className="text-center">
                We provide various kind of service for you
              </h1>
              <p className="text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as
              </p>
            </div>
          </div>
          <div className="d-flex" style={{ gap: "100px" }}>
            {ServiceDatas.map((data, id) => {
              id = crypto.randomUUID();
              return (
                <div
                  className="d-flex flex-column align-items-center rounded shadow p-4 gap-2"
                  key={id}
                >
                  <img src={data.image} alt={data.title} height="230" />
                  <h2 className="fs-4">{data.title}</h2>
                  <p className="fs-6">{data.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
