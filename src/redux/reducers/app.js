import axios from 'axios';
const SET_LANG = 'SET_LANG';
const GET_NEWS = 'GET_NEWS';
const GET_HISTORY = 'GET_HISTORY';
const GET_JOBS = 'GET_JOBS';
const GET_NEWS_MEDIA = 'GET_NEWS_MEDIA';
const GET_PHOTO_GALLERY = 'GET_PHOTO_GALLERY';
const GET_PRICING = 'GET_PRICING';
const GET_PROCUREMENT = 'GET_PROCUREMENT';
const GET_TEAM = 'GET_TEAM';
const GET_VIDEO_GALLERY = 'GET_VIDEO_GALLERY';
const GET_NEWS_SINGLE = 'GET_NEWS_SINGLE';

const domain = 'http://80.90.183.147/api/'

const initState = {
    lang: 'ru',
    news: [],
    newsSingle: {},
    history: [],
    jobs: [],
    newsMedia: [],
    photoGallery: [],
    pricing: [],
    procurement: [],
    team: [],
    videoGallery: [],
};




export const app = (state = initState, action) => {
    const createCase = (key) =>{
        return {
            ...state,
            [key]: action[key]
        }
    }
    switch (action.type) {
        case SET_LANG :{
            return createCase('lang')
        }

        case GET_NEWS :{
            return createCase('news')
        }
        case GET_NEWS_SINGLE:{
            return createCase('newsSingle')
        }
        case GET_HISTORY :{
            return createCase('history')
        }
        case GET_JOBS :{
            return createCase('jobs')
        }
        case GET_NEWS_MEDIA:{
            return createCase('newsMedia')
        }
        case GET_PHOTO_GALLERY:{
            return createCase('photoGallery')
        }
        case GET_PRICING:{
            return createCase('pricing')
        }
        case GET_PROCUREMENT:{
            return createCase('procurement')
        }
        case GET_TEAM:{
            return createCase('team')
        }
        case GET_VIDEO_GALLERY:{
            return createCase('videoGallery')
        }


        default:
            return state
    }
};

const getApi = (type, key, url) =>{
    return (dispatch) =>{
        axios(`${domain}${url}/`)
        .then(({data}) => dispatch({type, [key]:data}))
    }
}

export const setLang = (lang) => {
    return (dispatch) => {
        return dispatch({ type: SET_LANG, lang })
    }
}

export const textFunc = (text, lang = initState.lang) =>{
    if (text[lang]) return text[lang]
    return {
        title: 'Нет перевода',
        description: 'Нет перевода'
    }
}


export const getNews = () =>{
    return getApi(GET_NEWS, 'news', 'news');
}

export const getHistory = () =>{
    return getApi(GET_HISTORY,'history', 'history');
}
export const getJobs = () =>{
    return getApi(GET_JOBS, 'jobs', 'jobs')
}

export const getNewsMedia = () =>{
    return getApi(GET_NEWS_MEDIA, 'newsMedia', 'news_media')
}

export const getPhotoGallery = () =>{
    return getApi(GET_PHOTO_GALLERY, 'photoGallery', 'photo_gallery')

}

export const getPricing = () =>{
    return getApi(GET_PRICING, 'pricing', 'pricing')
}

export const getProcurement = () =>{
    return getApi(GET_PROCUREMENT, 'procurement', 'procumerent')
}

export const getTeam = () =>{
    return getApi(GET_TEAM, 'team', 'team')
}

export const getVideoGallery = () =>{
    return getApi(GET_VIDEO_GALLERY, 'videoGallery', 'video_gallery')
}

export const getNewsSingle = (id) =>{
    return getApi(GET_NEWS_SINGLE, 'newsSingle', `news/${id}`)
}
