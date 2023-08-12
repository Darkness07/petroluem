import React from 'react'
import logo from "../../../assets/images/up2 1.png";
import menuIon from "../../../assets/images/Group 4889.png"
import closeBtn from '../../../assets/images/x 1.png'
import "../mobilNav/mobailNav.css"
function   MobailNav ({setShowMobileNavbar,showMobileNavbar}){
return (

<div className="response-nav">
            <div className="responseNav-logo">
              <img src={logo} alt="" />
            </div>

               <img onClick={()=>{
                setShowMobileNavbar(!showMobileNavbar)
               }} src={showMobileNavbar ? closeBtn : menuIon} alt="" />
          </div>

)
}

export default    MobailNav
