import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';//Switch serve para fazer com que apenas uma rota seja acessada pelo usuario
import Feed from './pages/Feed';
import New from './pages/New';
import Login from './pages/Login';
import { isAutenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) =>(
    <Route  
        {...rest} 
        render={props => 
        isAutenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: {from: props.location} }} />
        )
        }
    />
);

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/Feed" component={Feed} />
                <PrivateRoute path="/New" component={New} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;