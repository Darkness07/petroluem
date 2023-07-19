import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "uikit/dist/css/uikit.min.css";
import iconyyoutube from "../../assets/icons/youtube.svg";
import icontw from "../../assets/icons/twitter.svg";
import iconinst from "../../assets/icons/inst.svg";
import icontg from "../../assets/icons/tg.svg";
import searchicon from "../../assets/icons/search-icon.svg";
import fbicon from "../../assets/icons/facebook.svg";
function NavBar() {
  // const [navbar, setNavbar] = useState(false);

  // window.addEventListener("scroll", chengeBackground);
  // function chengeBackground() {
  //   if (window.scrollY >= 40) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // }
  // <div className={navbar ? "activ" : "  nav-container"}>
  return (
    <>
      <div className="nav-container">
        {/* <div className="link-item"> */}
        <ul className="ul-link">
          <li className="link-l">
            <NavLink className="link_nav" to="/">
              Главная
            </NavLink>
          </li>
          <li className="link-l">
            <NavLink className="link_nav" to="/more">
              {" "}
              О нас
            </NavLink>
          </li>
          <li className="link-l">
            <NavLink className="link_nav" to="/lab">
              Лаборатория
            </NavLink>
          </li>
          <li className="link-l">
            <NavLink className="link_nav" to="/leaders">
              Руководители
            </NavLink>
          </li>
          <li className="link-l">
            <NavLink className="link_nav" to="/purchases">
              Наши закупки
            </NavLink>
          </li>
          <li className="link-l">
            <NavLink className="link_nav" to="/krg">
              Новости
            </NavLink>
          </li>
        </ul>
        {/* </div> */}
        <div className="contact-item">
          <div className="icon-for-contact">
            <img src={icontg} alt="" />
            <img src={iconyyoutube} alt="" />
            <img src={icontw} alt="" />
            <img  src={iconinst} alt="" />
            <img src={fbicon} alt="" />
          </div>
          <div className="text-for-contact">
            <ul className="now-concat">
              <li className="now"><a href="#">Новости</a></li>
              <li className="contact"><a href="#">Контакты</a></li>
            </ul>
            <div className="search">
              <img src={searchicon}  alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
