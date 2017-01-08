import React, { Component } from 'react';

import { scrollToBottom } from '../utils'
import '../style/girls.scss'
import GirlItem from './GirlItem'

class GirlList extends Component {
    componentDidMount() {
        this.fetchGirlsData(1);
        const me = this;
        scrollToBottom.onScrollEvent(() => me.fetchGirlsData(this.props.page + 1));
    }

    // componentDidUpdate() {
    //     if(this.refs.girlList.scrollTop>100) alert(0)
    //     console.log(this.refs.girlList.scrollTop)
    // }

    fetchGirlsData(page) {
        const { fetchGirls  } = this.props;
        fetchGirls(page);
    }

    render(){
        const { girls } = this.props;
        return (
            <div className="girl-list" ref="girlList">
                {
                    girls.map((v, k) => <GirlItem key={v._id} girl={v}/>)
                }
            </div>
        );
    }
}

export default GirlList;