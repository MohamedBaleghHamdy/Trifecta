import doctor from "../assets/pexels-cottonbro-studio-5722157-removebg-preview 1.png";

import { GiCheckMark } from "react-icons/gi";


const Hero = () => {
  return (
    <>
      <section className="back " style={{ position: "relative" }}>
        <section className="container">
          <div className="row">
            <div className="col-md-6  top">
              <h1>
                We are always here <br /> to serve you{" "}
              </h1>
              <p style={{color:"white"}}>
                overall, good health can help you avoid many of <br /> the costs
                associated with poor health, and can <br /> also help you earn
                more money through <br /> increased productivity and better job{" "}
                <br /> opportunities
              </p>
              <div className="d-flex gap-4 d-con">
                <button>Call us</button>
                <button>More</button>
              </div>
            </div>
            <div className="col-md-6 img">
              <img
                style={{
                  width: "70%",
                  height: "70%",
                  marginTop: "44%",
                }}
                src={doctor}
                alt=""
              />
            </div>
            <div className="table">
            <div className="d-flex gap-5 my-4 justify-content-around">
              <p>
                {" "}
                <GiCheckMark  id="icon" />
                Multi Specialty Hospital{" "}
              </p>
              <p>
                {" "}
                <GiCheckMark id="icon" />
                24 Hours medical service
              </p>
            </div>
            <div className="d-flex gap-5 my-4 justify-content-around">
              <p>
                {" "}
                <GiCheckMark id="icon" />
                Many years of experience
              </p>
              <p>
                {" "}
                <GiCheckMark id="icon" />
                Professional experts doctor
              </p>
              </div>
            </div>
          </div>
        </section>
      </section>


    </>
  );
};

export default Hero;
