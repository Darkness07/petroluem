import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import iconyyoutube from "../../assets/icons/youtube.svg";
import icontw from "../../assets/icons/twitter.svg";
import iconinst from "../../assets/icons/inst.svg";
import icontg from "../../assets/icons/tg.svg";
import searchicon from "../../assets/icons/search-icon.svg";
import fbicon from "../../assets/icons/facebook.svg";
import emailIcon from "./icons/email-icon.svg";
import faxIcon from "./icons/fax-icon.svg";
import phoneIcon from "./icons/phone-icon.svg";
import MobailNav from "./mobilNav/MobailNav";
import { useDispatch, useSelector } from "react-redux";
import { textFunc, setLang } from "../../redux/reducers/app";
import logo from "../../assets/images/up2 1.png";
import eng from "../../assets/images/Flag_of_the_United_Kingdom_(3-5).png";
import russia from "../../assets/images/russia.png";
import flag3 from "../../assets/images/Group 470.png";


function NavBar() {
  const [showBurger, setShowBurger] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const text = useSelector((s) => s.text);
  const lang = useSelector((s) => s.app.lang);
  const dispatch = useDispatch();
  const burgerFunc = () => {
    setShowBurger(!showBurger);
  };

  return (
    <header>
      <div
        className={
          showMobileNavbar
            ? "nav-container nav-container-show"
            : "nav-container container"
        }
      >
        <h2 className="header-nav-title">{textFunc(text.companyName, lang)}</h2>
        <div className="header-container">
          <nav className="header-nav">

            <div onClick={burgerFunc} className="burger-btn">
              <span></span>
            </div>

            <ul className={showBurger ? "ul-link ul-link-show" : "ul-link"}>
              <li>  <img src={logo} className="logo" alt="" /></li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/"
                >
                  {textFunc(text.mainPage, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/more"
                >
                  {" "}
                  {textFunc(text.aboutUs, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/lab"
                >
                  {textFunc(text.laboratory, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/leaders"
                >
                  {textFunc(text.leaders, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/purchases"
                >
                  {textFunc(text.purchases, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/news"
                >
                  {textFunc(text.news, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/price"
                >
                  {textFunc(
                    {
                      ru: "Цены",
                      es: "Баалар",
                      en: "Price",
                    },
                    lang
                  )}
                </NavLink>
              </li>
            </ul>

            <ul className="ul-link ul-link-mobile">
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/lab"
                >
                  {textFunc(text.contacts, lang)}
                </NavLink>
              </li>

              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/lab"
                >
                  {textFunc(text.requisites, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/lab"
                >
                  {textFunc(text.jobs, lang)}
                </NavLink>
              </li>

              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/"
                >
                  {textFunc(text.staff, lang)}
                </NavLink>
              </li>
              <li className="link-l">
                <NavLink
                  onClick={() => {
                    setShowBurger(false);
                    setShowMobileNavbar(false);
                  }}
                  className="link_nav"
                  to="/"
                >
                  {textFunc(text.productionTitle, lang)}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <select
              className="lang-select"
              onChange={(e) => dispatch(setLang(e.target.value))}
            >
              <option value="ru" key="">
                ru
              </option>
              <option value="en" key="">
                en
              </option>
              <option value="es" key="">
                kg
              </option>
            </select>
            <img src={
              lang === 'ru'
              ? russia
              : lang === 'es'
              ? flag3
              : eng
            } alt="" />

          </div>

          <div className="contact-item">
            <div className="contact-item-mobile">
              <div className="contact-item-mobile-item">
                <img src={emailIcon} alt="" />
                <p>Email адрес: </p>
                <a href="mailto: info@kpc.kg">info@kpc.kg</a>
              </div>

              <div className="contact-item-mobile-item">
                <img src={faxIcon} alt="" />
                <p>Факс:</p>
                <a href="fax: +996 (3722) 5-23-15">996 (3722) 5-23-15</a>
              </div>
            </div>
            <div className="contact-item-mobile">
              <div className="contact-item-mobile-item">
                <img src={phoneIcon} alt="" />
                <p>Телефон</p>
                <a href="tel: +996 (3722) 5-55-05">996 (3722) 5-55-05</a>
                <br />
                <a href="tel: +996 (3722) 5-03-12">996 (3722) 5-03-12</a>
              </div>

              <div className="contact-item-mobile-item">
                <div className="social">
                  <a href="">
                    <img src={iconyyoutube} alt="" />
                  </a>
                  <a href="">
                    <img src={icontw} alt="" />
                  </a>
                  <a href="">
                    <img src={iconinst} alt="" />
                  </a>
                  <a href="">
                    <img src={fbicon} alt="" />
                  </a>
                  <a href="">
                    <img src={icontg} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="icon-for-contact">
              <img src={icontg} alt="" />
              <img src={iconyyoutube} alt="" />
              <img src={icontw} alt="" />
              <img src={iconinst} alt="" />
              <img src={fbicon} alt="" />
            </div>
            <div className="text-for-contact">
              <ul className="now-concat">
                <li className="contact">
                  <Link
                    onClick={() => {
                      setShowBurger(false);
                      setShowMobileNavbar(false);
                    }}
                    to="/lab"
                  >
                    {textFunc(text.contacts, lang)}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MobailNav
        setShowMobileNavbar={setShowMobileNavbar}
        showMobileNavbar={showMobileNavbar}
      />
    </header>
  );
}

export default NavBar;
