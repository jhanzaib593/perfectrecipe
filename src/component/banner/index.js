import { Button, Col, Row } from "antd";
import "./index.css";
import img from "../../assets/img/Vector.png";
import img1 from "../../assets/img/Vector.svg";
import { Flex, Rate } from "antd";

const Banner = () => {
  return (
    <>
      <Row className="b_main">
        <Col xs={24} sm={24} md={12} xxl={11} xl={11} lg={11} className="b_t">
          <h1>
            Your Daily Dish A <span className="logo_col">Food</span> Journey
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
          </p>
          <Button className="h_btn2">Sign up</Button>
          <p>
            Do you have account?{" "}
            <a href="#login" className="b_an">
              Log in
            </a>
          </p>
        </Col>
        <Col xs={24} sm={24} md={11} xxl={11} xl={11} lg={11} className="b_main2">
          <img src={img} alt="" />
          <div className="bannar_feedback">
            <img className="cus_feed" src={img1} alt="" />
            <div className="b_f_t">
              <h6>Sara Johnson</h6>
              <Flex className="flex_ba" gap="middle" vertical>
                <Flex gap="middle">
                  <Rate defaultValue={3} />
                </Flex>
              </Flex>
            </div>
              <p className="b-p">WOW, this recipe is a flavor explosion in my mouth! very delicious</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Banner;
