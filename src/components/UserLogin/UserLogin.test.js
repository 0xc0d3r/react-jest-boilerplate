import React from "react";
import expect from "expect";
import { shallow } from "enzyme";

import UserLogin from "./index";

describe("UserLogin", () => {
  it("should have a login form", () => {
    expect(
      shallow(<UserLogin />)
        .find("#login")
        .exists()
    ).toBe(true);
  });
  it("should have username field", () => {
    expect(shallow(<UserLogin />).find("#username").length).toBe(1);
  });
  it("should have password field", () => {
    expect(shallow(<UserLogin />).find("#password").length).toBe(1);
  });
  it("should have login button", () => {
    expect(shallow(<UserLogin />).find("#login-btn").length).toBe(1);
  });

  it("should focus username field and blur, check for field validation error", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#username").simulate("focus");

    userLogin.find("#username").simulate("blur");

    expect(userLogin.find("#username-error").text()).toBe("Required");
  });

  it("should respond to username input change", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#username").simulate("change", {
      target: { name: "username", value: "anesh123" }
    });

    userLogin.find("#username").simulate("blur");

    expect(userLogin.state("username")).toEqual({
      value: "anesh123",
      errorMessage: ""
    });
  });

  it("should give username validation error", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#username").simulate("change", {
      target: { name: "username", value: "anesh@123" }
    });

    userLogin.find("#username").simulate("blur");

    expect(userLogin.state("username")).toEqual({
      value: "anesh@123",
      errorMessage: "Username should match [a-zA-Z0-9]{6-16} pattern"
    });
  });

  it("should respond to password input change", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#password").simulate("change", {
      target: { name: "password", value: "iBHubs789" }
    });

    userLogin.find("#password").simulate("blur");

    expect(userLogin.state("password")).toEqual({
      value: "iBHubs789",
      errorMessage: ""
    });
  });

  it("should give password validation error", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#password").simulate("change", {
      target: { name: "password", value: "iiitn" }
    });

    userLogin.find("#password").simulate("blur");

    expect(userLogin.state("password")).toEqual({
      value: "iiitn",
      errorMessage: "password should match [a-zA-Z0-9]{8-32} pattern"
    });
  });

  it("should do form level validation, submitting empty form", () => {
    const userLogin = shallow(<UserLogin />);
    userLogin.find("#login").simulate("submit", { preventDefault() {} });
    expect(userLogin.state("username")).toEqual({
      value: "",
      errorMessage: "Required"
    });

    expect(userLogin.state("password")).toEqual({
      value: "",
      errorMessage: "Required"
    });
  });

  it("should submit form", () => {
    const userLogin = shallow(<UserLogin />);

    userLogin.find("#username").simulate("change", {
      target: { name: "username", value: "anesh123" }
    });

    userLogin.find("#password").simulate("change", {
      target: { name: "password", value: "iBHubs123" }
    });

    userLogin.find("#login").simulate("submit", { preventDefault() {} });

    expect(userLogin.state("username")).toEqual({
      value: "anesh123",
      errorMessage: ""
    });

    expect(userLogin.state("password")).toEqual({
      value: "iBHubs123",
      errorMessage: ""
    });

    expect(userLogin.instance().isValidForm).toBe(true);
  });
});
