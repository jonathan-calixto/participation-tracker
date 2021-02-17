import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash_page/splash";
import LoginHook from "./session_form/LoginHook";
import SignupHook from "./session_form/SignupHook";
import StudentCreateContainer from "./students/student_create_container";

export default function App() {
  return (
    <div className="main">
      {/* <header>
            <h1>Tracker</h1>
            <LoginContainer />
        </header> */}
      <Switch>
        <Route exact path="/" component={Splash} />
        <AuthRoute exact path="/login/" component={LoginHook} />
        <AuthRoute exact path="/signup/" component={SignupHook} />
        <Route exact path="/edit/" component={StudentCreateContainer} />
      </Switch>
    </div>
  );
}
