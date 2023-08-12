import { useEffect } from "react";
import "../../styles/oilKirgiz.css";
import AOS from "aos";
import { useSelector } from "react-redux";
import { textFunc } from "../../redux/reducers/app";
function OilKirgiz() {
  const text = useSelector((s) => s.text);
  const lang = useSelector((s) => s.app.lang);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="oil-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-sm-6">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="ourOilK  ourOilK1"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <p className="h1  kirgiz">
                    {textFunc(text.companyName, lang)}
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="ourOilK"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease"
                >
                  <p className="ourOilText">
                    {textFunc(text.footerText, lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-easing="ease-in-sine"
              className="ourOilK right"
            >
              <div className="row">
                <div className="col-sm-12 col-6">
                <div className="data1">
                <h2 className="item_title">26</h2>
                <p className="h4">
                  {textFunc(
                    {
                      ru: "Лет на рынке",
                      en: "Years on the market",
                      es: "Жыл рынокто",
                    },
                    lang
                  )}
                </p>
              </div>
                </div>
                <div className="col-sm-12 col-6">
                <div className="data1">
                <h2 className="item_title">210</h2>
                <p className="h4">
                  {textFunc(
                    {
                      ru: "Сотрудников",
                      en: "Employees",
                      es: "Кызматкерлер",
                    },
                    lang
                  )}
                </p>
              </div>
                </div>
                <div className="col-sm-12">
                <div className="data1">
                <h2 className="item_title">500000</h2>
                <p className="h4">
                  {textFunc(
                    {
                      ru: "Переработка нефти(в год)",
                      en: "Oil refining (per year)",
                      es: "Нефтини кайра иштетүү (жылына)",
                    },
                    lang
                  )}
                </p>
              </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

      {/*
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
      </div> */}
    </div>
  );
}

export default OilKirgiz;
