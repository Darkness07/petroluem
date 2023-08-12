import logo from "../../assets/images/up2 1.png";
import eng from "../../assets/images/Flag_of_the_United_Kingdom_(3-5).png";
import russia from "../../assets/images/russia.png";
import flag3 from "../../assets/images/Group 470.png";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/reducers/app";
import "./Sidebar.css";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="sidebar">
        <nav className="nav">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="flag-box">
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
        </nav>
      </div>
    </>
  );
}

export default SideBar;
