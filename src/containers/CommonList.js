import { connect } from 'react-redux';

import { fetchList } from '../actions';
import CommonList from '../components/CommonList';

const mapStateToProps = (state, { params }) => {
    return { ...state[params.tab], isNavOpen: state.isNavOpen }
}

export default connect(mapStateToProps, { fetchList })(CommonList);