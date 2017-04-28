import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const ParamsExample=()=>(
    <Router>
    <div>
        <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/page1'>分页1</Link></li>
            <li><Link to='/page2'>分页2</Link></li>
        </ul>
        <Route exact path='/:diaoni' component={Child}/>
    </div>
    </Router>
)

const Child=({match})=>(
    <div>{match.params.diaoni}</div>
)

export default ParamsExample;