import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { textFunc, getNewsSingle } from "../../redux/reducers/app";
import { useEffect } from "react";
import './newsSinglePage.css';

const NewsSinglePage = () => {
    const newsSingle = useSelector(s => s.app.newsSingle);
    const lang = useSelector(s => s.app.lang);
    const text = useSelector(s => s.text);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
       dispatch( getNewsSingle(params.id))
    },[])
    return (
        <div className="news-single-page">
            <div className="container">
                {
                    JSON.stringify(newsSingle) !== '{}' && newsSingle
                    ?<div className="row">
                    <div className="col-6">
                        <p className="news-single-created">{newsSingle.created}</p>
                        <h1 className="news-single-title">{textFunc(newsSingle.translations, lang).title}</h1>
                        <p className="news-single-text">{textFunc(newsSingle.translations, lang).description}</p>
                    </div>
                    <div className="col-6">
                        <img src={newsSingle.main_image} alt="" className="news-single-img" />
                    </div>
                </div>
                    : ''
                }

                <button onClick={()=> navigate(-1)} className="news-single-back"> {textFunc(text.back, lang)}</button>
            </div>
        </div>
    );
}

export default NewsSinglePage;
