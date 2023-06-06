import logo from "../assets/Trifecta copy 1.png";
import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="cardd ">
        <div className="container  ">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-5 mb-5 ">
              <div className="d-flex align-items-center ">
                <img  src={logo} style={{ height: 50 }} alt="" />
                <h5>TRIFECTA</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h5>CONTACT INFO</h5>
              <h6>177-GG, Street 5, DHA Lahore.</h6>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h5>SUPPORT</h5>
              <h6>Lorem Ipsum</h6>
              <h6>Phone:01068662949</h6>
              <h6>Email:Moahmed@gamil.com</h6>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mb-5">
              <h4>NewsLatter</h4>
              <p>Subscribe our NewsLatter</p>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    background: "transparent",
                    border: "1px solid #888",
                    padding: 4,
                  }}
                />
                <BsFillSendFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
