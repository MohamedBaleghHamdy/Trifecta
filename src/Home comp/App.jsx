import img from "../assets/Request an Ambulance 1.png";
import { FiDownload } from "react-icons/fi";
import { TbEmergencyBed } from "react-icons/tb";
import { TfiHelp } from "react-icons/tfi";
import { BiDonateBlood } from "react-icons/bi";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mt-5 top">
          <img src={img} alt="" />
        </div>
        <div className="col-md-6 mt-5 top">
          <h2>
            We are always here <br /> to serve you{" "}
          </h2>
          <div className="d-flex align-items-center  ">
            <div>
              <FiDownload id="icon" />
            </div>
            <div>
              <h5 className="mt-4">Download and Register</h5>
              <p>
                First you can download app in play store or app store after that
                you can create an account .
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center  ">
            <div>
              <TbEmergencyBed id="icon" />
            </div>
            <div>
              <h5 className="mt-4">What’s your Emergency</h5>
              <p>multiple services we offer to cover all your medical needs.</p>
            </div>
          </div>
          <div className="d-flex align-items-center  ">
            <div>
              <TfiHelp id="icon" />
            </div>
            <div>
              <h5 className="mt-4">Ask for Help</h5>
              <p>
                Pick a service and we will come to you where and when ever you
                are.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center  ">
            <div>
              <BiDonateBlood id="icon" />
            </div>
            <div>
              <h5 className="mt-4">Donate or get a donation</h5>
              <p>
                you missing some blood ?! just ask there is someone out there
                will help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
