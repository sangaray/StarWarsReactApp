import React from "react";
import Button from "@mui/material/Button";

export default function Random({ random, cardLocation }) {
  return (
    <div>
      <Button color="secondary" onClick={() => random(cardLocation)}>
        Random
      </Button>
    </div>
  );
}
