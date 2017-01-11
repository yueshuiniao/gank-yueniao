import { connect } from 'react-redux'

import Main from '../components/Main'
import { changeNavState, fetchGirls } from '../actions';

const mapStateToProps = (state) => {
    return {
        isNavOpen: state.isNavOpen,
        isFecthing: state.isFecthing,
        page: state.page
    }
}

export default connect(mapStateToProps, { changeNavState, fetchGirls })(Main);