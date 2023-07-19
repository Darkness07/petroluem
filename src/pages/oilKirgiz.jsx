import { useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/Sidebar";
import "../styles/oilKirgiz.css";
import AOS from "aos";

function OilKirgiz() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container d-flex  ">
        <div className="col ">
          <div className="container h-100 d-flex   justify-content-around  flex-wrap">
            <div
              className="ourOilK"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-easing="ease-in-sine"
            >
              <p className="h1  kirgiz">Кыргыз Петролеум Компани</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease"
              className="ourOilK"
            >
              <p className="ourOilText">
                Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО
                «КПК» или Компания) является, одним из ведущих производителей
                нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП
                ОАО «Кыргызнефтегаз».
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
              className="ourOilK"
            >
              <p className="h1">210</p>
              <p className="h4">Сотрудников</p>
              <p className="h1">26</p>
              <p className="h4">Лет на рынке</p>
              <p className="h1">500000</p>
              <p className="h4">Переработка нефти(в год)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OilKirgiz;
