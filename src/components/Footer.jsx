import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "100px" }}>
      <Stack
        alignItems="center"
        px="20px"
        pt="2px"
        pb="4px"
        sx={{ background: "#f2f2" }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          Made with ❤️ by Suraj Jamdade
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
