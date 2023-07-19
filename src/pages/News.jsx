
import '../styles/news.css'
import "uikit/dist/css/uikit.min.css"; // Import the UIKit CSS file
import logo1 from  "../assets/images/Vector.png"
import logo2 from  "../assets/images/Vector (1).png"

function News () {
    return(
      <>
        <div className='container_fluid  '>
          <div className='cards-container'>
          <div className='card-1'>
            <div className='card-icon'>
            <div className='icon_1'>
               <img src={logo1} alt="" />
               <img src={logo2} alt="" />
            </div>
            <div className='card-text'>
            <h1>Лаборатория</h1>
            </div>
            </div >
           
            <div className='card-text-2'>
              <p>Узнайте о методов тестирования и об испытательных технологиях</p>
           </div>
           </div>
           <div className='card-1'>
           <div className='card-icon'>
            <div className='icon_1'>
               <img src={logo1} alt="" />
               <img src={logo2} alt="" />
            </div>
            <div className='card-text'>
               <h1>Банковские реквизиты</h1>
           </div>
           </div>
           
           <div className='card-text-2'>
              <p>Узнайте о методов тестирования и об испытательных технологиях</p>
           </div>
           </div>
           <div className='card-1'>
           <div className='card-icon'>
           <div className='icon_1'>
               <img src={logo1} alt="" />
               <img src={logo2} alt="" />
            </div>
            <div className='card-text'>
               <h1>Банковские реквизиты</h1>
           </div>
           </div>
          
           <div className='card-text-2'>
              <p>Узнайте о методов тестирования и об испытательных технологиях</p>
           </div>
           </div>
           <div className='card-1'>
           <div className='card-icon'>
           <div className='icon_1'>
               <img src={logo1} alt="" />
               <img src={logo2} alt="" />
            </div>
            <div className='card-text'>
           <h1>Вакансии</h1>
           </div>
           </div>
           
           <div className='card-text-2'>
              <p>Узнайте о методов тестирования и об испытательных технологиях</p>
           </div>
           </div>
          </div>
          
            
        </div>
      </>
    ) 
}

export default News

