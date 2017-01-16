import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../style/girls.scss'
import GirlItem from './GirlItem'
import Loading from './Loading'

class GirlList extends Component {
    componentDidMount() {
        if(this.props.list.length) return;
        this.fetchGirlsData(1, '福利');
    }

    // componentDidUpdate() {

    // }

    fetchGirlsData(page, tab) {
        const { fetchList  } = this.props;
        fetchList(page, tab);
    }

    render(){
        const { list, isFecthing } = this.props;
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
                <div className="girl-list">
                    {
                        list.map((v, k) => <GirlItem key={v._id} girl={v}/>)
                    }
                </div>    
            </div>
        );
    }
}

export default GirlList;