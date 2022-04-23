import React, { useContext } from "react";
import { User } from "./App";

const ComC = () => {
  const user = useContext(User);
  return (
    <>
      {/* Context-API */}

      {/* <User.Consumer>
        {(user) => {
          return (
            <>
              <h1>
                My name is {user.fName} {user.lName}
              </h1>
            </>
          );
        }}
      </User.Consumer> */}

      {/* useContext Hook */}

      <h2> My Name is {user.fName} {user.lName}</h2>
    </>
  );
};

export default ComC;
