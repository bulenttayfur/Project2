import { ProjectDatas } from "../Datas/ProjectDatas";

const Project = () => {
  const firstElement = ProjectDatas[0];
  const otherElements = ProjectDatas.slice(1);

  return (
    <div className="container">
      <div className="d-grid gap-5">
        <div className="d-flex justify-content-center gap-2">
          <div className="d-flex flex-column gap-2" style={{ width: "595px" }}>
            <h1 className="text-center">
              We Completed 1200+ Projects Yearly Successfully & Counting
            </h1>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </div>

<div className="d-flex justify-content-center" style={{gap: "100px"}}>
        <div className="d-flex border border-0 p-3 " style={{backgroundColor: "white", borderRadius:"50px 0"}}>
                <div >
                  <img src={firstElement.image} alt={firstElement.info} width="50px" />
                </div>
                <div className="d-grid">
                  <p className="m-0 text-primary fw-bold">{firstElement.quantity}</p>
                  <p className="m-0 text-primary fw-bold">{firstElement.info}</p>
                </div>
              </div>



        <div className="d-flex justify-content-center p-3" style={{gap: "100px"}}>
          {otherElements.map((data, id) => {
            id = crypto.randomUUID();
            return (
              <div className="d-flex" key={id}>
                <div key={id}>
                  <img src={data.image} alt={data.info} width="50px" />
                </div>
                <div className="d-grid">
                  <p className="m-0 text-primary fw-bold">{data.quantity}</p>
                  <p className="m-0">{data.info}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
