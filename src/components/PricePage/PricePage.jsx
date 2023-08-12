import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPricing, textFunc } from "../../redux/reducers/app";
import './pricePage.css';
import priceBg from './price-bg.png';

const PricePage = () => {
    const dispatch = useDispatch();
    const pricing = useSelector(s => s.app.pricing);
    const lang = useSelector(s => s.app.lang);
    const text = useSelector(s => s.text);

    useEffect(()=>{
        dispatch(getPricing())
    })
    return (
        <div className='price-page'>
            <h2 className="text-titel">{textFunc(text.productPrices, lang)} <span>{textFunc(text.mainPage, lang)} > {textFunc(text.productPrices, lang)}</span></h2>
<div className="container">
<img src={priceBg} alt="" className="price-bg" />

          <div className="price-container">
            <div className="price-titel">

              <div className="product-name">
                <div className="product-text">
                  <p>{textFunc(text.payment, lang)}</p>
                </div>
                <div className="product-text">
                  <p>{textFunc(text.taxes, lang)}</p>
                </div>
                <div className="product-text">
                  <p>{textFunc(text.ai_80, lang)}</p>
                </div>
                <div className="product-text ">
                  <p className="big">{textFunc(text.diesel, lang)}</p>
                </div>
                <div className="product-text">
                  <p>{textFunc(text.mazmut, lang)}</p>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product1">
                {
                  pricing.map(item =>{
                    return <p key={item.id} className="product_text">{textFunc(item.translations, lang).payment}</p>
                  })
                }
                <p className="product_text">Безналичная</p>
              </div>

              <div className="product1">
                <p className="product_text">с НДС и НСП</p>
                <p className="product_text">с НДС и НСП</p>
              </div>

              <div className="product1">
              {
                  pricing.map(item =>{
                    return <p key={item.id} className="product_text">{textFunc(item.translations, lang).ai_80}</p>
                  })
                }
                <p className="product_text">41,00 сом за 1л</p>
              </div>
              <div className="product1">
              {
                  pricing.map(item =>{
                    return <p key={item.id} className="product_text">{textFunc(item.translations, lang).disel}</p>
                  })
                }
                <p className="product_text">60,00 сом за 1л</p>
              </div>

              <div className="product1">
              {
                  pricing.map(item =>{
                    return <p key={item.id} className="product_text">{textFunc(item.translations, lang).mazmut}</p>
                  })
                }
                <p className="product_text">24000,00 сом за 1 тн</p>
              </div>
            </div>
          </div>
        </div>


        <div className="container_mobile-table container">
        
        <div className="table">
          <div className="data">
            <span className="text_data1">Бензин АИ-80</span>
            <span className="text_data2">41,00 сом за 1л</span>
          </div>
          <div className="data">
            <div className="p_l">
              <p className="text_data1">Дизельное топливо </p>
              <p className="text_data1">марки Л-0,2-40</p>
            </div>

            <span className="text_data2">60,00 сом за 1л</span>
          </div>
          <div className="data_l">
            <span className="text_data1">Мазмут М-100</span>
            <span className="text_data2">24000,00 сом за 1 тн</span>
          </div>
        </div>
      </div>
        <div className="container">
  <p className="price-info">*Форма оплаты: наличная или безналичная</p>
  <p className="price-info">*Налоги: с НДС и НСП</p>

</div>
        </div>
    );
}

export default PricePage;
