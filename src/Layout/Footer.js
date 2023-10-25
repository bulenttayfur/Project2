import logo from "../Photos/logofooter.png";
import facebook from "../Photos/facebooklogo.png";
import twitter from "../Photos/twitterlogo.png";
import linkedin from "../Photos/linkedinlogo.png";
import pinterest from "../Photos/pinterestlogo.png";

const Footer = () => {
  return (
    <section style={{ backgroundColor: "#EBEBF8" }}>
      <div className="d-grid" style={{ paddingTop: "150px" }}>
        <div className="d-flex justify-content-around">
          <div className="d-grid">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="d-flex gap-3">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
            </div>
          </div>

          <div className="d-grid gap-3">
            <div>
              <h5>Links</h5>
            </div>
            <div className="d-grid gap-2">
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Home</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Pricing</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Download</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>About</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Service</a>
            </div>
          </div>

          <div className="d-grid gap-3">
            <div>
              <h5>Support</h5>
            </div>
            <div className="d-grid gap-2">
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>FAQ</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>How it</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Features</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Contact</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Reporting</a>
            </div>
          </div>

          <div className="d-flex flex-column gap-3">
            <div>
              <h5>Contact us</h5>
            </div>
            <div className="d-grid gap-2">
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>+880 12345678</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>youremail@gmail.com</a>
              <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Rangpur City</a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between p-5">
          <div>
            <span>Copyright 2022</span>
          </div>
          <div>
            <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Terms of use</a>
            <span className="px-4">|</span>
            <a href="#" className="text-secondary" style={{textDecoration: "none"}}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
