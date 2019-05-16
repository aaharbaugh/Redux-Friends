import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state)
    };

    return(){
        return (
            <div>
                <form >
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})
export default connect(mapStateToProps, { login })(Login)