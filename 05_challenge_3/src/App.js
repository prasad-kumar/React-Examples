import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    document.querySelector(".info").info.classList.add("hide");

    const { name, value } = e.target;

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();
    document.querySelector(".info").info.classList.remove("hide");
  };

  return (
    <>
      <h1>SIGN UP FORM</h1>
      <hr />
      <div>
        <div className="info hide">
          <h2>
            {state.firstName} {state.lastName}
          </h2>
          <p>{state.email}</p>
          <p>{state.phone}</p>
        </div>
        <hr />
        <form onSubmit={submitEvent}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={state.firstName}
            onChange={inputEvent}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={state.lastName}
            onChange={inputEvent}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={state.email}
            onChange={inputEvent}
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone No"
            value={state.phone}
            onChange={inputEvent}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default App;
