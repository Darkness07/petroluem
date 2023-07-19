import "../../styles/news.css";
import { useState } from "react";
import "uikit/dist/css/uikit.min.css"; // Import the UIKit CSS file
import logo1 from '../../assets/icons/icon1.svg'
import logo2 from '../../assets/icons/icon2.svg'
import logo3 from '../../assets/icons/icon3.svg'
import logo4 from '../../assets/icons/icon4.svg'
import logo5 from '../../assets/icons/icon5.svg'
import arrowIcon from "../../assets/icons/arrowRightIcon.svg";
// import logo8 from "../../assets/images/Vector (7).png";

function News() {
  const [news] = useState([
    {
      icon1: logo1,

      title: "Лаборатория",
      text: " Узнайте о методах тестирования и об испытательных технологиях",
    },
    {
      icon1: logo2,

      title: "Контакты",
      text: " Узнайте о методах тестирования и об испытательных технологиях",
    },
    {
      icon1: logo3,
      title: "Банковские реквизиты",
      text: " Узнайте о методах тестирования и об испытательных технологиях",
    },
    {
      // icon2: logo8,
      icon1: logo4,
      title: "Вакансии",
      text: " Узнайте о методах тестирования и об испытательных технологиях",
    },
    {
      // icon2: logo8,
      icon1: logo5,
      title: "Вакансии",
      text: " Узнайте о методах тестирования и об испытательных технологиях",
    },
  ]);
  return (
    <>
      <section className="cont-cards1">
        <div className="container_o">
          <div className="cards_n">
            {news.map((item, i) => {
              return (
                <>
                  <div key={i} className="card_v">
                    <div className="titel_container">
                      <img src={item.icon1} alt="" />
             

                      <h3 className="card_v_title">{item.title}</h3>
                    </div>

                    <div className="card_v_link_box">
                      <p className="card_v_link">{item.text}</p>
                      <img src={arrowIcon}alt="arrow" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
