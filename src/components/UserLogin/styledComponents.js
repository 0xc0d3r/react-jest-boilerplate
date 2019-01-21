/**
 * @flow
 **/

import styled from "@emotion/styled";

export const UserLoginContainer = styled("div")``;

export const UserLoginForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginField = styled("input")`
  margin-bottom: 3px;
  margin-top: 10px;
`;

export const AuthActionsContainer = styled("div")`
  margin-top: 20px;
`;

export const LoginButton = styled("input")`
  margin-right: 10px;
`;

export const SignUpButton = styled("button")``;

export const ErrorMessage = styled("p")`
  text-align: left;
  font-size: 10px;
  color: red;
`;
