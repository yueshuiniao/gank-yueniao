import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import '../style/girls.scss'
import CommonItem from './CommonItem'
import Loading from './Loading'

class commonList extends Component {
    componentDidMount() {
        if(this.props.list.length) return;
        this.fetchListData(1);
    }

    // componentDidUpdate() {

    // }

    fetchListData(page) {
        const { fetchList } = this.props;
        fetchList(page);
    }

    render(){
        const { list, isFecthing } = this.props;
        return (
            <div>
                <ReactCSSTransitionGroup 
                    transitionName="loading" 
                    component="div"
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout={300}
                >
                    { isFecthing ? <Loading /> : '' }
                </ReactCSSTransitionGroup>
                <div className="common-list">
                    {
                        list.map((v, k) => <CommonItem key={v._id} item={v}/>)
                    }
                </div>    
            </div>
        );
    }
}

export default commonList;