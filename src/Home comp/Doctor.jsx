import person from "../assets/pexels-antoni-shkraba-5215024.png";
import person1 from "../assets/pexels-los-muertos-crew-8460159.png";
import person2 from "../assets//pexels-antoni-shkraba-6749773 1.png";

const Doctor = () => {
  return (
    <>
      <div className="text-center mt-5" id="doctor">
        <h3>Meet our Expert Doctors</h3>
        <p className="w-75 m-auto">
          General and Minimally Invasive Surgery, Cardiology and Cardiac
          Surgery,
          <br /> Orthopaedics, Nephrology, Obstetrics and Gynaecology,
          Pediatrics and others. <br /> Now you can get super specialty
          consultations with the same comfort as your <br /> family doctor at
          Asian Clinic.
        </p>
      </div>
      
      <div className="d-flex container gap-5 justify-content-evenly mt-5  imgg">
        <img className="imgg" src={person2} alt=""  />
        <img className="imgg" src={person1} alt="" />
        <img className="imgg" src={person} alt="" />
      </div>
    </>
  );
};

export default Doctor;
