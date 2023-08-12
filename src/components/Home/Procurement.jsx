import React from "react";
import { useState,useEffect } from "react";
import "../Home/procurement.css";
import downArrow from '../../assets/icons/downArrowIcon.svg'
import { useDispatch, useSelector } from "react-redux";
import { textFunc, getProcurement } from "../../redux/reducers/app";

function Procurement() {
const dispatch = useDispatch();
const procurementList = useSelector(s => s.app.procurement);
const text = useSelector(s => s.text);
const lang = useSelector(s => s.app.lang);

  const [cards, setfirst] = useState([
    {
      id: 1,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 2,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 3,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 4,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 5,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 6,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 7,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    {
      id: 8,
      title: "№ конкурса 230405-42",
      text: "Приобретение услуг по внесению изменений в Учетную политику",
      file: "Скачать требования",
    },
    // {
    //   id: 9,
    //   title: "№ конкурса 230405-42",
    //   text: "Приобретение услуг по внесению изменений в Учетную политику",
    //   file: "Скачать требования",
    // },
  ]);

  useEffect(()=>{
    dispatch(getProcurement());
  }, [])
  return (
    <>
      <div className="procurement">
        <section className="section">
          <div className="container">
            <h1 className="procurement-title">{textFunc(text.purchases, lang)}</h1>
            <div className="row">
              {procurementList.map((item) => {
                return (
                  <div key={item.id} className="col-lg-4 col-md-6">
                    <div className="card">
                      <h3 className="item_title">{textFunc(item.translations, lang).title}</h3>
                      <p>{textFunc(item.translations, lang).description}</p>
                      <a href={item.requirements} download={true}>{textFunc({
                        ru: 'Скачать требования ',
                        es: 'Талаптарды жүктөп алуу',
                        en: 'Download Requirements'
                      }, lang)}<img src={downArrow} alt="arrow" /></a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Procurement;
