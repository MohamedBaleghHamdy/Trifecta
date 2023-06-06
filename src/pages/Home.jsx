import About from "../Home comp/About";
import App from "../Home comp/App";
import Doctor from "../Home comp/Doctor";
import Footer from "../Home comp/Footer";
import Form from "../Home comp/Form";

import Hero from "../Home comp/Hero";

const Home = () => {
  return (
    <>
    <Hero />
      <App />
      <Doctor />
      <About />
      <Form />
      <Footer/>
    </>
  ) 
};

export default Home;
