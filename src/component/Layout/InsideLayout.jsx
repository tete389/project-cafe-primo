import React from "react";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const drawerWidth = 140;

const InsideLayoutStyled = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    //padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function InsideLayout({ children }) {
  const openWeb = useSelector((state) => state.clickDrawer.isOpenWeb);
  const openMoblie = useSelector((state) => state.clickDrawer.isOpenMoblie);
  return (
    <>
      <InsideLayoutStyled
        open={openWeb}
        sx={{
          
          display: { xs: "none", sm: "block" },
          //flexShrink: 0,
          bgcolor: "#eeeeee",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </InsideLayoutStyled>
      <InsideLayoutStyled
        open={!openMoblie}
        sx={{
          display: { xs: "block", sm: "none" },
          //flexShrink: 0,
          bgcolor: "#eeeeee",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </InsideLayoutStyled>
    </>
  );
}

export default InsideLayout;
