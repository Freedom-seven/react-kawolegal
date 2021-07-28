import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Startups from '../Pages/Startups/Startups';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/startups" component={Startups} />
                <Route exact path="/register" component={Register} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
