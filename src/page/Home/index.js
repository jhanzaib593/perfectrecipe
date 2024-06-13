import Blog from "../../component/blog";
import Explore from "../../component/explore";
import Share from "../../component/share";
import Subscribe from "../../component/subscribe";
import Trending from "../../component/trending";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <Share />
        <Trending />
        <Blog />
        <Explore />
      </div>
      <div className="home_wapper">
        <div className="container">
          <Subscribe />
        </div>
      </div>
    </>
  );
};
export default Home;
