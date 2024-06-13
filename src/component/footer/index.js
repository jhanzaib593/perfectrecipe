import { Button, Col, Input, Row } from "antd";
import "./index.css";
import logo from "../../assets/img/restaurant_menu_FILL0_wght400_GRAD0_opsz24 1.svg";
import { NavLink } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";


const Footer = () => {
  return (
    <>
      <Row className="footer_main">
        <Col xs={24} sm={24} md={7} xxl={7} xl={7} lg={7}>
          <div className="logo">
            <img src={logo} alt="" width={33} height={33} />
            Perfect<span className="logo_col">Recipe</span>
          </div>
          <p className="footer_text">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout.
          </p>
        </Col>
        <Col xs={24} sm={24} md={9} xxl={9} xl={9} lg={9}>
          <Row>
            <Col span={8}>
              <p className="nav_text">Quick links</p>
              <div className="footer_nav">
                <NavLink className="footer_nav_link">Home</NavLink>
                <NavLink className="footer_nav_link">Recipe</NavLink>
                <NavLink className="footer_nav_link">Blog</NavLink>
              </div>
            </Col>
            <Col span={8}>
              <p className="nav_text">Quick links</p>
              <div className="footer_nav">
                <NavLink className="footer_nav_link">Share Recipe</NavLink>
                <NavLink className="footer_nav_link">About Us</NavLink>
                <NavLink className="footer_nav_link">Contact</NavLink>
              </div>
            </Col>
            <Col span={8}>
              <p className="nav_text">Legal</p>
              <div className="footer_nav">
                <NavLink className="footer_nav_link">Terms Of Use</NavLink>
                <NavLink className="footer_nav_link">Privacy & Cookies</NavLink>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={7} xxl={7} xl={7} lg={7} className="footer_new">
          <h6>Newsletter</h6>
          <p>Subscribe to our newsletter to get more free tip </p>
          <Input placeholder="Enter Your Email" prefix={<MailOutlined />}/>
          <Button className="footer_btn">Subscribe</Button>

        </Col>
      </Row>
    </>
  );
};
export default Footer;
