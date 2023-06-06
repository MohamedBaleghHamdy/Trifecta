import about from "../assets/3627634 1.png";

const About = () => {
  return (
    <div className="container mt-5" id="About us">
      <div className="row">
        <div className="col-md-6 mt-5 top">
          <h2>ABOUT US</h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry <br />. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s <br />, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into <br />{" "}
            electronic typesetting, remaining essentially unchanged.{" "}
          </p>
          <button
            style={{
              background: "#680011",
              marginTop: "20px",
            }}
          >
            Learn More
          </button>
        </div>
        <div className="col-md-6 center">
          <img src={about} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
