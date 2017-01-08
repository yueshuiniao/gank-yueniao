import React from 'react'
import 'normalize.css'

import '../style/main.scss'
import Nav from './Nav'

const Main = ({children}) => (
    <div>
        <Nav />
        {children}
    </div>
);

export default Main;