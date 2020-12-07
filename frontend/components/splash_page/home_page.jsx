import React from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { logout } = this.props;
    
    return (
      <div>
        <h1>hello from the home page</h1>
        <Link to="/edit/" >Add Students</Link>
        <button onClick={logout}><i className="fas fa-sign-out-alt temp-logout"></i></button>
      </div>
    )
  }
}