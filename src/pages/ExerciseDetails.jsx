import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { Details, ExerciseVideos, SimilarExercise } from "../components";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exerciseTargetData, setExerciseTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setExerciseTargetData(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentData(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetails) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercise
        exerciseTargetData={exerciseTargetData}
        equipmentData={equipmentData}
      />
    </Box>
  );
};

export default ExerciseDetails;
