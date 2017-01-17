import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { configTab } from '../utils'
import CommonItem from './CommonItem'
import GirlItem from './GirlItem'
import Loading from './Loading'

class commonList extends Component {
    componentDidMount() {
        console.log(configTab[this.props.params.tab], 666666666666)
        this.fetchListData(1, configTab[this.props.params.tab]);
    }

    componentDidUpdate(prevProps) {
        if(this.props.params.tab !== prevProps.params.tab && !this.props.list.length) this.fetchListData(1, configTab[this.props.params.tab]);
    }

    fetchListData(page, tab) {
        const { fetchList } = this.props;
        fetchList(page, tab);
    }

    scrollHandle(event) {
        // if(this.props.isNavOpen) return false;
        const { isFecthing, fetchList, page } = this.props;
        console.log(isFecthing, page)
        const contentDom = event.target;
        const scrollTop = contentDom.scrollTop;
        const scrollHeight = contentDom.scrollHeight;
        const clientHeight = contentDom.clientHeight;
        // console.log(scrollTop, scrollHeight, clientHeight)
        // console.log(scrollTop + clientHeight >= scrollHeight)
        //这里写为scrollHeight - 100有多次取数据bug
        if(scrollTop + clientHeight >= (scrollHeight - 10)) !isFecthing && fetchList(page + 1, configTab[this.props.params.tab]);
    }

    render(){
        const { list, isFecthing, params, isNavOpen } = this.props;
        const tab = params.tab;
        const getItem = () => {
            if(tab === 'girls') {
                return list.map((v, k) => <GirlItem key={v._id} item={v}/>);
            }else if(tab === 'all') {
                return list.map((v, k) => {
                    return v.type === '福利' ? <GirlItem key={v._id} item={v}/> : <CommonItem key={v._id} item={v}/>
                });
            }else {
                return list.map((v, k) => <CommonItem key={v._id} item={v}/>);
            }
        }
        return (
            <div className="list-container">
                <ReactCSSTransitionGroup 
                    transitionName="loading" 
                    component="div"
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout={300}
                >
                    { isFecthing ? <Loading /> : '' }
                </ReactCSSTransitionGroup>
                <div className={ isNavOpen ? "common-list-hidden" : "common-list-scroll" } onScroll={(e) => this.scrollHandle(e)}>
                    {
                        getItem()
                    }
                </div>    
            </div>
        );
    }
}

export default commonList;