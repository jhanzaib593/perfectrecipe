import { Col, Row } from "antd";
import "./index.css";
import user from "../../assets/img/User icon.svg";
import dish1 from "../../assets/img/Green Goddess Wrap Is a Light & Simple.png";
import dish2 from "../../assets/img/Strawberry and Walnut Spinach Sal.png";
import dish3 from "../../assets/img/Copycat California Pizza Kitchen BBQ Chicken.png";
import dish4 from "../../assets/img/Cherry-Berry Smoothie Bowl.png";
import dish5 from "../../assets/img/Green smoothie.png";
import dish6 from "../../assets/img/Grilled Red Snapper.png";



import { Flex, Rate } from "antd";
import { FireOutlined } from "@ant-design/icons";

const dishs = [
  {
    name: "Green Goddess Wrap Is a Light & Simple",
    itemimg: dish1,
    username: "Alex Martin",
    userimg: user,
    col: 188,
  },
  {
    name: "Strawberry and Walnut Spinach Salad",
    itemimg: dish2,
    username: "Alex Martin",
    userimg: user,
    col: 298,
  },
  {
    name: "Copycat California Pizza Kitchen BBQ Chicken",
    itemimg: dish3,
    username: "Alex Martin",
    userimg: user,
    col: 251,
  },
  {
    name: "Cherry-Berry Smoothie Bowl",
    itemimg: dish4,
    username: "Alex Martin",
    userimg: user,
    col: 168,
  },
  {
    name: "Green smoothie",
    itemimg: dish5,
    username: "Alex Martin",
    userimg: user,
    col: 78,
  },
  {
    name: "Grilled Red Snapper",
    itemimg: dish6,
    username: "Alex Martin",
    userimg: user,
    col: 290,
  },
];

const Explore  = () => {
  return (
    <>
      <Row className="main_row_c">
        <Col xs={24} sm={24} md={10} xxl={10} xl={10} lg={10} className="">
          <h1>Explore  Recipe</h1>
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
      <Row className="recipes_main_row recipes_main_row21">
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
export default Explore ;
