import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCart = ({ exercise }) => {
  return (
    <Link to={`exercise/:{exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffc175",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        fontWeight="bold"
        color="#000"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCart;
