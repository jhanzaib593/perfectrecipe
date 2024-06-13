import { Col, Row } from "antd";
import "./index.css";
import user from "../../assets/img/User icon.svg";
import dish1 from "../../assets/img/36700_erin_m_e1384569-a93f-4fde-a6ce-3e21b69b04fa 1.png";
import dish2 from "../../assets/img/Frame 125444.png";
import dish3 from "../../assets/img/Ham, Egg, and Spinach Roll-Ups.png";
import dish4 from "../../assets/img/Chicken Ranch Wrap.png";
import dish5 from "../../assets/img/Tuna Mex Tuna Salad.png";
import dish6 from "../../assets/img/Strawberry and Cherry pancake.png";



import { Flex, Rate } from "antd";
import { FireOutlined } from "@ant-design/icons";

const dishs = [
  {
    name: "onion rings",
    itemimg: dish1,
    username: "Alex Martin",
    userimg: user,
    col: 322,
  },
  {
    name: "Toast with Tomato, Onion, & Hummus",
    itemimg: dish2,
    username: "Alex Martin",
    userimg: user,
    col: 199,
  },
  {
    name: "Ham, Egg, and Spinach Roll-Ups",
    itemimg: dish3,
    username: "Alex Martin",
    userimg: user,
    col: 174,
  },
  {
    name: "Chicken Ranch Wrap",
    itemimg: dish4,
    username: "Alex Martin",
    userimg: user,
    col: 188,
  },
  {
    name: "Tuna Mex Tuna Salad",
    itemimg: dish5,
    username: "Alex Martin",
    userimg: user,
    col: 194,
  },
  {
    name: "Strawberry and Cherry pancake",
    itemimg: dish6,
    username: "Alex Martin",
    userimg: user,
    col: 251,
  },
];

const Trending = () => {
  return (
    <>
      <Row className="main_row_c">
        <Col xs={24} sm={24} md={10} xxl={10} xl={10} lg={10} className="">
          <h1>Trending Recipe</h1>
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
        {dishs.map((t, ind) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={7}
              xxl={7}
              xl={7}
              lg={7}
              className="recipes_main"
              key={ind}
            >
              <img className="recipes_dish" src={t.itemimg} alt=""/>
              <div className="recipes_con">
                <Flex gap="middle" vertical>
                  <Flex gap="middle">
                    <Rate defaultValue={4} />
                  </Flex>
                </Flex>
                <p>{t.name}</p>
                <div className="res_main">
                  <div className="res_one">
                    <img src={t.userimg} alt="" />
                    {t.username}
                  </div>
                  <div className="res_sec">
                    <FireOutlined className="res_sec_icon" /> {t.col} cals
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
       
      </Row>
    </>
  );
};
export default Trending;
