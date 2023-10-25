import { ClientDatas } from "../Datas/ClientDatas";

const Client = () => {
  return (
    <div className="container">
      <div className="d-grid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center gap-2">
            <div
              className="d-flex flex-column gap-2"
              style={{ width: "595px" }}
            >
              <h1>Our Clients Feedback</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-light px-4 py-3" style={{backgroundColor:"#F3F3F3"}}>
              Read More
            </button>
          </div>
        </div>
        <div className="bg-primary-subtle">
          {ClientDatas.map((data, id) => {
            id = crypto.randomUUID();
            return (
              <div className="d-flex" key={id}>
                <div>
                  <img src={data.image} alt={data.name} />
                </div>
                <div
                  className="d-flex flex-column"
                  style={{ padding: "100px" }}
                >
                  <img src={data.star} alt="rating" width={250} className="mb-4" />
                  <p>{data.comment}</p>
                  <h4>{data.name}</h4>
                  <div className="d-flex">
                    <h6>{data.title}</h6>
                    <h6>{data.account}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Client;
