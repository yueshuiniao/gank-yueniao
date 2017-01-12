import axios from 'axios'

const pageSize = 10

export const FETCH_GIRLS_REQUEST = 'FETCH_GIRLS_REQUEST'
export const FETCH_GIRLS_SUCCESS = 'FETCH_GIRLS_SUCCESS'
export const FETCH_GIRLS_FAILURE = 'FETCH_GIRLS_FAILURE'
export const FETCH_LIST_REQUEST = 'FETCH_List_REQUEST'
export const FETCH_LIST_SUCCESS = 'FETCH_List_SUCCESS'
export const FETCH_LIST_FAILURE = 'FETCH_List_FAILURE'

export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'  //改变侧边导航开合状态

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