import React, { useEffect, useState } from "react";
import "uikit/dist/css/uikit.min.css";
import "../../../styles/onePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit"; // Import the UIKit JavaScript file
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg1 from "./img/hero_img1.png";
import heroImg2 from "./img/hero_img2.png";
import heroImg3 from "./img/hero_img3.png";
import circleIcon from "./img/Ellipse 1.png";
import lineIcon from "./img/Rectangle 20.png";
import playIcon from "./img/play_icon.svg";
import moreLinkIocn from "./img/more-link-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { getPricing, textFunc } from "../../../redux/reducers/app";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OnePage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [videoActiv, setVideActiv] = useState(false);
  const dispatch = useDispatch();
  const pricing = useSelector((s) => s.app.pricing);
  const lang = useSelector((s) => s.app.lang);
  const text = useSelector((s) => s.text);

  function chegeimges() {
    console.log("barev");
    setVideActiv(true);
  }
  useEffect(() => {
    UIkit.slider(".uk-slider");
    AOS.init({ duration: 1000 });
    dispatch(getPricing());
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-mobile">
          <img src={heroImg1} alt="" />
          <div className="hero_card_top">
            <h3 className="hero_card_top_title">Видео</h3>

            <div className="hero_card_top_icons">
              <img src={lineIcon} alt="" />
              <img src={circleIcon} alt="" />
              <img src={circleIcon} alt="" />
            </div>
          </div>
          <div className="hero_card_bottom">
            <div className="hero_card_bottom_row">
              <p className="hero_card_bottom_text">
                Кыргыз петролуем панорамный вид
              </p>
              <button className="hero_card_bottom-btn">
                <img src={playIcon} alt="" />
              </button>
            </div>
            <p className="hero_card_bottom_time">00:46</p>
          </div>
        </div>

        <div className="hero-desktop">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
              <Slider {...settings}>
                <div>
                <div className="hero_card">
                    <img src={heroImg1} alt="" />
                    <div className="hero_card_top">
                      <h3 className="hero_card_top_title">Видео</h3>

                      <div className="hero_card_top_icons">
                        <img src={lineIcon} alt="" />
                        <img src={circleIcon} alt="" />
                        <img src={circleIcon} alt="" />
                      </div>
                    </div>
                    <div className="hero_card_bottom">
                      <div className="hero_card_bottom_row">
                        <p className="hero_card_bottom_text">
                          Кыргыз петролуем панорамный вид
                        </p>
                        <button className="hero_card_bottom-btn">
                          <img src={playIcon} alt="" />
                        </button>
                      </div>
                      <p className="hero_card_bottom_time">00:46</p>
                    </div>
                  </div>
                </div>


<div>
<div className="hero_card">
                    <img src={heroImg1} alt="" />
                    <div className="hero_card_top">
                      <h3 className="hero_card_top_title">Видео</h3>

                      <div className="hero_card_top_icons">
                        <img src={lineIcon} alt="" />
                        <img src={circleIcon} alt="" />
                        <img src={circleIcon} alt="" />
                      </div>
                    </div>
                    <div className="hero_card_bottom">
                      <div className="hero_card_bottom_row">
                        <p className="hero_card_bottom_text">
                          Кыргыз петролуем панорамный вид
                        </p>
                        <button className="hero_card_bottom-btn">
                          <img src={playIcon} alt="" />
                        </button>
                      </div>
                      <p className="hero_card_bottom_time">00:46</p>
                    </div>
                  </div>
</div>

          </Slider>

              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hero_card">
                  <img src={heroImg2} alt="" />
                  <div className="hero_card_top">
                    <h3 className="hero_card_top_title">Новости</h3>
                  </div>
                  <div className="hero_card_bottom">
                    <p className="hero_card_bottom_text">
                      Кыргыз Петролеум Компани” ӨКМ кызматкерлерине материалдык
                      жардам көрсөттү
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="hero_card">
                  <img src={heroImg3} alt="" />
                  <div className="hero_card_top">
                    <h3 className="hero_card_top_title">Событие</h3>
                  </div>
                  <div className="hero_card_bottom">
                    <p className="hero_card_bottom_text">
                      В КПК прошли противопожарные учения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </div>



    </>
  );
}

export default OnePage;
