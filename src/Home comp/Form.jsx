import { BsFillSendFill } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Formg() {
  return (
    <Form className="form" id="Contact us">
      <h3>Send Us a Message </h3>
      <Row className="mb-5">
        <Form.Group as={Col}>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="email" placeholder="Mohamed" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder="Email" />
        </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="email" placeholder="Phone" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Company</Form.Label>
          <Form.Control type="password" placeholder="Company" />
        </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="email" placeholder="Phone" />
        </Form.Group>

        <BsFillSendFill className="mt-5 icon"  />
      </Row>
    </Form>
  );
}

export default Formg;
