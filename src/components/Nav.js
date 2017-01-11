import React from 'react'
import { Link } from 'react-router'

import '../style/main.scss'

const Nav = () => (
    <div className="nav">
        <div className="nav-con">
            <ul>
                <li>
                    <Link to="/girls">看妹子</Link>
                </li>
                <li>
                    <Link to="/front">前端</Link>
                </li>
            </ul>    
        </div>
    </div>
);

export default Nav;