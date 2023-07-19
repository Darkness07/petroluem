import React from "react";
import { useState } from "react";
import "../Home/procurement.css";
import downArrow from '../../assets/icons/downArrowIcon.svg'
function Procurement() {
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
  return (
    <>
      <div>
        <section className="section">
          <div className="container_procurement">
            <h1>Закупки</h1>
            <div className="cards">
              {cards.map((item, i) => {
                return (
                  <>
                    <div key={i} className="card">
                      <h3 className="item_title">{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="">Скачать требования <img src={downArrow} alt="arrow" /></a>
                    </div>
                  </>
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
