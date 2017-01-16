import React from 'react'
import { Link } from 'react-router'

import '../style/main.scss'

const Nav = () => (
    <div className="nav">
        <div className="nav-con">
            <ul>
                <li>
                    <Link to="/girls" activeClassName="nav-active">看妹子</Link>
                </li>
                <li>
                    <Link to="/front" activeClassName="nav-active">前端</Link>
                </li>
                <li>
                    <Link to="/Android" activeClassName="nav-active">Android</Link>
                </li>
                <li>
                    <Link to="/iOS" activeClassName="nav-active">iOS</Link>
                </li>
                <li>
                    <Link to="/other" activeClassName="nav-active">拓展资源</Link>
                </li>
            </ul>    
        </div>
    </div>
);

export default Nav;