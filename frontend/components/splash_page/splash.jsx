import React from 'react';

export default class Splash extends React.Component {

    render() {
        const { currentUser } = this.props;

        const loggedOut = () => (
            <div>
                <h1>Welcome to the last tracker you will ever need!</h1>
            </div>
        )

        const loggedIn = () => (
            <div>
                <h1>This will be where they begin setup.</h1>
            </div>
        )

        return currentUser ? loggedIn() : loggedOut();
    }
}