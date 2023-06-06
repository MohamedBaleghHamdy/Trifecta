import img from "../assets/pexels-andrea-piacquadio-3760810 (1).png";
import { GiCheckMark } from "react-icons/gi";
import { CiStethoscope } from "react-icons/ci";
const Booking = () => {
  return (
    <>
      <div className="bg mt-5 center">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 center mt-5">
              <img className="w-50 mb-3 " src={img} alt="" />
            </div>
            <div className="col-md-6 center mt-5">
              <h2 className="mb-4">
                {" "}
                <CiStethoscope /> Booking Appointments
              </h2>
              <p>As priority, unlike other services.</p>
              <div className="d-flex  mt-3  ">
                <div>
                  <GiCheckMark id="icon" />
                </div>
                <div>
                  <p>
                  Trifecta provides the user with the ability to book appointments with either doctors or members of the medical staff.
                  </p>
                </div>
              </div>
              <div className="d-flex mt-3  ">
                <div>
                  <GiCheckMark id="icon" />
                </div>
                <div>
                  <p>Appointments can be a one-time thing or a recurring service in case of the elderly or people with special needs, for example.</p>
                </div>
              </div>
              <div className="d-flex mt-3   ">
                <div>
                  <GiCheckMark id="icon" />
                </div>
                <div>
                  <p>
                  This makes the life of people who needs medical assistance on a regular basis so much easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
