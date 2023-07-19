import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import faxIcon from "../../assets/icons/chat.svg";
import iconyt from "../../assets/icons/youtube.svg";
import icontw from "../../assets/icons/twitter.svg";
import iconins from "../../assets/icons/inst.svg";
import iconfg from "../../assets/icons/facebook.svg";
import eng from "../../assets/images/flag_uk.svg";
import russia from "../../assets/images/flag_ru.svg";
import flag3 from "../../assets/images/flag_kg.svg";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="box-footer desktop">
          <div className="item-f_1">
            <div className="logo-foot">
              <img src={logo} className="logo-foot" alt="" />
              <h2 className="footer_titel">Кыргыз Петролеум Компани</h2>
            </div>
          </div>
          <div className="item-f text">
            <p className="footer_text">
              Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО
              «КПК» или Компания) является, одним из ведущих производителей
              нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП
              ОАО «Кыргызнефтегаз». Компания занимается производством
              нефтепродуктов из нефти и других видов сырья и предоставляет
              услуги по переработке. На данный момент предприятие производит 3
              вида продукции: бензин, дизельное топливо, мазут.
            </p>
          </div>
          <div className="item-f2">
            <Link to="/" className="foot_link">
              Главная
            </Link>
            <Link className="foot_link">О нас</Link>
            <Link className="foot_link">Лаборатория</Link>
            <Link className="foot_link">Руководители</Link>
            <Link className="foot_link">Наши закупки</Link>
            <Link className="foot_link">Новости</Link>
            <Link className="foot_link">Контакты</Link>
            <Link className="foot_link">Банковские реквезиты</Link>
            <Link to="/lab" className="foot_link">
              Вакансии
            </Link>
          </div>
          <div className="item-f_3">
            <div className="contact_la_f">
              <div className="data_contact_f">
                <div className="data_box_f">
                  <img src={emailIcon} className="data_box_f_icon" alt="" />
                  <p className="lab_text_foot">Email адрес:</p>
                  <a className="lab_text_foot" href="info@kpc.kg">
                    info@kpc.kg
                  </a>
                </div>
                <div className="data_box_f">
                  <img src={phoneIcon} className="data_box_f_icon" alt="" />
                  <p className="lab_text_foot">Телефон</p>
                  <a className="lab_text_foot" href="996 (3722) 5-55-05">
                    996 (3722) 5-55-05
                  </a>
                  <a className="lab_text_foot" href="996 (3722) 5-55-05">
                    996 (3722) 5-03-12
                  </a>
                </div>
                <div className="data_box_f">
                  <img src={faxIcon} className="data_box_f_icon" alt="" />
                  <p className="lab_text_foot">Email адрес:</p>

                  <a className="lab_text_foot" href="info@kpc.kg">
                    info@kpc.kg
                  </a>
                  <p className="lab_text_foot"></p>
                </div>
                <div className="iconsoc">
                  <img src={iconyt} alt="" className="iconsoc_icon" />
                  <img src={icontw} alt="" className="iconsoc_icon" />
                  <img src={iconins} alt="" className="iconsoc_icon" />
                  <img src={iconfg} alt="" className="iconsoc_icon" />
                </div>
                <div className="flag">
                  <img src={eng} alt="" />
                  <img src={russia} alt="" />
                  <img src={flag3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer tablet">
          <div className="blok1">
            
            <h2 className="footer_titel tablet">Кыргыз Петролеум Компани</h2>
            <p className="footer_text tablet">
              Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО
              «КПК» или Компания) является, одним из ведущих производителей
              нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП
              ОАО «Кыргызнефтегаз». Компания занимается производством
              нефтепродуктов из нефти и других видов сырья и предоставляет
              услуги по переработке. На данный момент предприятие производит 3
              вида продукции: бензин, дизельное топливо, мазут.
            </p>
            <div className="item-f_3">
              <div className="contact_la_f">
                <div className="data_contact_f">
                  <div className="data_box_f">
                    <img src={emailIcon} className="data_box_f_icon" alt="" />
                    <p className="lab_text_foot">Email адрес:</p>
                    <a className="lab_text_foot" href="info@kpc.kg">
                      info@kpc.kg
                    </a>
                  </div>
                  <div className="data_box_f">
                    <img src={phoneIcon} className="data_box_f_icon" alt="" />
                    <p className="lab_text_foot">Телефон</p>
                    <a className="lab_text_foot" href="996 (3722) 5-55-05">
                      996 (3722) 5-55-05
                    </a>
                    <a className="lab_text_foot" href="996 (3722) 5-55-05">
                      996 (3722) 5-03-12
                    </a>
                  </div>
                  <div className="data_box_f">
                    <img src={faxIcon} className="data_box_f_icon" alt="" />
                    <p className="lab_text_foot">Email адрес:</p>

                    <a className="lab_text_foot" href="info@kpc.kg">
                      info@kpc.kg
                    </a>
                    <p className="lab_text_foot"></p>
                  </div>
                  <div className="iconsoc">
                    <img src={iconyt} alt="" className="iconsoc_icon" />
                    <img src={icontw} alt="" className="iconsoc_icon" />
                    <img src={iconins} alt="" className="iconsoc_icon" />
                    <img src={iconfg} alt="" className="iconsoc_icon" />
                  </div>
                  <div className="flag">
                    <img src={eng} alt="" />
                    <img src={russia} alt="" />
                    <img src={flag3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blok2">
            <div className="item-f2">
              <Link to="/" className="foot_link">
                Главная
              </Link>
              <Link className="foot_link">О нас</Link>
              <Link className="foot_link">Лаборатория</Link>
              <Link className="foot_link">Руководители</Link>
              <Link className="foot_link">Наши закупки</Link>
              <Link className="foot_link">Новости</Link>
              <Link className="foot_link">Контакты</Link>
              <Link className="foot_link">Банковские реквезиты</Link>
              <Link to="/lab" className="foot_link">
                Вакансии
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
