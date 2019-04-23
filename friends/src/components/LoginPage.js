import React from 'react';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
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
                this.props.history.push('/friends-list');
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
        return (
            <div className='login-page-wrapper'>
                <h2>Meet<br/>your Friends</h2>
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
                    <button>
                        { this.props.isLoggingIn ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                            "Log in"
                        )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggingIn: state.isLoggingIn
    };
};

export default connect(mapStateToProps, { login })(LoginPage);