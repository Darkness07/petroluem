import leaderone from "../../../assets/images/photo1.svg";
import leadertwo from "../../../assets/images/photo2.svg";
import leaderthree from "../../../assets/images/photo3.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { textFunc } from "../../../redux/reducers/app";
import { useSelector } from "react-redux";

import "../Leaders/leaders.css";
function Leaders() {
const text = useSelector(s => s.text);
const lang = useSelector(s => s.app.lang);

  return (
    <div className="leaders_container">
      <div className="container">
      <h1 className="leaders_title">{textFunc(text.leaders, lang)}</h1>
      <div className="row">
        <div className="col-xl-4 col-sm-6">
        <div className="card-l">
          <img src={leaderone} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="leader_item_title">{textFunc(text.leaderTitle1, lang)}</h2>

            <p className="leader_card-text">{textFunc(text.leaderText1, lang)}</p>
          </div>
        </div>
        </div>
        <div className="col-xl-4 col-sm-6">
        <div className="card-l">
          <img src={leadertwo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="leader_item_title">{textFunc(text.leaderTitle2, lang)}</h2>
            <p className="leader_card-text">
            {textFunc(text.leaderText2, lang)}
            </p>
          </div>
        </div>
        </div>
        <div className="col-xl-4 col-sm-6">
        <div className="card-l">
          <img src={leaderthree} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="leader_item_title">{textFunc(text.leaderTitle3, lang)}</h2>
            <p className="leader_card-text">
            {textFunc(text.leaderText3, lang)}
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>


    </div>
  );
}

export default Leaders;
