import React from 'react';
import './prodaction.css';
import prodactionImg from './prodaction-img.jpg';
import { useSelector } from 'react-redux';
import { textFunc } from '../../redux/reducers/app';

const ProdactionPage = () => {
    const lang = useSelector(s => s.app.lang);
    const text = useSelector(s => s.text);
    return (
        <div className="prodaction-page">
        <div className="container">
                 <div className="row">
                     <div className="col-6">
                         <p className='prodaction-page-text'>
                         {textFunc(text.prodactionText, lang)}
                         </p>
                     </div>
                     <div className="col-6">
                         <img src={prodactionImg} alt="" className="prodaction-page-img" />
                     </div>
                 </div>
                 </div>

             </div>
    );
}

export default ProdactionPage;
