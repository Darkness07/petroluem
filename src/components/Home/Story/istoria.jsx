import React from "react";
import "../Story/story.css";
import storyimages from "../../../assets/images/DSC_0352_1 1 (1).png";
import moreIcon from "../../../assets/images/Vector (8).png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { textFunc} from "../../../redux/reducers/app";
import bgImg from './history-bg.jpg';
function Story() {
  const text = useSelector((s) => s.text);
  const lang = useSelector((s) => s.app.lang);
  return (
    <section className="story">
      <img src={bgImg} alt="" className="story-bg-img"/>
        <div className="container story-container">
      <h1 className="story_title">{textFunc(text.history, lang)}</h1>
      <div className="story_container">
        <div className="data-text_contaner">
          <div className="data-box">

            <div className="text_l">
              <div className="text_box">
              <p className="data_p">1995</p>
                <h2 className="item_title">
                  {textFunc(text.historyTitle1, lang)}
                </h2>
                <p className="p-text-is">
                {textFunc(text.historyText1, lang)}
                </p>
              </div>
              <div className="text_box">
              <p className="data_p">6.10.1996</p>
                <h2 className="item_title"> {textFunc(text.historyTitle2, lang)}</h2>
                <p className="p-text-is">
                {textFunc(text.historyText2, lang)}
                </p>
              </div>
              <div className="text_box">
              <p className="data_p">1998-2001</p>
                <h2 className="item_title"> {textFunc(text.historyTitle3, lang)}</h2>
                <p className="p-text-is">
                {textFunc(text.historyText3, lang)}
                </p>
              </div>
            </div>
          </div>
          <div className="more">
            <NavLink className="more_text" to="/more">
              {textFunc(text.more, lang)}
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
        <h1>{textFunc(text.history, lang)}</h1>
        <img src={storyimages} className="storyimages" alt="" />
        <div className="text_cont-i">
          <p>1995</p>
          <h4>  {textFunc(text.historyTitle1, lang)}</h4>
          <p className="p-text-is">
            {" "}
            {textFunc(text.historyText1, lang)}
          </p>
          <div className="line_l"></div>
        </div>
        <div className="text_cont-i">
          <p>6.10.1996</p>
          <h4>  {textFunc(text.historyTitle2, lang)}</h4>
          <p className="p-text-is">
            {" "}
            {textFunc(text.historyText2, lang)}
          </p>
          <div className="line_l"></div>
        </div>
        <div className="text_cont-i">
          <p>1998-2001</p>
          <h4>{textFunc(text.historyTitle3, lang)}</h4>
          <p className="p-text-is">
            {" "}
            {textFunc(text.historyText3, lang)}
          </p>
        </div>
        <NavLink className="more_text" to="/more">
        {textFunc(text.more, lang)}
          <img src={moreIcon} className="moreIcon" alt="" />
        </NavLink>
        <div className="lin_x"></div>
      </div>
    </div>
    </section>

  );
}

export default Story;
