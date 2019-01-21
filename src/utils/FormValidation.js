/**
 * @flow
 **/

function isValidUsername(username: string): boolean {
  return /^[a-zA-Z0-9]{3,16}$/.test(username);
}

function isValidPassword(password: string): boolean {
  return /^[a-zA-Z0-9]{8,32}$/.test(password);
}

function isEmpty(value: string): boolean {
  return value.length === 0;
}

export function validateUsername(username: string) {
  let sanitizedUsername = username.trim();
  let errorMessage = "";
  if (isEmpty(sanitizedUsername)) {
    errorMessage = "Required";
  } else if (!isValidUsername(sanitizedUsername)) {
    errorMessage = "Username should match [a-zA-Z0-9]{6-16} pattern";
  }
  return {
    value: username,
    errorMessage
  };
}

export function validatePassword(password: string) {
  let sanitizedPassword = password.trim();
  let errorMessage = "";
  if (isEmpty(sanitizedPassword)) {
    errorMessage = "Required";
  } else if (!isValidPassword(sanitizedPassword)) {
    errorMessage = "password should match [a-zA-Z0-9]{8-32} pattern";
  }
  return {
    value: password,
    errorMessage
  };
}
