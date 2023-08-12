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
import { useDispatch, useSelector } from "react-redux";
import { textFunc, setLang } from "../../redux/reducers/app";

function Footer() {
  const text = useSelector((s) => s.text);
  const lang = useSelector((s) => s.app.lang);
  const dispatch = useDispatch();
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="item-f_1">
                <div className="logo-foot">
                  <img src={logo} className="logo-foot" alt="" />
                  <h2 className="footer_titel">{textFunc(text.companyName, lang)}</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="item-f text">
                <p className="footer_text">
                  {textFunc(text.footerText, lang)}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="item-f2">
                <Link to="/" className="foot_link">
                  {textFunc(text.mainPage, lang)}
                </Link>
                <Link className="foot_link">{textFunc(text.aboutUs, lang)}</Link>
                <Link className="foot_link">{textFunc(text.laboratory, lang)}</Link>
                <Link className="foot_link">{textFunc(text.leaders, lang)}</Link>
                <Link className="foot_link">{textFunc(text.purchases, lang)}</Link>
                <Link className="foot_link">{textFunc(text.news, lang)}</Link>
                <Link className="foot_link">{textFunc(text.contacts, lang)}</Link>
                <Link className="foot_link">{textFunc(text.requisites, lang)}</Link>
                <Link to="/lab" className="foot_link">
                {textFunc(text.jobs, lang)}
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="item-f_3">
                <div className="contact_la_f">
                  <div className="data_contact_f">
                    <div className="data_box_f">
                      <img src={emailIcon} className="data_box_f_icon" alt="" />
                      <p className="lab_text_foot">{textFunc(text.email, lang)}:</p>
                      <a className="lab_text_foot" href="info@kpc.kg">
                        info@kpc.kg
                      </a>
                    </div>
                    <div className="data_box_f">
                      <img src={phoneIcon} className="data_box_f_icon" alt="" />
                      <p className="lab_text_foot">{textFunc(text.phone, lang)}:</p>
                      <a className="lab_text_foot" href="tel:+996 (3722) 5-55-05">
                        996 (3722) 5-55-05
                      </a>
                      <a className="lab_text_foot" href="tel:+996 (3722) 5-55-05">
                        996 (3722) 5-03-12
                      </a>
                    </div>
                    <div className="data_box_f">
                      <img src={faxIcon} className="data_box_f_icon" alt="" />
                      <p className="lab_text_foot">{textFunc(text.fax, lang)}:</p>

                      <a className="lab_text_foot" href="fax:+996 (3722) 5-23-15">
                      996 (3722) 5-23-15
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
                      <img onClick={()=>{
                        dispatch(setLang('en'))
                      }} src={eng} alt="" />
                      <img onClick={()=>{
                        dispatch(setLang('ru'))
                      }} src={russia} alt="" />
                      <img onClick={()=>{
                        dispatch(setLang('es'))
                      }} src={flag3} alt="" />
                    </div>
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

export default Footer;
