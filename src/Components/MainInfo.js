import iphones from "../Photos/iphones.png";
import background from "../Photos/background.png";
import logo from "../Photos/logo.png";

const MainInfo = () => {
  return (
    <section
      className="d-flex flex-column"
      style={{ backgroundImage: `url(${background})`, height: "1000px" }}
    >
      {/* HEADER START */}
      <nav className="navbar navbar-expand-lg container  ">
        <div className="d-flex justify-content-between "> 
          <div>
            <a className="navbar-brand d-flex gap-2" href="#">
              <img src={logo} alt="logo" width="30px" />
              <p className="m-0">
                <span className="text-primary">Test</span>
                <span>Proje</span>
              </p>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex gap-3" style={{paddingLeft:"400px"}}>
              <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                Home
              </a>
              <a className="nav-link" href="#" style={{color:"white"}}>
                Services Us
              </a>
              <a className="nav-link" href="#" style={{color:"white"}}>
                Why Us
              </a>
              <a className="nav-link " href="#" style={{color:"white"}}>
                Our Goals
              </a>
              <a className="nav-link " href="#" style={{color:"white"}}>
                Our Portfolio
              </a>
              <a className="nav-link " href="#" style={{color:"white"}}>
                Our Client
              </a>
              <button type="button" className="btn btn-primary border border-0 px-3" style={{backgroundColor:"white", color:"black", borderRadius:"30px"}}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* HEADER FINISH */}

      <div className="d-flex container">
        <div style={{ color: "white", padding: "70px 50px 70px 0" }}>
          <h1>We Create Applications With Excellent Technology.</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="d-flex gap-4 align-items-center">
            <button
              type="button"
              className="btn btn-primary border border-0 p-3"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Download Now
            </button>
            <a
              href="#"
              className="fw-bold"
              style={{ textDecoration: "none", color: "white" }}
            >
              Explore More
            </a>
          </div>
        </div>

        <div>
          <img src={iphones} alt="threeiphones" width={700} />
        </div>
      </div>
    </section>
  );
};
export default MainInfo;
