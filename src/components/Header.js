import React from 'react'
import 'normalize.css'

import '../style/main.scss'

const Header = ({ children, changeNavState, isNavOpen }) => (
    <div className="header">
        <i className="iconfont icon-zhankai open-nav"
             onClick={() => changeNavState(!isNavOpen)}
        >
        </i>
        
    </div>
);

export default Header;