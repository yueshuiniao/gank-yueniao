import React from 'react'
import { Link } from 'react-router'

import '../style/main.scss'
import userHead from '../images/dog.jpg'    //图片直接引入，棒

const Nav = ({ city, weather }) => (
    <div className="nav">
        <div className="nav-con">
            <div className="nav-user">
                <img className="nav-user-header" src={userHead}></img>
                <div className="nav-sign">Stay hungry, Study foolish</div>
            </div>
            <ul>
                <li className="nav-item">
                    <Link to="/girls" activeClassName="nav-active">
                        <i className="iconfont icon-girl"></i>看妹子
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/front" activeClassName="nav-active">
                        <i className="iconfont icon-qianduankaifa"></i>前端
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/all" activeClassName="nav-active">
                        <i className="iconfont icon-other"></i>All
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Android" activeClassName="nav-active">
                        <i className="iconfont icon-android"></i>Android
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/iOS" activeClassName="nav-active">
                        <i className="iconfont icon-ios"></i>iOS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/other" activeClassName="nav-active">
                        <i className="iconfont icon-iconfontother"></i>拓展资源
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/App" activeClassName="nav-active">
                        <i className="iconfont icon-app1"></i>App
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/day" activeClassName="nav-active">
                        <i className="iconfont icon-day"></i>Everyday
                    </Link>
                </li>    
                
                {
                    city ? 
                    (
                        <div className="city-weather">
                            {city ? <div>{city}</div> : ''}
                            <div>{(weather.tmp && weather.cond) ? (weather.cond + ' ' + weather.tmp + '℃') : weather.msg}</div>
                        </div>
                    ) 
                    : ''
                }
                
            </ul>


        </div>
    </div>
);

export default Nav;