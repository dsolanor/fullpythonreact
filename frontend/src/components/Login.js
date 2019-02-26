import React from "react";
import { connect } from "react-redux";
import { login } from "../features/Auth/actions";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        error: {}
    };
    handleLoginForm = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
    };
    handleChangeVal = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginForm.bind(this)}>
                    <input
                        onChange={this.handleChangeVal}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        onChange={this.handleChangeVal}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    { login }
)(Login);
