import axios from 'axios'

const pageSize = 10

export const FETCH_GIRLS_REQUEST = 'FETCH_GIRLS_REQUEST'
export const FETCH_GIRLS_SUCCESS = 'FETCH_GIRLS_SUCCESS'
export const FETCH_GIRLS_FAILURE = 'FETCH_GIRLS_FAILURE'
export const FETCH_LIST_REQUEST = 'FETCH_List_REQUEST'
export const FETCH_LIST_SUCCESS = 'FETCH_List_SUCCESS'
export const FETCH_LIST_FAILURE = 'FETCH_List_FAILURE'
export const FETCH_DAY_REQUEST = 'FETCH_DAY_REQUEST'
export const FETCH_DAY_SUCCESS = 'FETCH_DAY_SUCCESS'
export const FETCH_DAY_FAILURE = 'FETCH_DAY_FAILURE'

export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'  //改变侧边导航开合状态
export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST'
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS'
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE'
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'



export const fetchGirls = (page) => (dispatch, getState) =>{
    dispatch({
        type: FETCH_GIRLS_REQUEST,
        page,
    });

    return axios.get(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${pageSize}/${page}`).then(
        ({ data }) => {
            console.log(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${pageSize}/${page}`)
            console.log(data)
            dispatch({
                type: FETCH_GIRLS_SUCCESS,
                page,
                results: data.results
            })
        },
        error => {
            dispatch({
                type: FETCH_GIRLS_FAILURE,
                page,
                message: error.message || 'Something went wrong.',
            })
        }   
    );
}

export const changeNavState = (isNavOpen) => ({
    type: CHANGE_NAV_STATE,
    isNavOpen
})

export const fetchList = (page, tab = '前端') => (dispatch, getState) =>{
    dispatch({
        type: FETCH_LIST_REQUEST,
        page,
        tab
    });

    return axios.get(`http://gank.io/api/data/${encodeURI(tab)}/${pageSize}/${page}`).then(
        ({ data }) => {
            console.log(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${pageSize}/${page}`)
            console.log(data)
            dispatch({
                type: FETCH_LIST_SUCCESS,
                page,
                tab,
                results: data.results
            })
        },
        error => {
            dispatch({
                type: FETCH_LIST_FAILURE,
                page,
                tab,
                message: error.message || 'Something went wrong.',
            })
        }   
    );
}

//看接口好多天都没数据，先不做这个了
// export const fetchDayList = (date = currDay) => (dispatch, getState) =>{
//     dispatch({
//         type: FETCH_DAY_REQUEST,
//         date
//     });

//     return axios.get(`http://gank.io/api/day/${date}`).then(
//         ({ data }) => {
//             console.log(`http://gank.io/api/day/${date}`)
//             console.log(data)
//             dispatch({
//                 type: FETCH_DAY_SUCCESS,
//                 date,
//                 results: data.results
//             })
//         },
//         error => {
//             dispatch({
//                 type: FETCH_DAY_FAILURE,
//                 date,
//                 message: error.message || 'Something went wrong.',
//             })
//         }   
//     );
// }

export const fetchWeather = (city) => (dispatch, getState) =>{
    dispatch({
        type: FETCH_WEATHER_REQUEST
    });

    return axios.get(`https://free-api.heweather.com/v5/hourly?city=${city}&key=dc8fb4f85af34ac181d99afa27164508`).then(
        ({ data }) => {
            console.log(`https://free-api.heweather.com/v5/hourly?city=${city}&key=dc8fb4f85af34ac181d99afa27164508`)
            dispatch({
                type: FETCH_WEATHER_SUCCESS,
                weather: data.HeWeather5[0]
            })
        },
        error => {
            dispatch({
                type: FETCH_WEATHER_FAILURE
            })
        }   
    );
}

export const fetchCity = () => (dispatch, getState) =>{
    dispatch({
        type: FETCH_CITY_REQUEST
    });
    var citysearch = new window.AMap.CitySearch();  //AMap不加window ESLint会报错，暂时还没搞懂要怎么配置一下，在packjson里配置了env AMap: true好戏那个不行
    
    return citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            console.log(result.city, 555)
            if (result && result.city) {
                var city = result.city;
                dispatch(fetchWeather(city));
                dispatch({
                    type: FETCH_CITY_SUCCESS,
                    city
                })
            }
        } else {
            console.log(result.info);
        }
    });
}