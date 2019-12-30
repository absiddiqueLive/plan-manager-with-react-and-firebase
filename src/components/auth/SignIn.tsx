import React, { Component, ChangeEvent, FormEvent } from "react";

export interface ISignIn {
  email: string;
  password: string;
}

export default class SignIn extends Component {
  state: ISignIn = {
    email: "",
    password: ""
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
