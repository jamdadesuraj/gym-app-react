import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollBar, Loader } from "../components";

const SimilarExercise = ({ exerciseTargetData, equipmentData }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "70px" } }}>
      <Typography variant="h4" mb="33px">
        Similar exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exerciseTargetData.length ? (
          <HorizontalScrollBar data={exerciseTargetData} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb="33px">
        Similar Equipment
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {equipmentData.length ? (
          <HorizontalScrollBar data={exerciseTargetData} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
