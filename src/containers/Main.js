import { connect } from 'react-redux'

import Main from '../components/Main'
import { changeNavState, fetchList, fetchCity } from '../actions';

const mapStateToProps = (state, { params }) => {
    // console.log(params)
    // console.log(params.tab)
    // console.log(state[params.tab])
    // console.log(state[params.tab].isFecthing)
    return {
        isNavOpen: state.isNavOpen,
        isFecthing: state[params.tab].isFecthing,
        page: state[params.tab].page
    }
}

export default connect(mapStateToProps, { changeNavState, fetchList, fetchCity })(Main);