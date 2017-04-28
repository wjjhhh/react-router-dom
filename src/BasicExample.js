import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const BasicExample=()=>(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">分页1</Link></li>
                <li><Link to="/page2">分页2</Link></li>
                <li><Link to="/topics">主题列表</Link></li>
            </ul>
            <Route exact path='/' component={Home}/>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
            <Route path='/topics' component={Topics}/>
        </div>
    </Router>
)

const Home=()=>(
    <div>首页</div>
)

const Page1=()=>(
    <div>分页1</div>
)

const Page2=()=>(
    <div>分页2</div>
)

const Topics=({match})=>(
    <div>
        <h2>主题列表</h2>
        <ul>
            <li><Link to={`${match.url}/aaa`}>AAA</Link></li>
            <li><Link to={`${match.url}/bbb`}>BBB</Link></li>
            <li><Link to={`${match.url}/ccc`}>CCC</Link></li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={()=>(
            <div>选择主题</div>
        )}/>
    </div>
)

const Topic=({match})=>(
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
export default BasicExample;