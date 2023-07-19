import { useEffect } from "react";
import "../../styles/oilKirgiz.css";
import AOS from "aos";

function OilKirgiz() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className=" d-flex  ">
        <div className="col ">
          <div className="container h-100 d-flex   justify-content-between  flex-wrap">
            <div
              className="ourOilK desktop"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
            >
              <p className="h1  kirgiz">Кыргыз Петролеум Компани</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease"
              className="ourOilK desktop"
            >
              <p className="ourOilText">
                Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО
                «КПК» или Компания) является, одним из ведущих производителей
                нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП
                ОАО «Кыргызнефтегаз». Компания занимается производством
                нефтепродуктов из нефти и других видов сырья и предоставляет
                услуги по переработке. На данный момент предприятие производит 3
                вида продукции: бензин, дизельное топливо, мазут.
              </p>
            </div>
            <div
              className="ourOilK tablet"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"

            >
              <p className="h1  kirgiz">Кыргыз Петролеум Компани</p>

              <p className="ourOilText">
                Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО
                «КПК» или Компания) является, одним из ведущих производителей
                нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП
                ОАО «Кыргызнефтегаз». Компания занимается производством
                нефтепродуктов из нефти и других видов сырья и предоставляет
                услуги по переработке. На данный момент предприятие производит 3
                вида продукции: бензин, дизельное топливо, мазут.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="250"
              data-aos-easing="ease-in-sine"
              className="ourOilK right"
            >

              <div className="data1">
                <h2 className="item_title">26</h2>
                <p className="h4">Лет на рынке</p>
              </div>
              <div className="data1">
                <h2 className="item_title">210</h2>
                <p className="h4">Сотрудников</p>
              </div>
              <div className="data1">
                <h2 className="item_title">500000</h2>
                <p className="h4">Переработка нефти(в год)</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default OilKirgiz;
