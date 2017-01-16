import React from 'react'

import { timeFormat } from '../utils'

const CommonItem = ({item}) => (
    <a className="common-item" href={item.url}>
        <div>{item.desc}</div>
        <div className="item-msg">
            <span className="item-time">{ timeFormat(item.publishedAt) }</span>
            {' '}
            <span className="item-author">{ item.who ? `(${item.who})` : '' }</span>
        </div>
    </a>
);

export default CommonItem;