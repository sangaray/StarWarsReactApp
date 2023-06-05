import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export default function Search({ cardLocation, search }) {
  const [input, setInput] = useState("");
  const handleChange = function (e) {
    setInput(e.target.value);
    //console.log(input);
  };
  // EN LUGAR DE HACERLA EN APP O HOME
  // async function getAllCharacters(name) {
  //   const allData = await axios.get(
  //     "https://akabab.github.io/starwars-api/api/all.json"
  //   );
  //   const character = allData.data.find((c) => c.name === name);
  // }
  return (
    <div>
      <Input
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => handleChange(e)}
      ></Input>
      <Button color="secondary" onClick={() => search(input, cardLocation)}>
        Search
      </Button>
    </div>
  );
}
