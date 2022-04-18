import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <a href={props.link} target="_blank">
          <img src={props.img} alt="" />
        </a>
        <div className="card-info">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-genre">{props.genre}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
