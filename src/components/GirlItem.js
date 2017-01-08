import React, { Component } from 'react';

class GirlItem extends Component {
    render(){
        return (
            <div>
                <img className="girlItem" src={this.props.girl.url} alt=""/>
            </div>
            
        );
    }
}

export default GirlItem;