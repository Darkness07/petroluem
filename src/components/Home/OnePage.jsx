import React, { useEffect, useState } from "react";
import "uikit/dist/css/uikit.min.css";
import "../../styles/onePage.css";
import playImg from "../../assets/images/play-circle 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselbtn from "../../assets/images/Rectangle 20.png";
import point1 from "../../assets/images/Ellipse 1.png";
import logo from "../../assets/images/up2 1.png";
import UIkit from "uikit"; // Import the UIKit JavaScript file
import menuIon from "../../assets/images/Group 4889.png";

import AOS from "aos";
import "aos/dist/aos.css";
import MobailNav from "../Navbar/mobilNav/MobailNav";

function OnePage() {
  const [videoActiv, setVideActiv] = useState(false);

  function chegeimges() {
    console.log("barev");
    setVideActiv(true);
  }
  useEffect(() => {
    UIkit.slider(".uk-slider");
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="galeria_img">
        <div className="box-response">
          <MobailNav />
          <div className="box_text">
            <span className="">Видео</span>
            <div className="icon_box">
              <img src={carouselbtn} alt="" />
              <img src={point1} onClick={chegeimges} alt="" />
              <img src={point1} alt="" />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="box_text_2">
            <h4>Кыргыз петролуем панорамный вид</h4>
            <img src={playImg} alt="" />
          </div>
        </div>
      </div>

      <div className="container_mobile-table">
        <h3>Цены на продукцию*</h3>
        <div className="table">
          <div className="data">
            <span className="text_data1">Бензин АИ-80</span>
            <span className="text_data2">41,00 сом за 1л</span>
          </div>
          <div className="data">
            <div className="p_l">
              <p className="text_data1">Дизельное топливо </p>
              <p className="text_data1">марки Л-0,2-40</p>
            </div>

            <span className="text_data2">60,00 сом за 1л</span>
          </div>
          <div className="data_l">
            <span className="text_data1">Мазмут М-100</span>
            <span className="text_data2">24000,00 сом за 1 тн</span>
          </div>
        </div>
      </div>

      <div
        class="uk-position-relative uk-visible-toggle uk-light container-slid"
        tabindex="-1"
        uk-slider="sets: true"
        center="false"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
          <li className="slide-li">
            {/* <div class={videoActiv ? 'imgone' : "img1"}>
              {" "}
             
            </div> */}
            <div class="uk-position-relative" uk-slideshow="animation: fade">
              <ul class="uk-slideshow-items">
                <li className="slide_img">
                  <div className="img1">
                    <div className="box">
                      <div className="box_text">
                        <span>Видео</span>
                      </div>
                      <div className="icon_box">
                        <div class="uk-position-bottom-center uk-position-small">
                          <ul class="uk-thumbnav">
                            <li uk-slideshow-item="0">
                              <a href="#">
                                <img
                                  src={carouselbtn}
                                  width="80"
                                  height="20"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="1">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="2">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="box2">
                      <div className="box_text_2">
                        <h4>Кыргыз петролуем панорамный вид</h4>
                        <img src={playImg} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="img1_1">
                    <div className="box">
                      <div className="box_text">
                        <span>Видео</span>
                      </div>
                      <div className="icon_box">
                        <div class="uk-position-bottom-center uk-position-small">
                          <ul class="uk-thumbnav">
                            <li uk-slideshow-item="0">
                              <a href="#">
                                <img
                                  src={carouselbtn}
                                  width="80"
                                  height="20"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="1">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="2">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="box2">
                      <div className="box_text_2">
                        <h4>Кыргыз петролуем панорамный вид</h4>
                        <img src={playImg} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="img1_3">
                    <div className="box">
                      <div className="box_text">
                        <span>Видео</span>
                      </div>
                      <div className="icon_box">
                        <div class="uk-position-bottom-center uk-position-small">
                          <ul class="uk-thumbnav">
                            <li uk-slideshow-item="0">
                              <a href="#">
                                <img
                                  src={carouselbtn}
                                  width="80"
                                  height="20"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="1">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li uk-slideshow-item="2">
                              <a href="#">
                                <img
                                  src={point1}
                                  width="10"
                                  height="10"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="box2">
                      <div className="box_text_2">
                        <h4>Кыргыз петролуем панорамный вид</h4>
                        <img src={playImg} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="slide-li small ">
            <div class="img2 slide_card">
              <h2>Новости</h2>

              <h4>
                Кыргыз Петролеум Компани” ӨКМ кызматкерлерине материалдык жардам
                көрсөттү
              </h4>
            </div>
          </li>
          <li className="slide-li small">
            <div class="img3 slide_card">
              <h2>Событие</h2>

              <h4>В КПК прошли противопожарные учения</h4>
            </div>
          </li>
        </ul>

        <div className="price-container">
          <div className="price-titel">
            <h2 className="text-titel">Цены на продукцию</h2>
            <div className="product-name">
              <div className="product-text">
                <p>Форма оплаты</p>
              </div>
              <div className="product-text">
                <p>Налоги</p>
              </div>
              <div className="product-text">
                <p>Бензин АИ-80</p>
              </div>
              <div className="product-text ">
                <p className="big">Дизельное топливо марки Л-0,2-40</p>
              </div>
              <div className="product-text">
                <p>Мазмут М-100</p>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product1">
              <p className="product_text">Наличная</p>
              <p className="product_text">Безналичная</p>
            </div>

            <div className="product1">
              <p className="product_text">с НДС и НСП</p>
              <p className="product_text">с НДС и НСП</p>
            </div>

            <div className="product1">
              <p className="product_text">41,00 сом за 1л</p>
              <p className="product_text">41,00 сом за 1л</p>
            </div>
            <div className="product1">
              <p className="product_text">60,00 сом за 1л</p>
              <p className="product_text">60,00 сом за 1л</p>
            </div>

            <div className="product1">
              <p className="product_text">24000,00 сом за 1 тн</p>
              <p className="product_text">24000,00 сом за 1 тн</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnePage;
