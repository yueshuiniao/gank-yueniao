import axios from 'axios'

const pageSize = 10

export const FETCH_GIRLS_REQUEST = 'FETCH_GIRLS_REQUEST'
export const FETCH_GIRLS_SUCCESS = 'FETCH_GIRLS_SUCCESS'
export const FETCH_GIRLS_FAILURE = 'FETCH_GIRLS_FAILURE'
export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'  //改变侧边导航开合状态

export const fetchGirls = (page) => (dispatch, getState) =>{
    // if(getIsFetching(getState(), filter)){
    //     return Promise.resolve();
    // }

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