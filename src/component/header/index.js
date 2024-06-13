import { Button, Col, Drawer, Row } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/restaurant_menu_FILL0_wght400_GRAD0_opsz24 1.svg";
import { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Row>
        <Col span={6} className="logo">
          <img src={logo} alt="" width={33} height={33} />
          Perfect<span className="logo_col">Recipe</span>
        </Col>
        <Col span={10}>
          <div className="nav">
            <NavLink className="nav_link">Home</NavLink>
            <NavLink className="nav_link">Recipe</NavLink>
            <NavLink className="nav_link">Add Recipe</NavLink>
            <NavLink className="nav_link">blog</NavLink>
            <NavLink className="nav_link">About us</NavLink>
          </div>
        </Col>
        <Col span={6} className="h_btn">
          <Button className="h_btn1">Log in</Button>
          <Button className="h_btn2">Sign up</Button>
        </Col>
        <Col span={6} className="h_drawer">
          <MenuFoldOutlined onClick={showDrawer} />
          <Drawer onClose={onClose} open={open}>
            <div className="nav_d">
              <NavLink className="nav_link nav_link_d">Home</NavLink>
              <NavLink className="nav_link nav_link_d">Recipe</NavLink>
              <NavLink className="nav_link nav_link_d">Add Recipe</NavLink>
              <NavLink className="nav_link nav_link_d">blog</NavLink>
              <NavLink className="nav_link nav_link_d">About us</NavLink>
            </div>
          </Drawer>
        </Col>
      </Row>
    </>
  );
};
export default Header;
