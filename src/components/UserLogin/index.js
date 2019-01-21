/**
 * @flow
 **/

import React, { Component } from "react";

import { validateUsername, validatePassword } from "../../utils/FormValidation";

import {
  UserLoginContainer,
  UserLoginForm,
  LoginField,
  AuthActionsContainer,
  LoginButton,
  SignUpButton,
  ErrorMessage
} from "./styledComponents";

type Props = {};

type LoginFormFieldType = {
  value: string,
  errorMessage: string
};
type State = {
  username: LoginFormFieldType,
  password: LoginFormFieldType
};

class UserLogin extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.isValidForm = true;
    this.state = {
      username: {
        value: "",
        errorMessage: ""
      },
      password: {
        value: "",
        errorMessage: ""
      }
    };
  }
  onChangeUsername = e => {
    const { username } = this.state;
    this.setState({
      username: { ...username, value: e.target.value }
    });
  };
  onBlurUsername = () => {
    const { username } = this.state;
    this.setState({
      username: validateUsername(username.value)
    });
  };
  onChangePassword = e => {
    const { password } = this.state;
    this.setState({
      password: { ...password, value: e.target.value }
    });
  };
  onBlurPassword = () => {
    const { password } = this.state;
    this.setState({
      password: validatePassword(password.value)
    });
  };
  onLogin = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const usernameValidationObject = validateUsername(username.value);
    const passwordValidationObject = validatePassword(password.value);
    if (usernameValidationObject.errorMessage) {
      this.isValidForm = false;

      this.setState({
        username: usernameValidationObject
      });
    }
    if (passwordValidationObject.errorMessage) {
      this.isValidForm = false;
      this.setState({
        password: passwordValidationObject
      });
    }
  };

  onSignUp = () => {
    console.log("onsignup");
  };

  render() {
    const { username, password } = this.state;
    return (
      <UserLoginContainer>
        <UserLoginForm id="login">
          <LoginField
            type="text"
            name="username"
            onChange={this.onChangeUsername}
            placeholder="Username"
            onBlur={this.onBlurUsername}
            id="username"
          />
          {username.errorMessage && (
            <ErrorMessage id="username-error">
              {username.errorMessage}
            </ErrorMessage>
          )}
          <LoginField
            type="password"
            name="password"
            onChange={this.onChangePassword}
            placeholder="Password"
            onBlur={this.onBlurPassword}
            id="password"
          />
          {password.errorMessage && (
            <ErrorMessage id="password-error">
              {password.errorMessage}
            </ErrorMessage>
          )}
          <AuthActionsContainer>
            <LoginButton
              type="submit"
              value="Login"
              id="login-btn"
              onClick={this.onLogin}
            />
            <SignUpButton onClick={this.onSignUp}>SignUp</SignUpButton>
          </AuthActionsContainer>
        </UserLoginForm>
      </UserLoginContainer>
    );
  }
}

export default UserLogin;
