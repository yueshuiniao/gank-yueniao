import { CHANGE_NAV_STATE, FETCH_CITY_REQUEST, FETCH_CITY_SUCCESS, FETCH_CITY_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../actions'

export const isNavOpen = (state = false, action) => {
    switch(action.type) {
        case CHANGE_NAV_STATE:
            return action.isNavOpen
        default:
            return state;
    }
}

export const city = (state = '', action) => {
    switch(action.type) {
        case FETCH_CITY_SUCCESS:
            return action.city;
        default:
            return state;
    }
}

export const weather = (state = {}, action) => {
    switch(action.type) {
        case FETCH_WEATHER_SUCCESS:
            return action.weather;
        default:
            return state;
    }
}
