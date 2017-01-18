import React from 'react'
import 'normalize.css'

import '../style/main.scss'
import { configTab } from '../utils'

const Header = ({ children, changeNavState, isNavOpen, tab }) => {
    const getHeadTitle = () => {
        if(tab === 'girls') {
            return '看妹子';
        }else if(tab === 'all') {
            return 'All';
        }else {
            return configTab[tab];
        }
    }

    return (
        <div className="header">
            <i className="iconfont icon-zhankai open-nav"
                 onClick={() => changeNavState(!isNavOpen)}
            >
            </i>
            <div className="header-title">{ getHeadTitle() }</div>
        </div>    
    )
}

export default Header