import axios from 'axios';

const pageSize = 10;

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchGirls = (page) => (dispatch, getState) =>{
    // if(getIsFetching(getState(), filter)){
    //     return Promise.resolve();
    // }

    dispatch({
        type: FETCH_TODOS_REQUEST,
        page,
    });

    return axios.get(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${pageSize}/${page}`).then(
        ({ data }) => {
            console.log(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/${pageSize}/${page}`)
            console.log(data)
            dispatch({
                type: FETCH_TODOS_SUCCESS,
                page,
                results: data.results
            })
        },
        error => {
            dispatch({
                type: FETCH_TODOS_FAILURE,
                page,
                message: error.message || 'Something went wrong.',
            })
        }   
    );
}