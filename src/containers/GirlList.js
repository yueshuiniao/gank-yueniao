import { connect } from 'react-redux';

import { fetchGirls } from '../actions';
import GirlList from '../components/GirlList';

const mapStateToProps = ({ girls, page, isFecthing }) => {
    return { girls, page, isFecthing }
}

export default connect(mapStateToProps, { fetchGirls })(GirlList);