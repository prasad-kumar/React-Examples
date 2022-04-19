import React, { Component } from "react";

// class component
class Profile extends Component {
  constructor() {
    super();
    // State
    this.state = {
      name: "Prasad",
      age: 24,
      gender: "Male",
      show: true,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Hi My name is {this.state.name}</h1>

        {/* Event Handling */}
        <button
          onClick={() => this.setState({name : "Prasad Kumar"})}
          onDoubleClick={() => this.setState({ name: "Prasad" })}
          onMouseEnter={() => this.setState({ name: "Divya" })}
          onMouseLeave={() => this.setState({ name: "Rajini" })}
        >
          Click Me
        </button>
        <hr />
        {this.state.show ? <h1>Age {this.state.age}</h1> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    );
  }
}

export default Profile;
