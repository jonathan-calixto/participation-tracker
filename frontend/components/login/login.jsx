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
                <h2>Welcome, <Link to='/profile/'>{currentUser.username}</Link>!</h2>
                <button onClick={logout}><i className="fas fa-sign-out-alt temp-logout"> Logout</i></button>
            </div>
        )

        const sessionLoggedOut = () => (
            <div className='splash-nav-wrapper'>
                <h3>Menu</h3>
                <h3>Classroom Counts</h3>
                <Link to='/signup/' onClick={clearErrors}>Sign up</Link>
            </div>
        )

        return currentUser ? sessionLoggedIn() : sessionLoggedOut();
    }
}