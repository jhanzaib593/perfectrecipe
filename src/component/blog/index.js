import { Col, Row } from "antd";
import "./index.css";
import bimg_1 from "../../assets/img/Unlocking the Benefits of Intermittent Fasting for .png";
import bimg_2 from "../../assets/img/The Impact of Sugar Consumption on Your Health.png";

const blogs = [
  {
    name: "Unlocking the Benefits of Intermittent Fasting for",
    itemimg: bimg_1,
    text: "Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health Weight   ...",
  },
  {
    name: "The Impact of Sugar Consumption on Your Health",
    itemimg: bimg_2,
    text: "Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers ....",
  },
];
const Blog = () => {
  return (
    <>
      <Row className="main_row_c">
        <Col xs={24} sm={24} md={10} xxl={10} xl={10} lg={10} className="">
          <h1>Blog</h1>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={14}
          xxl={14}
          xl={14}
          lg={14}
          className="trend_veiw"
        >
          <p>View more</p>
        </Col>
      </Row>
      
      <Row className="recipes_main_row">
        {blogs.map((t, ind) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={11}
              xxl={11}
              xl={11}
              lg={11}
              className="recipes_main"
              key={ind}
            >
              <img
                className="recipes_dish"
                src={t.itemimg}
                alt=""
                
              />
              <div className="blog_con">
                <h3>{t.name}</h3>
                <p>{t.text}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Blog;
