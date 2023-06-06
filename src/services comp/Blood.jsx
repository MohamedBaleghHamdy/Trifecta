import img from "../assets/pexels-kirill-dratsevich-12227661 1.png";
import { GiCheckMark } from "react-icons/gi";
import { BiDonateBlood } from "react-icons/bi";
const Blood = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 center mt-5">
          <h2 className="mb-4">
            {" "}
            <BiDonateBlood /> Emergency and Sharing
          </h2>
          <p>As priority, unlike other services.</p>
          <div className="d-flex  mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                The blood donation status quo in egypt is messy to say the
                least.
              </p>
            </div>
          </div>
          <div className="d-flex mt-3  ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                We provide a portal for blood donation requests and blood
                donators, alike.
              </p>
            </div>
          </div>
          <div className="d-flex mt-3   ">
            <div>
              <GiCheckMark id="icon" />
            </div>
            <div>
              <p>
                By doing this, we aim to improve the blood donation situation as
                it can prove life-saving.
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

export default Blood;
