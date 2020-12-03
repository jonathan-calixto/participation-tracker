import React from 'react';

export default class Splash extends React.Component {

    render() {
        const { currentUser } = this.props;

        const loggedOut = () => (
            <div className='splash-wrapper'>
                <div className='splash-img'>
                    <div className='splash-textbox'>
                        <h1 className='splash-header'>Welcome to the last tracker you will ever need!</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illum dolores sed fugit earum, maxime dicta possimus aspernatur sequi. Aut voluptatem quam natus aliquid sunt quia! Ut, quas. Explicabo, molestiae.</h3>
                        <div className='splash-button-wrapper'> 
                            <button className='login'>Log In</button>
                            <button className='signup'>Sign Up</button>
                        </div>
                    </div>
                </div>
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