import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './login/login_container';
import SplashContainer from './splash_page/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        {/* <header>
            <h1>Tracker</h1>
            <LoginContainer />
        </header> */}

        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;