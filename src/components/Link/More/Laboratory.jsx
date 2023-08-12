import "../More/laboratory.css";
import iconLab from "../../../assets/images/Vector.png";
import iconLab2 from "../../../assets/images/Vector (4).png";
import attestat1 from "../../../assets/images/attestat_1.svg";
import attestat2 from "../../../assets/images/attestat_2.svg";
import iconContact1 from "../../../assets/icons/contacts1.svg";
import iconContact2 from "../../../assets/icons/contacts2.svg";
import iconContact3 from "../../../assets/icons/contacts3.svg";

import icon1 from "../../../assets/icons/lab1.svg";
import icon2 from "../../../assets/icons/lab2.svg";
import icon3 from "../../../assets/icons/lab3.svg";
import icon4 from "../../../assets/icons/lab4.svg";
import icon5 from "../../../assets/icons/lab5.svg";
import icon6 from "../../../assets/icons/lab6.svg";
import icon7 from "../../../assets/icons/lab7.svg";
import icon8 from "../../../assets/icons/lab8.svg";
import icon9 from "../../../assets/icons/lab9.svg";
import arrowRight from "../../../assets/icons/arrowRightSmall.svg";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getJobs, textFunc } from '../../../redux/reducers/app';


function Laboratory() {
  const dispatch = useDispatch();
  const jobs = useSelector(s => s.app.jobs);
  const text = useSelector( s => s.text);
  const lang = useSelector( s => s.app.lang);

  useEffect(()=>{
    dispatch(getJobs())
  }, [])
  return (
    <>
      <div className="laboratory_container">
        <div className="container">
          <div className="titelLab">
            <h2 className="lab-titel_2">{textFunc(text.laboratory, lang)}</h2>
            <div className="lab-title-link">
              <span className="lab-titel_nav">{textFunc(text.mainPage, lang)}</span>
              <img src={arrowRight} alt="" />
              <span className="lab-titel_nav">{textFunc(text.laboratory, lang).toLowerCase()}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="card-lab">
                <div className="card_item">
                  <img src={icon1} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle1, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText1, lang)}
                    </p>
                  </div>
                </div>
                <div className="card_item">
                  <img src={icon2} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle2, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText2, lang)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-lab">
                <div className="card_item">
                  <img src={icon3} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle3, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText3, lang)}
                    </p>
                  </div>
                </div>
                <div className="card_item">
                  <img src={icon4} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle4, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText4, lang)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-lab">
                <div className="card_item">
                  <img src={icon5} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle5, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText5, lang)}
                    </p>
                  </div>
                </div>
                <div className="card_item">
                  <img src={icon6} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle6, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText6, lang)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-lab">
                <div className="card_item">
                  <img src={icon7} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle7, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText7, lang)}
                    </p>
                  </div>
                </div>
                <div className="card_item">
                  <img src={icon8} alt="" className="lab_icon" />
                  <p className="lab-titel">{textFunc(text.laboratoryTitle8, lang)}</p>
                  <div className="card_text_lab">
                    <p className="lab_text">
                    {textFunc(text.laboratoryText8, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card_lab2">
                <img src={icon9} alt="" className="lab_icon" />
                <p className="lab-titel p">{textFunc(text.certificates, lang)}</p>
                <img className="attestat" src={attestat1} alt="" />
                <img src={attestat2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="laboratory_box">
          <div className="container_lm">
            <div className="contact_la">
              <div className="container">
                <h2 className="lab-titel_2">{textFunc(text.contacts, lang)}</h2>
                <div className="data_contact">
                  <div className="data_box">
                    <img src={iconContact1} alt="" />
                    <p className="lab_text">{textFunc(text.email, lang)}:</p>
                    <p className="lab_text"><a href="mailto:info@kpc.kg">info@kpc.kg</a></p>
                  </div>
                  <div className="data_box">
                    <img src={iconContact2} alt="" />
                    <p className="lab_text">{textFunc(text.phone, lang)}:</p>
                    <p className="lab_text"><a href="tel:+996 (3722) 5-55-05">996 (3722) 5-55-05</a></p>
                    <p className="lab_text"><a href="tel:+996 (3722) 5-03-12">996 (3722) 5-03-12</a></p>
                  </div>
                  <div className="data_box">
                    <img src={iconContact3} alt="" />
                    <p className="lab_text">{textFunc(text.fax, lang)}:</p>
                    <p className="lab_text"><a href="fax: +996 (3722) 5-23-15">996 (3722) 5-23-15</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bank_details">
              <div className="container">
                <h2 className="lab-titel_2">{textFunc(text.requisites, lang)}</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Кыргызская Республика, г. Жалал-Абад ул.Промышленная 202
                        ОКПО: 21183298 ИНН: 01705199710011 Код ГНИ:048
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Филиал «ДКИБ-Жалал-Абад» ЗАО «Демир Кыргыз Интернешнл
                        Банк» КР, г Жалал-Абад, ул.Эркиндик 17 «Б» БИК 118007
                        р/с: 1180000030788616 СОМ
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Филиал ЗАО «КИКБ» ЗАО «Кыргызский
                        Инвестиционно-Кредитный Банк» КР, г Жалал-Абад, ул.
                        Эркиндик 10 БИК 128004 р/с: 1280040027891130 СОМ
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Филиал ОАО «Керемет Банк» КР, г Жалал-Абад, ул.
                        Токтогула 40 БИК 113017 р/с: 1360170000093380 СОМ
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Филиал ОАО «Айыл Банк» КР, г Жалал-Абад, ул.Бактыгулова
                        20 БИК 135011 р/с: 1350510024125670 СОМ
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card_l">
                      <p className="lab_text">
                        Филиал ОАО «КБ Кыргызстан» КР, г Жалал-Абад, ул.
                        Эркиндик, 13А БИК 103015 р/с:1031520000688925 СОМ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobs">
              <div className="container">
                <h2 className="lab-titel_2">{textFunc(text.jobs, lang)}</h2>
                <div className="row">
                  {
                    jobs.map(item => {
                      return    <div key={item.id} className="col-lg-4 col-md-6">
                      <div className="card_l">
                        <p className="lab_text">
                          {
                            textFunc(item.translations, lang).description
                          }
                        </p>
                      </div>
                    </div>
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laboratory;
