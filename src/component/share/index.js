import { Button, Col, Row } from "antd";
import "./index.css";
import img from "../../assets/img/close-up-food-lover-taking-pictures-meal 1.png";

const Share = () => {
  return (
    <>
      <Row className="share_main">
        <Col xs={24} sm={24} md={10} xxl={10} xl={10} lg={10} className="sh_img">
          <img src={img} alt="" className="share_img" height={300} />
        </Col>
        <Col xs={24} sm={24} md={14} xxl={14} xl={14} lg={14} className="sh_off">
          <h1>
            Share Your <span className="logo_col">Recipes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
          </p>
          <Button className="s_btn">Create New Recipe</Button>

        </Col>
      </Row>
    </>
  );
};
export default Share;
