import React from 'react'
import 'normalize.css'

import '../style/main.scss'
import { configTab } from '../utils'

const Header = ({ children, changeNavState, isNavOpen, tab }) => (
    <div className="header">
        <i className="iconfont icon-zhankai open-nav"
             onClick={() => changeNavState(!isNavOpen)}
        >
        </i>
        <div className="header-title">{ tab === 'girls' ? '看妹子' : configTab[tab] }</div>
    </div>
);

export default Header;