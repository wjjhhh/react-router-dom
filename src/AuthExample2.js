import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
const AuthExample2=()=>(
    <Router>
        <div>
            <AuthButton/>
            <ul>
                <li><Link to="/public">公开页面</Link></li>
                <li><Link to="/protected">非公开页面</Link></li>
            </ul>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/protected" component={Protected}/>
        </div>
    </Router>
)

const fakeAuth={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true;
        setTimeout(cb,100)
    },
    signout(cb){
        this.isAuthenticated=false;
        setTimeout(cb,100)
    }
}

const AuthButton=withRouter(({history})=>(
    fakeAuth.isAuthenticated?(
        <p>欢迎!
            <button onClick={()=>{
                fakeAuth.signout(()=>history.push('/'))
            }}></button>
        </p>
    ):(<p>请先登陆</p>)
))

const PrivateRoute=({component:Component,...rest})=>(
    <Route {...rest} render={
        props=>fakeAuth.isAuthenticated?(
            <Component {...props}/>
        ):(
            <Redirect to{{
                pathname:'/login',
                state:{from:props.location}
            }}/>
        )
    }/>
)

const Public=()=>(
    <div>公开页面</div>
    )

const Protected=()=>(
    <div>非公开的页面</div>
)

class Login extends Component{
    render(){
        return(
            <div>
                <button>登陆</button>
            </div>
        )
    }

}
export default AuthExample2