import React, { Component } from 'react'
// import 'normalize.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../style/main.scss'
import '../style/animate.scss'
import Header from './Header'
import Nav from '../containers/Nav'

class Main extends Component {
    componentDidMount() {
        const { fetchCity } = this.props
        fetchCity();
    }

    render() {
        const { children, changeNavState, isNavOpen, params } = this.props
        //这个动画有一个深坑，宽度变化时直接给本组件设宽度会使动画无效，要用本组件的子组件把本组件的宽度撑起来
        return (
            <div className="main">
                <ReactCSSTransitionGroup
                    className="nav-transition"
                    transitionName="navopen" 
                    component="div"
                    transitionEnterTimeout={600} 
                    transitionLeaveTimeout={500}
                >
                    { isNavOpen ? <Nav /> : '' }
                </ReactCSSTransitionGroup>
                <div className="content">
                    <Header 
                        changeNavState={changeNavState}
                        isNavOpen={isNavOpen}
                        tab={params.tab}
                    />
                    {children}    
                </div>
            </div>        
        );
    }
}

export default Main;