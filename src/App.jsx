import "./App.css";

import { Box } from "@mui/material";
import { Navbar, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default App;
