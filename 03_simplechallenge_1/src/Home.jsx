import React from "react";
import Card from "./Card";
import squid_game from "./images/squid-game.jpg";
import dark from "./images/dark.jpg";
import the_witcher from "./images/the-witcher.jpg";
import money_heist from "./images/money-heist.jpg";

const data = [
  {
    title: "Squid Game",
    img: squid_game,
    link: "https://www.netflix.com/in/title/81040344",
    genre: "Thriller, Horror",
  },
  {
    title: "The Wither",
    img: the_witcher,
    link: "https://www.netflix.com/in/title/80189685",
    genre: "Adventure, Fantacy",
  },
  {
    title: "Dark",
    img: dark,
    link: "https://www.netflix.com/in/title/80100172",
    genre: "Thriller, Science fiction",
  },
  {
    title: "Money Heist",
    img: money_heist,
    link: "https://www.netflix.com/in/title/80192098",
    genre: "Crime, Drama",
  },
];

const Home = () => {
  return (
    <>
      <h1 className="title">Here the Top 5 Netflix Web series</h1>
      <div className="conatainer">
        {data.map((val, idx) => {
          return (
            <Card
              title={val.title}
              img={val.img}
              genre={val.genre}
              link={val.link}
              index={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
