import "../Gallery/gallery.css";
import imagesbar1 from "../../../assets/images/DSC_0352_1 4.png";
import imagesbar2 from "../../../assets/images/DSC_0352_1 5.png";
import imagesbar3 from "../../../assets/images/DSC_0352_1 6.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { textFunc } from "../../../redux/reducers/app";
import { useSelector } from "react-redux";

function Gallery(params) {
const text = useSelector(s => s.text);
const lang = useSelector(s => s.app.lang);
  // function chengNavbarSidebar() {
  //   console.log(window.scrollY);
  // }

  // gallery.addEventListener("scroll", console.log('poop'));

  // function handleScroll() {
  //   console.log("Scrolling");
  // }
  const imagesList = [
    {
      id: 1,
      img: imagesbar1,
    },
    {
      id: 2,
      img: imagesbar2,
    },
    {
      id: 3,
      img: imagesbar3,
    },
  ];

  const [selectedImg, setSelectedImg] = useState(imagesList[0]);

  const galleryRef = useRef(null);

  useEffect(() => {




  

  }, []);
  function handlePass() {
    let navabar = document.querySelector(".nav-container");
    navabar.classList.remove("transparent");

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("transparent");

    let sidebarNav = document.querySelector(".nav");
    sidebarNav.classList.remove("transparent");
  }
  function handleScroll() {
    let navabar = document.querySelector(".nav-container");
    navabar.classList.add("transparent");

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("transparent");

    let sidebarNav = document.querySelector(".nav");
    sidebarNav.classList.remove("transparent");
  }

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery_backcground">
        <img src={selectedImg.img} className="gallery_background-img" alt="" />
        <div className="rigthPanel_container">
          <div className="rigthPnael">
            <h1 className="gallery_titel">{textFunc(text.gallery, lang)}</h1>
            <div className="scroll_bar">
              <div className="scroll">
                {
                  imagesList.map( item =>{
                    return <img
                    key={item.id}
                    src={item.img}
                    alt=""
                    onClick={()=>{
                      setSelectedImg(item)
                    }}
                  />
                  })
                }

                  <img src={imagesbar1} alt="" />
                  <img src={imagesbar2} alt="" />
                  <img src={imagesbar3} alt="" />

              </div>
            </div>

            <div className="scroll_bar_mobile">
              <div className="scroll-mobile">
                {imagesList.map((item) => {
                  return (
                    <img
                      key={item.id}
                      className="scroll-mobile-img"
                      src={item.img}
                      alt=""
                      onClick={()=>{
                        setSelectedImg(item)
                      }}
                    />
                  );
                })}
                <img className="scroll-mobile-img" src={imagesbar1} alt="" />

                <img className="scroll-mobile-img" src={imagesbar2} alt="" />

                <img className="scroll-mobile-img" src={imagesbar3} alt="" />

                <img className="scroll-mobile-img" src={imagesbar1} alt="" />

                <img className="scroll-mobile-img" src={imagesbar2} alt="" />

                <img className="scroll-mobile-img" src={imagesbar3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
