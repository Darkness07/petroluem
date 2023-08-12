import "../../styles/news.css";
import { useEffect, useState } from "react";
import "uikit/dist/css/uikit.min.css"; // Import the UIKit CSS file
import logo1 from "../../assets/icons/icon1.svg";
import logo2 from "../../assets/icons/icon2.svg";
import logo3 from "../../assets/icons/icon3.svg";
import logo4 from "../../assets/icons/icon4.svg";
import logo5 from "../../assets/icons/icon5.svg";
import arrowIcon from "../../assets/icons/arrowRightIcon.svg";
// import logo8 from "../../assets/images/Vector (7).png";
import { Link } from "react-router-dom";
import { textFunc } from "../../redux/reducers/app";
import { useSelector } from "react-redux";

function News() {
const lang = useSelector(s => s.app.lang);
  const [news] = useState([
    {
      icon1: logo1,

      title: {
        ru: "Лаборатория",
        es: "Лаборатория",
        en: "Laboratory",
      },
      text: {
        ru: 'Узнайте о методах тестирования и об испытательных технологиях',
        es: "Тестирлөө ыкмалары жана тест технологиялары жөнүндө билип алыңыз",
        en: "Learn about testing methods and test technologies",
      },
    },
    {
      icon1: logo2,

      title: {
        ru: "Контакты",
        es: "Байланыштар",
        en: "Contacts",
      },
      text: {
        ru: "Наши социальные сети и контакты",
        es: "Биздин социалдык тармактар ​​жана байланыштар",
        en: "Our social networks and contacts",
      },
    },
    {
      icon1: logo3,
      title: {
        ru: "Центр управления производством",
        es: "Өндүрүштү башкаруу борбору",
        en: "Production control center",
      },
      text: {
        ru: "Узнайте о управлении и производстом",
        es: "Башкаруу жана өндүрүш жөнүндө билиңиз",
        en: "Learn about management and production",
      },
    },
    {
      // icon2: logo8,
      icon1: logo4,
      title: {
        ru: "Банковские реквизиты",
        es: "Банк реквизиттери",
        en: "Bank requisites",
      },
      text: {
        ru: "Узнайте о банковских реквезитах",
        es: "Банк реквизиттери жөнүндө билип алыңыз",
        en: "Learn about bank requisites",
      },
    },
    {
      // icon2: logo8,
      icon1: logo5,
      title: {
        ru: "Вакансии",
        es: "Жумуштар",
        en: "Jobs",
      },
      text: {
        ru: "Узнайте о последних вакансиях",
        es: "Акыркы бош орундар жөнүндө билип алыңыз",
        en: "Find out about the latest vacancies",
      },
    },
  ]);

  return (
    <>
      <section className="cont-cards1">
        <div className="container">
          <div className="row">
            {news.map((item, i) => {
              return (
                <div key={i} className="col-xl-4 col-md-6">
                  <Link to={i == 2 ? '/prodaction_page': "/lab"}>
                    <div className="card_v">
                      <div className="titel_container">
                        <img src={item.icon1} alt="" />

                        <h3 className="card_v_title">{textFunc(item.title, lang)}</h3>
                      </div>

                      <div className="card_v_link_box">
                        <p className="card_v_link">{textFunc(item.text, lang)}</p>
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
