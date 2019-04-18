import React from 'react';
import { connect } from "react-redux";
import { login } from '../actions';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/');
            })
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        console.log(this.state.credentials.username);
        console.log(this.state.credentials.password);
        return (
            <div className='login-page-wrapper'>
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        required
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(LoginPage);