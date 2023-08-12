import Aos from "aos";
import React, { useEffect, useRef } from "react";
import "uikit/dist/css/uikit.min.css";
import "../Home/novelty.css";
import imges from "../../assets/images/DSC_0352_1 2 (1).png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { textFunc, getNews } from "../../redux/reducers/app";
function Novelty() {
  const news = useSelector((s) => s.app.news);
  const lang = useSelector((s) => s.app.lang);
  const dispatch = useDispatch();
  const text = useSelector( s => s.text);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    dispatch(getNews());
  }, []);
  return (
    <div className="container">
      <div className="scroll-bar">
        <h1 className="news_item_title">{textFunc({ru:'Новости', es:'Жаңылыктар', en: 'News'}, lang)}</h1>

        <div className="card_box_scroll desktop-news">
          <div className="cards_box">
            {news.map((item) => {
              return (
                <div key={item.id} className="news_card">
                  <img
                    src={item.main_image}
                    className="card-images"
                    width="240"
                    height="300"
                    alt=""
                  />

                  <div className="news_card_body">
                    <h3 className="news_card_title">
                      {textFunc(item.translations, lang).title}
                    </h3>
                    <p className="news_card_text">
                      {textFunc(item.translations, lang).description}
                    </p>
                    <div className="card_more_box">
                      <Link to={`/news/news_single/${item.id}`} className="news_more">{textFunc({ru:'Подробнее', es: 'Кененирээк', en: 'More'}, lang)}</Link>
                      <p className="news_more">{item.created}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

          <div className="card_box_mobile">
          {news.map((item) => {
              return (
                <div key={item.id} className="news_card">
                  <img
                    src={item.main_image}
                    className="card-images"
                    width="240"
                    height="300"
                    alt=""
                  />

                  <div className="news_card_body">
                    <h3 className="news_card_title">
                      {textFunc(item.translations, lang).title}
                    </h3>
                    <p className="news_card_text">
                      {textFunc(item.translations, lang).description}
                    </p>
                    <div className="card_more_box">
                      <Link to={`/news/news_single/${item.id}`} className="news_more">{textFunc({ru:'Подробнее', es: 'Кененирээк', en: 'More'}, lang)}</Link>
                      <p className="news_more">{item.created}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        {
          news.length > 2
          ?  <p className="news_scroll_text">{textFunc({ru: 'Листайте вправо',
          es: 'Оңго сыдырыңыз', en: 'Scroll right'}, lang)}</p>
          : ''
        }
<Link to='/news' className="news-all-link">{textFunc(text.allNews, lang)} > </Link>
      </div>
    </div>
  );
}

export default Novelty;
