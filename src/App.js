import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SecondPage from './SecondPage/SecondPage';
import ServerPage from './ServerPage/ServerPage';
import NotFound from './components/NotFound';

class App extends Component {

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={HomePage}
                />
                <Route path={'/second'} component={SecondPage} />
                <Route path={'/server'} component={ServerPage} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter((App));