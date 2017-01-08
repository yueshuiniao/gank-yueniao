import { connect } from 'react-redux';

import * as actions from '../actions';
import Hello from '../components/Hello';

const mapStateToProps = (state) => {
    return {
        testProps: 666
    }
}

export default connect(mapStateToProps, actions)(Hello);