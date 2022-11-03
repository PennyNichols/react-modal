import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MyVerticallyCenteredModal from "./components/Modal";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setListValue] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListValue([...list, inputValue]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <Form
        style={{ width: "15rem" }}
        className="mx-auto mt-5"
        onSubmit={handleSubmit}
      >
        <Form.Control
          className="my-3"
          type="text"
          placeholder="enter any text"
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      <Container className="mt-4">
        {list.map((item, index) => (
          <>
            <Row
              className="my-3"
              key={index}
              onClick={() => setModalShow(true)}
            >
              <Col>{item.length > 5 ? item.slice(0, 5) + "..." : item}</Col>
              <MyVerticallyCenteredModal
                item={item}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Row>
          </>
        ))}
      </Container>
    </div>
  );
}
