import img from "../assets/pexels-mikhail-nilov-8943251 1.png";
import { GiCheckMark } from "react-icons/gi";
import { BiFirstAid } from "react-icons/bi";
const Emergency = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 center mt-5">
          <h2 className="mb-4"> <BiFirstAid/> Emergency and Sharing</h2>
          <p>As priority, unlike other services.</p>
          <div className="d-flex  mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                Unlike other services, Trifecta is for emergencies <br /> and
                only emergencies.
              </p>
            </div>
          </div>
          <div className="d-flex mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>is volunteer-based, so its 100% free.</p>
            </div>
          </div>
          <div className="d-flex mt-3   ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                Helps relieve the pressure off the governmental ambulance <br />
                sector, and can be even faster occasionally.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 center mt-5">
          <img className="w-50 " src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
