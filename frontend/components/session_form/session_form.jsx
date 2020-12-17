import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.swap = this.swap.bind(this);
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    demoUser(event) {
        event.preventDefault();
        const demoUser = {
            username: 'nathan0922',
            password: '123456'
        };
        this.props.loginDemoUser(demoUser);
    }
    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    swap() {
        const details = document.getElementsByClassName('session-details')[0];
        const sidebar = document.getElementsByClassName('sidebar')[0];


        sidebar.addClass()

        // details.animate([
        // { transform: 'translateX(300px)' },
        // ], {
        // duration: 1000,
        // iterations: Infinity
        // });

    }

    renderErrors() {
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`}> <span className='form-errors'>{error}</span></li>
                ))}
            </ul>
        );
    }
    render() {
        if (this.props.formType === 'Sign up') {
            return (
                <div className='splash-wrapper session-wrapper'>
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        <div className='sidebar'>
                            <h2>Create an Account!</h2>
                            <p>Enter your personal details to get started.</p>
                        </div>
                        <div className='session-details'>
                            <br />
                            <span>{this.renderErrors()}</span>
                            <br />
                            <div className='input-wrapper'>
                            <div className='fontuser'>
                            <label>
                                Username:
                            </label>
                            <br></br>
                                <input
                                    className='session-input'
                                    type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                                <i class="fa fa-user fa-lg"></i> 
                            </div>
                            <br /><br />
                            <div className='fontpassword'>
                            <label>
                                Password:
                            </label>
                           
                                <input
                                    className='session-input'
                                    type="password"
                                    value={this.state.password}
                                    placeholder='Password'
                                    onChange={this.update('password')}
                                />
                                <i class="fa fa-key fa-lg"></i> 
                                </div>
                                <button className='login sessionbutton'>{this.props.formType}</button>
                                <br /><br />
                                <button onClick={this.demoUser}>Demo User</button>
                                <p>Already a user?</p><Link className='swap-button' to='/login/' onClick={this.swap}>Sign in!</Link>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div className='splash-wrapper session-wrapper'>
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        <div className='sidebar'>
                            <h2>Welcome Back!</h2>
                            <p>Enter your personal details to get logged in.</p>
                        </div>
                        <div className='session-details'>
                            <br />
                            <span>{this.renderErrors()}</span>
                            <br />
                            <div className='input-wrapper'>
                            <div className='fontuser'>
                            <label>
                                Username:
                            </label>
                            <br></br>
                                <input
                                    className='session-input'
                                    type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                                <i class="fa fa-user fa-lg"></i> 
                            </div>
                            <br /><br />
                            <div className='fontpassword'>
                            <label>
                                Password:
                            </label>
                           
                                <input
                                    className='session-input'
                                    type="password"
                                    value={this.state.password}
                                    placeholder='Password'
                                    onChange={this.update('password')}
                                />
                                <i class="fa fa-key fa-lg"></i> 
                                </div>
                            </div>
                            <button className='login sessionbutton'>{this.props.formType}</button>
                            <br /><br />
                            <button onClick={this.demoUser}>Demo User</button>
                            <p> Not a user?</p><Link className='swap-button' to='/signup/' onClick={this.swap}>Sign up!</Link>
                        </div>
                    </form>
                </div>
            );
        }
    }
}