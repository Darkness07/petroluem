import React from 'react'
import logo from "../../../assets/images/up2 1.png";
import menuIon from "../../../assets/images/Group 4889.png"
import closeBtn from '../../../assets/images/x 1.png'
import "../mobilNav/mobailNav.css"
function   MobailNav (){
return (
<div>
<div className="response-nav">
            <div className="responseNav-logo">
              <img src={logo} alt="" />
            </div>
          
               <img src={menuIon} alt="" class=""
              uk-toggle="target: #offcanvas-none" />
      

            <div id="offcanvas-none" uk-offcanvas="mode: none; overlay: true">
              <div class="uk-offcanvas-bar">
                <div className='menu_closebtn'>
            
                     <img src={ closeBtn} alt="" class="uk-offcanvas-close" uk-close />

                </div>
               

                <h3>Title</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
</div>
)
}

export default    MobailNav