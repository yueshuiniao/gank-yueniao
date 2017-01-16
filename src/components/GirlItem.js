import React, { Component } from 'react';

class GirlItem extends Component {
    render(){
        return (
            <div className="girl-item">
                <img src={this.props.item.url} alt=""/>
            </div>
            
        );
    }
}

export default GirlItem;