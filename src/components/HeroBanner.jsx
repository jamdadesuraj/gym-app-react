import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../common";
import heroBanner from "../assets/images/banner-1.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", sm: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography
        sx={{ color: "#ff2625", fontSize: "26px", fontWeight: "600px" }}
        mb={2}
      >
        "Transform Sweat into Strength"
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", sm: "40px" }, fontWeight: "bold" }}
        mb={2}
      >
        "Empower Your Body, <br /> Energize Your Mind"
      </Typography>
      <Typography sx={{ fontSize: "22px" }} lineHeight="35px" mb={4}>
        Checkout the most effective exercise
      </Typography>
      <CustomButton href="#exercise">Explore Exercises</CustomButton>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={heroBanner} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
