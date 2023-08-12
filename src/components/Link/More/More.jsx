import React from "react";
import "../More/more.css";
import moreImges from "../../../assets/images/DSC_0352_1 1.png";
import moreImges2 from "../../../assets/images/DSC_0352_1 1.png";
import img3 from "../../../assets/images/history3.JPG";
import img2 from "../../../assets/images/history2.svg";
import { useSelector } from "react-redux";
import { textFunc } from "../../../redux/reducers/app";

function More() {
  const text = useSelector(s => s.text);
  const lang = useSelector(s => s.app.lang);


  return (
    <div className="more-page">
      <div className="container">
        <h1>{textFunc(text.history, lang)}</h1>
        {/* История начало */}
        <div className="row">
          <div className="col-lg-6">
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">1995</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3> {textFunc(text.historyTitle1, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText1, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">6.10.1996</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle2, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText2, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">1998-2001</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3> {textFunc(text.historyTitle3, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText3, lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={moreImges} className="moreImges" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">07.2010 – 05.2011</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>
                  {textFunc(text.historyTitle4, lang)}
                  </h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText4, lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">11.2010 – 05.2011</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle5, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText5, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">03.2011 – 11.2012</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle6, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText6, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">06.10.2012</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle7, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText7, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">09.2013 – 09.2014</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle8, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText8, lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={img2} className="moreImges2" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">08.2018 – 12.2018</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle9, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText9, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">08.2019 – 09.2020</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle10, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText10, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">01.2019 – 04.2019</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle11, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText11, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">11.2021</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle12, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText12, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">06.2021 – 07.2021</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle13, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">
                  {textFunc(text.historyText13, lang)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text_m">
              <div className="more_p">
                <p className="data_p">09.2021 – 11.2021</p>
              </div>
              <div className="more_p_h3">
                <div className="titel_m">
                  <h3>{textFunc(text.historyTitle14, lang)}</h3>
                </div>
                <div className="p_m">
                  <p className="p-text-is">{textFunc(text.historyText14, lang)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6"></div>
        </div>
        {/* История конец */}


        {/* О нас начало*/}
        <div className="row">
          <div className="col-lg-6">
            <p className="p-text-is">
            {textFunc(text.historyText15, lang)}
            </p>
            <br />

            <p className="p-text-is">
            {textFunc(text.historyText16, lang)}
            </p>
            <br />
            <p className="p-text-is">
            {textFunc(text.historyText17, lang)}
            </p>
            <br />
            <p className="p-text-is">
            {textFunc(text.historyText18, lang)}
            </p>
            <br />
            <p className="p-text-is">
            {textFunc(text.historyText19, lang)}
            </p>
            <br />
            <p className="p-text-is">
            {textFunc(text.historyText20, lang)}
            </p>
            <br />
            <p className="p-text-is">
            {textFunc(text.historyText21, lang)}
            </p>
          </div>

          <div className="col-lg-6">
            <img src={img3} className="moreImges1_1" alt="" />
          </div>
        </div>
        {/* О нас конец*/}

      </div>
    </div>
  );
}

export default More;
