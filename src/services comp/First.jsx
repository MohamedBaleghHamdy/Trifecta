import img from "../assets/pexels-pavel-danilyuk-6753264 1.png";
import { GiCheckMark } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
const First = () => {
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
                <BsBook /> First Aid Tutorial
              </h2>
              <p>First aid tutorials can save lives in cases emergencies.</p>
              <div className="d-flex  mt-3  ">
                <div>
                  <GiCheckMark id="icon" />
                </div>
                <div>
                  <p>
                  It’s not much of a help having first aid tutorials scattered around several apps.
                  </p>
                </div>
              </div>
              <div className="d-flex mt-3  ">
                <div>
                  <GiCheckMark id="icon" />
                </div>
                <div>
                  <p>some apps are just cash grabs full of ads and pop-ups.</p>
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

export default First;
