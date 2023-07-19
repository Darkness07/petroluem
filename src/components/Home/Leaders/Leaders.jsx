import leaderone from "../../../assets/images/photo1.svg";
import leadertwo from "../../../assets/images/photo2.svg";
import leaderthree from "../../../assets/images/photo3.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Leaders/leaders.css";
function Leaders() {
  return (
    <div className="leaders_container">
     <h1 className="leaders_title">Руководители</h1>
    <div className="leader_cont">
   
    <div className="container_l">
      
        <div className="card-l">
          <img src={leaderone} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 className="leader_item_title">Матисаков Байгазы Абдигапарович</h2>

            <p class="leader_card-text">Президент ЗАО "Кыргыз Петролеум Компани"</p>
          </div>
        </div>
      </div>
      <div className="container_l">
        <div className="card-l">
          <img src={leadertwo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 className="leader_item_title">Каримов Азамат Абдукадырович</h2>
            <p class="leader_card-text">
              Управляющий НПЗ, (нефтеперерабатывающие завод)
            </p>
          </div>
        </div>
      </div>
      <div className="container_l">
        <div className="card-l">
          <img src={leaderthree} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 className="leader_item_title">Энназаров Эрмек Таджибаевич</h2>
            <p class="leader_card-text">
              Начальник МТО и З, ( отдел материально-технического обеспечения и
              закупок)
            </p>
          </div>
        </div>
      </div>

    </div>
      
    </div>
  );
}

export default Leaders;
