import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick() {
        this.props.history.push('/login');
    }

    handleClick2() {
        this.props.history.push('/signup');
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        const { currentUser } = this.props;
        
        if (this.state.loading) {
            return <LoadingIcon />;
        }

        const loggedOut = () => (
            <div className='splash-wrapper'>
                <div className='splash-img'>
                    <div className='splash-textbox'>
                        <h1 className='splash-header'>Welcome to the last tracker you will ever need!</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illum dolores sed fugit earum, maxime dicta possimus aspernatur sequi. Aut voluptatem quam natus aliquid sunt quia! Ut, quas. Explicabo, molestiae.</h3>
                        <div className='splash-button-wrapper'> 
                            <button className='login' onClick={this.handleClick}>Log In</button>
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

export default withRouter(Splash);