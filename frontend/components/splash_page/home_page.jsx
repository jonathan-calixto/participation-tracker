import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomePageHook = ({ logout }) => {
  const handleSubmit = () => {
    logout();
  };

  return (
    <div>
      <h1>hello from the home page</h1>
      <Link to="/edit/">Add Students</Link>
      <button onClick={logout}>
        <i className="fas fa-sign-out-alt temp-logout"></i>
      </button>
    </div>
  );
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mDTP)(HomePageHook);
