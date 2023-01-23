import { Box, CssBaseline, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import MyAppBar from "../appbar/MyAppBar";
import MyDrawer from "../drawer/MyDrawer";
import HeaderDrawer from "../drawer/drawer-header";
import InsideLayout from "./InsideLayout";



function Layout({ children }) {
  const theme = useTheme();

  return (
    <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <MyAppBar />
          <MyDrawer />
          <InsideLayout>
          <Toolbar />
            {children}
          </InsideLayout>
        </Box>
    </>
  );
}

export default Layout;
