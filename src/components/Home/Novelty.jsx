import Aos from "aos";
import React, { useEffect, useRef } from "react";
import "uikit/dist/css/uikit.min.css";
import "../Home/novelty.css";
import imges from "../../assets/images/DSC_0352_1 2 (1).png";
import { NavLink } from "react-router-dom";

function Novelty() {
  function onscrrol(e) {
    console.log(); // Value of scroll Y in px
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="scroll-bar">
        <h1 className="news_item_title">Новости</h1>

        <div className="card_box_scroll">
          <div className="cards_box">
            <div class="news_card">
              <img
                src={imges}
                className="card-images"
                width="240"
                height="300"
                alt=""
              />

              <div class="news_card_body">
                <h3 class="news_card_title">
                  Договоренность о создании совместного предприятия
                </h3>
                <p className="news_card_text">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
                <div className="card_more_box">
                  <p className="news_more">Подробнее</p>
                  <p className="news_more">1995.12.12</p>
                </div>
              </div>
            </div>
            <div class="news_card">
              <img
                src={imges}
                className="card-images"
                width="240"
                height="300"
                alt=""
              />

              <div class="news_card_body">
                <h3 class="news_card_title">
                  Договоренность о создании совместного предприятия
                </h3>
                <p className="news_card_text">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
                <div className="card_more_box">
                  <p className="news_more">Подробнее</p>

                  <p className="news_more">1995.12.12</p>
                </div>
              </div>
            </div>
            <div class="news_card">
              <img
                src={imges}
                className="card-images"
                width="240"
                height="300"
                alt=""
              />

              <div class="news_card_body">
                <h3 class="news_card_title">
                  Договоренность о создании совместного предприятия
                </h3>
                <p className="news_card_text">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
                <div className="card_more_box">
                  <p className="news_more">Подробнее</p>

                  <p className="news_more">1995.12.12</p>
                </div>
              </div>
            </div>{" "}
            <div class="news_card">
              <img
                src={imges}
                className="card-images"
                width="240"
                height="300"
                alt=""
              />

              <div class="news_card_body">
                <h3 class="news_card_title">
                  Договоренность о создании совместного предприятия
                </h3>
                <p className="news_card_text">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
                <div className="card_more_box">
                  <p className="news_more">Подробнее</p>

                  <p className="news_more">1995.12.12</p>
                </div>
              </div>
            </div>{" "}
            <div class="news_card">
              <img
                src={imges}
                className="card-images"
                width="240"
                height="300"
                alt=""
              />

              <div class="news_card_body">
                <h3 class="news_card_title">
                  Договоренность о создании совместного предприятия
                </h3>
                <p className="news_card_text">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
                <div className="card_more_box">
                  <p className="news_more">Подробнее</p>

                  <p className="news_more">1995.12.12</p>
                </div>
              </div>
            </div>
          </div>

        </div>
          <p className='news_scroll_text'>Листайте вправо</p>
      </div>
    </>
  );
}

export default Novelty;
