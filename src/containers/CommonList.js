import { connect } from 'react-redux';

import { fetchList } from '../actions';
import CommonList from '../components/CommonList';

const mapStateToProps = ({ front }) => {
    return { ...front }
}

export default connect(mapStateToProps, { fetchList })(CommonList);