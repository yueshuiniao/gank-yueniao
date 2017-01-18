import { connect } from 'react-redux'

import Nav from '../components/Nav'

const mapStateToProps = (state) => {
    return {
        city: state.city,
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Nav);