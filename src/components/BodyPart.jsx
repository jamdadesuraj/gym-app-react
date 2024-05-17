import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ bodyPart, setBodyPart, item }) => {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => setBodyPart(item)}
    >
      <img src={Icon} alt="gym" style={{ width: "48px", height: "48px" }} />
      <Typography
        fontWeight="bold"
        fontSize="24px"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
