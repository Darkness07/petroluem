import logo from "../../assets/images/up2 1.png";
import eng from "../../assets/images/Flag_of_the_United_Kingdom_(3-5).png";
import russia from "../../assets/images/russia.png";
import flag3 from "../../assets/images/Group 470.png";

import './Sidebar.css'



function SideBar() {
  return (
    <>
      <div className="sidebar">
        <nav className="nav">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="flag-box">
            <img src={eng} alt="" />
            <img src={russia} alt="" />
            <img src={flag3} alt="" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
