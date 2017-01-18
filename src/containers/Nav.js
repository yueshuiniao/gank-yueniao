import { connect } from 'react-redux'

import Nav from '../components/Nav'

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps)(Nav);