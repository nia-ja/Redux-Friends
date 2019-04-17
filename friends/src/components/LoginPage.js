import React from 'react';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials, [e.target.name] : e.target.value
            }
        })
    }

    render() {
        return (
            <div className='login-page-wrapper'>
                <h2>Login</h2>
                <form>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='username'
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='password'
                        required
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;