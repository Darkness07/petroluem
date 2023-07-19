import "../Gallery/gallery.css";
import imagesbar1 from "../../../assets/images/DSC_0352_1 4.png";
import imagesbar2 from "../../../assets/images/DSC_0352_1 5.png";
import imagesbar3 from "../../../assets/images/DSC_0352_1 6.png";
import { useRef } from "react";
import { useEffect } from "react";

function Gallery(params) {
  // function chengNavbarSidebar() {
  //   console.log(window.scrollY);
  // }

  // gallery.addEventListener("scroll", console.log('poop'));

  // function handleScroll() {
  //   console.log("Scrolling");
  // }

  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The gallery component is in view
          handleScroll();
        } else {
          handlePass();
        }
      },
      { threshold: 0.6 } // Adjust the threshold as needed
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  function handlePass() {
    console.log("fghjk");
    let navabar = document.querySelector(".nav-container");
    navabar.classList.remove("transparent");

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("transparent");
    
    let sidebarNav = document.querySelector(".nav");
    sidebarNav.classList.remove("transparent");
  }
  function handleScroll() {
    console.log("transparent");
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
        <div className="rigthPanel_container">
          <div className="rigthPnael">
            <h1 className="gallery_titel">Галерея</h1>
            <div className="scroll_bar">
              <div className="scroll">
                <div className="imges_bar">
                  <img src={imagesbar1} alt="" />
                  <img src={imagesbar2} alt="" />
                  <img src={imagesbar3} alt="" />
                </div>
                <div className="imges_bar">
                  <img src={imagesbar1} alt="" />
                  <img src={imagesbar2} alt="" />
                  <img src={imagesbar3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
