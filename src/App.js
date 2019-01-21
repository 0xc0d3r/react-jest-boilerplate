import React, { Component } from "react";

import UserLogin from "./components/UserLogin";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <UserLogin />
      </div>
    );
  }
}

export default App;

// [x] Login container
// [x] Username field
// [x] Password field
// [x] Field level Validations
// [x] onSubmit form
// [x] Form level Validations
// [] Test cases
