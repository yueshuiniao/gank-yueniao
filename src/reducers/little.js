import { CHANGE_NAV_STATE } from '../actions'

export const isNavOpen = (state = false, action) => {
    switch(action.type) {
        case CHANGE_NAV_STATE:
            return action.isNavOpen
        default:
            return state;
    }
}
