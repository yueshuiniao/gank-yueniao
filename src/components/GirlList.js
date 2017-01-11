import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { scrollToBottom } from '../utils'
import '../style/girls.scss'
import GirlItem from './GirlItem'
import Loading from './Loading'

class GirlList extends Component {
    componentDidMount() {
        this.fetchGirlsData(1);
    }

    // componentDidUpdate() {

    // }

    fetchGirlsData(page) {
        const { fetchGirls  } = this.props;
        fetchGirls(page);
    }

    render(){
        const { girls, isFecthing } = this.props;
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
                <div className="girl-list" ref="girlList" onScroll={function(){alert('666')}}>
                    {
                        girls.map((v, k) => <GirlItem key={v._id} girl={v}/>)
                    }
                </div>    
            </div>
        );
    }
}

export default GirlList;