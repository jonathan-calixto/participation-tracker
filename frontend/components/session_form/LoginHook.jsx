import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  login,
  clearErrors,
  loginDemoUser,
} from "../../actions/session_actions";

const LoginHook = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = username;
  }, [username]);

  const handleInput = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    login({ username: username, password: password });
  };

  const handleDemo = () => {
    const demoUser = {
      username: "nathan0922",
      password: "123456",
    };
    login(demoUser);
  };

  const clearErrors = () => {
    clearErrors();
  };

  // const renderErrors = () => {
  //   const { errors } = this.props;
  //   return (
  //     <ul>
  //       {errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>
  //           {" "}
  //           <span className="form-errors">{error}</span>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <div className="splash-wrapper session-wrapper">
      <form className="session-form" onSubmit={handleSubmit}>
        <div className="sidebar">
          <div className="sidebar-text">
            <h2>Welcome Back!</h2>
            <p>Enter your personal details to get logged in.</p>
          </div>
        </div>
        <div className="session-details">
          <br />
          {/* <span>{this.renderErrors()}</span> */}
          <br />
          <div className="input-wrapper">
            <div className="fontuser">
              <label>Username:</label>
              <br></br>
              <input
                className="session-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i class="fa fa-user fa-lg"></i>
            </div>
            <div className="fontpassword">
              <label>Password:</label>
              <input
                className="session-input"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i class="fa fa-key fa-lg"></i>
            </div>
            <button className="login sessionbutton">log in!</button>
            <button className="login sessionbutton" onClick={handleDemo}>
              Demo User
            </button>
            <div className="bottom-links">
              <p>Not a user?</p>
              <Link className="swap-button" to="/signup/">
                Sign up!
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mDTP = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
  clearErrors: () => dispatch(clearErrors()),
  loginDemoUser: (payload) => dispatch(login(payload)),
});

export default connect(null, mDTP)(LoginHook);
