import React from 'react'
import 'normalize.css'

import '../style/main.scss'

const Header = ({ children, changeNavState, isNavOpen }) => (
    <div className="header">
        <span onClick={() => changeNavState(!isNavOpen)}>图</span>
        header
    </div>
);

export default Header;