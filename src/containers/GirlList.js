import { connect } from 'react-redux';

import { fetchList } from '../actions';
import GirlList from '../components/GirlList';

const mapStateToProps = ({ girls }) => {
    return { ...girls }
}

export default connect(mapStateToProps, { fetchList })(GirlList);