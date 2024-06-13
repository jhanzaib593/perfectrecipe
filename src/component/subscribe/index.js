import { Button, Col, Input, Row } from "antd";
import "./index.css";

const Subscribe = () => {
  return (
    <>
      <Row className="sub_main">
        <Col
          xs={24}
          sm={24}
          md={24}
          xxl={24}
          xl={24}
          lg={24}
          className="sub_text"
        >
          <h1>Let’s Stay In Touch!</h1>
          <p>
            Join our newsletter, so that we reach out to you with our news and
            offers.
          </p>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          xxl={24}
          xl={24}
          lg={24}
          className="sub_data"
        >
          <Row>
            <Col xs={24} sm={24} md={24} xxl={12} xl={12} lg={12}>
              <Input placeholder="Enter Your Email " />
            </Col>
            <Col xs={24} sm={24} md={24} xxl={12} xl={12} lg={12}>
              <Button className="h_btn2">Sign up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Subscribe;
