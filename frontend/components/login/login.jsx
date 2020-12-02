import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { currentUser, logout, clearErrors } = this.props;

        const sessionLogin = () => (
            <div>
                Welcome!
            </div>
        )

        const sessionLogout = () => (
            <div>
                See ya!
            </div>
        )

        return currentUser ? sessionLogin() : sessionLogout();
    }
}