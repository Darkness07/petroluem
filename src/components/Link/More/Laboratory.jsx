import "../More/laboratory.css";
import iconLab from "../../../assets/images/Vector.png";
import iconLab2 from "../../../assets/images/Vector (4).png";
import attestat1 from "../../../assets/images/attestat_1.svg";
import attestat2 from "../../../assets/images/attestat_2.svg";
import iconContact1 from "../../../assets/icons/contacts1.svg";
import iconContact2 from "../../../assets/icons/contacts2.svg";
import iconContact3 from "../../../assets/icons/contacts3.svg";

import icon1 from '../../../assets/icons/lab1.svg'
import icon2 from '../../../assets/icons/lab2.svg'
import icon3 from '../../../assets/icons/lab3.svg'
import icon4 from '../../../assets/icons/lab4.svg'
import icon5 from '../../../assets/icons/lab5.svg'
import icon6 from '../../../assets/icons/lab6.svg'
import icon7 from '../../../assets/icons/lab7.svg'
import icon8 from '../../../assets/icons/lab8.svg'
import icon9 from '../../../assets/icons/lab9.svg'
import arrowRight from '../../../assets/icons/arrowRightSmall.svg'

function Laboratory() {
  return (
    <>
      <div className="laboratory_container">
        <div className="laboratory_box">
          <div className="titelLab">
            <h2 className="lab-titel_2">Лаборатория</h2>
            <span className="lab-titel_nav">Главная</span>
            <img src={arrowRight} alt="" />
            <span className="lab-titel_nav">лаборатория</span>
          </div>
          <div className="container_lm">
            <div className="cont_lab">
              <div className="card-lab-container">
                <div className="card-lab">
                  <div className="card_item">
                    <img src={icon1} alt="" className="lab_icon" />
                    <p className="lab-titel">Главная</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Испытательная лаборатория входит в состав Закрытого
                        Акционерного Общества «Кыргыз Петролеум Компани».
                        Испытательная лаборатория размещается в
                        специализированных помещениях. Управление лабораторией
                        осуществляется только на основной территории ЗАО «КПК».
                      </p>
                    </div>
                  </div>
                  <div className="card_item">
                    <img src={icon2} alt="" className="lab_icon" />
                    <p className="lab-titel">Про аттестат</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Аттестат аккредитации №KG 417/КЦА.ИЛ.042 и №KG
                        417/КЦА.ОК.069 и данная аккредитация демонстрирует
                        техническую компетентность на проведения испытание и
                        контроль согласно Области Аккредитации, действующую
                        систему менеджмента качества.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-lab">
                  <div className="card_item">
                    <img src={icon3} alt="" className="lab_icon" />
                    <p className="lab-titel">Качество</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Руководство Компании обеспечивает наличие ресурсов
                        посредством материально-технического снабжения,
                        обучения, а также создания соответствующей
                        инфраструктуры и производственной среды. Руководство
                        испытательной лаборатории гарантирует высокий уровень
                        качества, объективности и достоверности испытаний в
                        признанной при аккредитации области деятельности.
                      </p>
                    </div>
                  </div>
                  <div className="card_item">
                    <img src={icon4} alt="" className="lab_icon" />
                    <p className="lab-titel">Аккредитация </p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Испытательная лаборатория аккредитована в соответствии с
                        международным стандартом ГОСТ ISO/IEC 17025-2019 и
                        аккредитован в качестве органа контроля типа «В» в
                        соответствии с международным стандартом ISO/IEC
                        17020-2013 и участвует в контроле технологического
                        процесса.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-lab">
                  <div className="card_item">
                    <img src={icon5} alt="" className="lab_icon" />
                    <p className="lab-titel">Обязанности</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Руководящий и технический персонал имеют полномочия, и
                        обязанности согласно разработанным должностным
                        инструкциям и трудовым договором. Персонал лаборатории
                        имеет ресурсы для внедрения, поддержания, улучшения
                        системы менеджмента в лаборатории.
                      </p>
                    </div>
                  </div>
                  <div className="card_item">
                    <img src={icon6} alt="" className="lab_icon" />
                    <p className="lab-titel">Персонал</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Лаборатория располагает достаточным числом руководящего
                        и технического персонала, имеющих соответствующее
                        образование и квалификацию, обеспечивающих проведение
                        испытаний продукции в соответствии с областью
                        аккредитации.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-lab">
                  <div className="card_item">
                    <img src={icon7} alt="" className="lab_icon" />
                    <p className="lab-titel">Деятельность</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Основной деятельностью испытательной лаборатории
                        является проведение испытаний поступающего сырья и
                        производимых нефтеперерабатывающим заводом
                        нефтепродуктов.
                      </p>
                    </div>
                  </div>
                  <div className="card_item">
                    <img src={icon8} alt="" className="lab_icon" />
                    <p className="lab-titel">Документация</p>
                    <div className="card_text_lab">
                      <p className="lab_text">
                        Для обеспечения деятельности ИЛ документально оформлены:
                        Положение, цель, политика, процедуры, паспорт,
                        должностные и производственные инструкции и др.
                        документы в объеме необходимой системы менеджмента.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab-box2_container">
                <div className="card_lab2">
                  <img src={icon9} alt="" className="lab_icon" />
                  <p className="lab-titel p">Аттестаты</p>
                  <img className="attestat" src={attestat1} alt="" />
                  <img src={attestat2} alt="" />
                </div>
              </div>
            </div>
            <div className="contact_la">
              <h2 className="lab-titel_2">Контакты</h2>
              <div className="data_contact">
                <div className="data_box">
                  <img src={iconContact1} alt="" />
                  <p className="lab_text">Email адрес:</p>
                  <p className="lab_text">info@kpc.kg</p>
                </div>
                <div className="data_box">
                  <img src={iconContact2} alt="" />
                  <p className="lab_text">Телефон</p>
                  <p className="lab_text">996 (3722) 5-55-05</p>
                  <p className="lab_text">996 (3722) 5-03-12</p>
                </div>
                <div className="data_box">
                  <img src={iconContact3} alt="" />
                  <p className="lab_text">Email адрес:</p>
                  <p className="lab_text">info@kpc.kg</p>
                </div>
              </div>
            </div>
            <div className="bank_details">
              <h2 className="lab-titel_2">Банковские реквизиты</h2>
              <div className="cards_l">
                <div className="card_l">
                  <p className="lab_text">
                    Кыргызская Республика, г. Жалал-Абад ул.Промышленная 202
                    ОКПО: 21183298 ИНН: 01705199710011 Код ГНИ:048
                  </p>
                </div>
                <div className="card_l">
                  <p className="lab_text">
                    Филиал «ДКИБ-Жалал-Абад» ЗАО «Демир Кыргыз Интернешнл Банк»
                    КР, г Жалал-Абад, ул.Эркиндик 17 «Б» БИК 118007 р/с:
                    1180000030788616 СОМ
                  </p>
                </div>
                <div className="card_l">
                  <p>
                    Филиал ЗАО «КИКБ» ЗАО «Кыргызский Инвестиционно-Кредитный
                    Банк» КР, г Жалал-Абад, ул. Эркиндик 10 БИК 128004 р/с:
                    1280040027891130 СОМ
                  </p>
                </div>
                <div className="card_l">
                  <p className="lab_text">
                    Филиал ОАО «Керемет Банк» КР, г Жалал-Абад, ул. Токтогула 40
                    БИК 113017 р/с: 1360170000093380 СОМ
                  </p>
                </div>
                <div className="card_l">
                  <p>
                    Филиал ОАО «Айыл Банк» КР, г Жалал-Абад, ул.Бактыгулова 20
                    БИК 135011 р/с: 1350510024125670 СОМ
                  </p>
                </div>
                <div className="card_l">
                  <p className="lab_text">
                    Филиал ОАО «КБ Кыргызстан» КР, г Жалал-Абад, ул. Эркиндик,
                    13А БИК 103015 р/с:1031520000688925 СОМ
                  </p>
                </div>
              </div>
            </div>
            <div className="jobs">
              <h2 className="lab-titel_2">Вакансии</h2>
              <div className="card_l">
                <p className="lab_text">
                  Филиал ОАО «Керемет Банк» КР, г Жалал-Абад, ул. Токтогула 40
                  БИК 113017 р/с: 1360170000093380 СОМ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laboratory;
