import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "../header";
import Banner from "../banner";
import Footer from "../footer";

const Layout = () => {
  return (
    <>
      <div className="wappers">
        <div className="container">
          <Header />
          <Banner />

        </div>
      </div>
     
      <Outlet />
      <div className="container">
          <Footer/>
        </div>
    </>
  );
};
export default Layout;
