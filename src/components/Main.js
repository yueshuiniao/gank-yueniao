import React, { Component } from 'react'
import 'normalize.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../style/main.scss'
import '../style/animate.scss'
import Header from './Header'
import Nav from './Nav'

class Main extends Component {
    scrollHandle(event) {
        if(this.props.isNavOpen) return false;
        const { isFecthing, fetchGirls, page } = this.props;
        const contentDom = event.target;
        const scrollTop = contentDom.scrollTop;
        const scrollHeight = contentDom.scrollHeight;
        const clientHeight = contentDom.clientHeight;
        // console.log(contentDom.scrollTop, contentDom.scrollHeight, contentDom.clientHeight)

        if(scrollTop + clientHeight >= scrollHeight) !isFecthing && fetchGirls(page + 1);
    }

    render() {
        const { children, changeNavState, isNavOpen, fetchGirls } = this.props
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
                <div className="content" onScroll={(e) => this.scrollHandle(e)}>
                    <Header 
                        changeNavState={changeNavState}
                        isNavOpen={isNavOpen}
                    />
                    {children}    
                </div>
            </div>        
        );
    }
}

export default Main;