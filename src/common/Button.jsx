import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, className, variant, href, onClick }) => {
  return (
    <Button
      className={` ${className}`}
      variant={variant}
      href={href}
      onClick={onClick}
      style={{ background: "#ff2625", color: "#fff", padding: "10px" }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
