import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textFunc, getNews } from '../../redux/reducers/app';
import './newsPage.css';
import { Link } from 'react-router-dom';

const NewsPage = () => {
const text = useSelector(s => s.text);
const news = useSelector(s => s.app.news);
const lang = useSelector(s => s.app.lang);
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getNews());
}, [])
    return (
        <div className='newsPage'>
            <div className="container">
                <h1>{textFunc(text.news, lang)}</h1>
                <div className="row">
                    {
                        news.map(item =>{
                            return<div key={item.id} className="col-lg-4 col-sm-6">
                            <div className="news_card">
                                              <img
                                                src={item.main_image}
                                                className="card-images"
                                                width="240"
                                                height="300"
                                                alt=""
                                              />

                                              <div className="news_card_body">
                                                <h3 className="news_card_title">
                                                  {
                                                  textFunc(item.translations, lang).title.length > 15
                                                  ? textFunc(item.translations, lang).title.slice(0, 12) + '...'
                                                  : textFunc(item.translations, lang).title
                                                  }
                                                </h3>
                                                <p className="news_card_text">
                                                  {textFunc(item.translations, lang).description.length > 25
                                                  ? textFunc(item.translations, lang).description.slice(0, 23) + '...'
                                                : textFunc(item.translations, lang).description}
                                                </p>
                                                <div className="card_more_box">
                                                  <Link to={`/news/news_single/${item.id}`} className="news_more">{textFunc({ru:'Подробнее', es: 'Кененирээк', en: 'More'}, lang)}</Link>
                                                  <p className="news_more">{item.created}</p>
                                                </div>
                                              </div>
                                            </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default NewsPage;
