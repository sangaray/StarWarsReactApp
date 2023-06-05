import React, { useState } from "react";
import "./NavBar.css";
import "./Home.css";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";

export default function Home({ allCharacters }) {
  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {},
  });
  const [listC, setList] = useState([]);

  const search = function (name, cardLocation) {
    const findCharacter = allCharacters.find((c) => c.name === name);
    if (name) {
      if (cardLocation === "left") {
        setChars({ ...chars, cardLeft: findCharacter });
      }
      if (cardLocation === "right") {
        setChars({ ...chars, cardRight: findCharacter });
      }
    }
  };

  const addList = function () {
    if (listC.length === 0) {
      setList(allCharacters);
    } else {
      setList([]);
    }
  };

  const random = function (cardLocation) {
    function getNumRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = allCharacters.find((c) => c.id === idRandom);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };
  return (
    <div className="home">
      <h1>StarWars App Home</h1>
      <NavBar search={search} addList={addList} random={random} />
      <Cards characters={chars} />
      <div className="list">
        <List lista={listC} />
      </div>
    </div>
  );
}
