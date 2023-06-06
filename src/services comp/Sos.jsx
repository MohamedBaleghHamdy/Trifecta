import img from "../assets/pexels-jennifer-latham-9658885.png";
import { GiCheckMark } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
const Sos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 center mt-5">
          <h2 className="mb-4">
            {" "}
            <AiFillCar />
            SOS
          </h2>
          <p>As priority, unlike other services.</p>
          <div className="d-flex  mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                In cases of severe emergencies, some times all one needs is a
                straight- forward way to get help .
              </p>
            </div>
          </div>
          <div className="d-flex mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>with our SOS! feature, help is one click away.</p>
            </div>
          </div>
          <div className="d-flex mt-3   ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
              How ever, it can be assigned by the user to contact a specific number of a relative, family member.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 center mt-5 mb-5">
          <img className="w-50 " src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sos;
