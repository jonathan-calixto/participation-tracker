import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { currentUser, logout, clearErrors } = this.props;

        const sessionLoggedIn = () => (
            <div>
                <h2>Welcome!</h2>
                <button onClick={logout}><i className="fas fa-sign-out-alt temp-logout"></i></button>
            </div>
        )

        const sessionLoggedOut = () => (
            <div>
                <Link to='/login/' onClick={clearErrors}><span>Log in</span></Link>
                <br />
                <Link to='/signup/' onClick={clearErrors}><span>Sign up</span></Link>
            </div>
        )

        return currentUser ? sessionLoggedIn() : sessionLoggedOut();
    }
}