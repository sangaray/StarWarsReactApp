import * as React from "react";
import Card from "@mui/material/Card";
import "./Cardi.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Imagen from "../assets/StarWarsBattle.jpg";

export default function Cardi({ character }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ width: 200 }} className="contentCard">
        <Typography>
          {character ? character.id : ""}
          {"  -  "}
          {character ? character.name : ""}
        </Typography>
        <img
          src={character ? character.image : Imagen}
          alt={character ? character.image : null}
        />
        <Typography>{character ? character.homeworld : ""}</Typography>
        <Typography>{character ? character.gender : ""}</Typography>
        <Typography>{character ? character.species : ""}</Typography>
        <Typography>{character ? character.bornLocation : ""}</Typography>
        <Typography>{character ? character.height : ""}</Typography>
      </CardContent>
    </Card>
  );
}
