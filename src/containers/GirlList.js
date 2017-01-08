import { connect } from 'react-redux';

import { fetchGirls } from '../actions';
import GirlList from '../components/GirlList';

const mapStateToProps = ({ girls, page }) => {
    return { girls, page }
}

export default connect(mapStateToProps, { fetchGirls })(GirlList);