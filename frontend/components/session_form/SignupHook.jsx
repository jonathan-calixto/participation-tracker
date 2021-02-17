import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  signup,
  clearErrors,
  loginDemoUser,
} from "../../actions/session_actions";

const SignupHook = ({ signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = username;
  }, [username]);

  const handleInput = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    signup({ username: username, password: password });
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
        <div className="sidebar" id="left">
          <div className="sidebar-text">
            <h2>Create an Account!</h2>
            <p>Enter your personal details to get started.</p>
          </div>
        </div>
        <div className="session-details">
          <br />
          {/* <span>{renderErrors()}</span> */}
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
            <button className="login sessionbutton">Sign up!</button>
            <button className="login sessionbutton" onClick={handleDemo}>
              Demo User
            </button>
            <div className="bottom-links">
              <p>Already a user?</p>
              <Link className="swap-button" to="/login/">
                Sign in!
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mDTP = (dispatch) => ({
  signup: (payload) => dispatch(signup(payload)),
  clearErrors: () => dispatch(clearErrors()),
  login: (payload) => dispatch(login(payload)),
});

export default connect(null, mDTP)(SignupHook);
