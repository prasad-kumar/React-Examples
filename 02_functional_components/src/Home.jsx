import React from "react";

const Home = (props) => {
  return (
    <>
      <div class="main-section">
        <div class="main">
          <h1>{props.content}</h1>
          <button class="main-btn">Click Here</button>
        </div>
      </div>
    </>
  );
};

export default Home;
