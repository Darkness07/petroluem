import React from "react";
import "../Story/story.css";
import storyimages from "../../../assets/images/DSC_0352_1 1 (1).png";
import moreIcon from "../../../assets/images/Vector (8).png";
import { Link, NavLink } from "react-router-dom";
function Story() {
  return (
    <div>
      <h1 className="story_title">История</h1>
      <div className="story_container">
        <div className="data-text_contaner">
          <div className="data-box">
            <div className="line">
              <p className="data_p">1995</p>
              <div className="line_l"></div>
              <p className="data_p">6.10.1996</p>
              <div className="line_l"></div>
              <p className="data_p">1998-2001</p>
            </div>
            <div className="text_l">
              <div className="text_box">
                <h2 className="item_title">
                  Договоренность о создании совместного предприятия
                </h2>
                <p className="p-text-is">
                  Между открытым акционерным обществом «Кыргызнефтегаз» и
                  акционерным обществом с ограниченной ответственностью
                  «ПетроКыргызстан» (Джерси) была достигнута договоренность о
                  создании совместного предприятия ЗАО «Кыргыз Петролеум
                  Компани».
                </p>
              </div>
              <div className="text_box">
                <h2 className="item_title">Торжественное открытие</h2>
                <p className="p-text-is">
                  Строительство НПЗ в городе Жалал-Абад началось в январе 1996
                  года, и было завершено в установленные сроки - в сентябре 1996
                  года. Нефтеперерабатывающий завод ЗАО «КПК» был торжественно
                  открыт 6 октября 1996 года.
                </p>
              </div>
              <div className="text_box">
                <h2 className="item_title">Технические усовершенствования</h2>
                <p className="p-text-is">
                  Новые технические усовершенствования на НПЗ были проведены в
                  1998-2001 годах для увеличения октанового числа производимого
                  бензина.
                </p>
              </div>
            </div>
          </div>
          <div className="more">
            <NavLink className="more_text" to="/more">
              Узнать подробнее
              <img src={moreIcon} className="moreIcon" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="story_images_container">
          <img src={storyimages} alt="" />
        </div>
      </div>
      <div className="stor-container">
        {/* mobile */}
        <h1>История</h1>
        <img src={storyimages} className="storyimages" alt="" />
        <div className="text_cont-i">
          <p>1995</p>
          <h4> Договоренность о создании совместного предприятия</h4>
          <p className="p-text-is">
            {" "}
            Между открытым акционерным обществом «Кыргызнефтегаз» и акционерным
            обществом с ограниченной ответственностью «ПетроКыргызстан» (Джерси)
            была достигнута договоренность о создании совместного предприятия
            ЗАО «Кыргыз Петролеум Компани».
          </p>
          <div className="line_l"></div>
        </div>
        <div className="text_cont-i">
          <p>6.10.1996</p>
          <h4> Торжественное открытие</h4>
          <p className="p-text-is">
            {" "}
            Строительство НПЗ в городе Жалал-Абад началось в январе 1996 года, и
            было завершено в установленные сроки - в сентябре 1996 года.
            Нефтеперерабатывающий завод ЗАО «КПК» был торжественно открыт 6
            октября 1996 года. lorem*8
          </p>
          <div className="line_l"></div>
        </div>
        <div className="text_cont-i">
          <p>1998-2001</p>
          <h4> Технические усовершенствования</h4>
          <p className="p-text-is">
            {" "}
            Новые технические усовершенствования на НПЗ были проведены в
            1998-2001 годах для увеличения октанового числа производимого
            бензина.
          </p>
        </div>
        <NavLink className="more_text" to="/more">
          Узнать подробнее
          <img src={moreIcon} className="moreIcon" alt="" />
        </NavLink>
        <div className="lin_x"></div>
      </div>
    </div>
  );
}

export default Story;
