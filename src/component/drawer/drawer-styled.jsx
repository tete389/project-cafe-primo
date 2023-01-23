import React from "react";
import { Box, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 210;

const MyDrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    //position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DrawerStyled({ children, open }) {
  return (
    <MyDrawerStyled
      variant="permanent"
      open={open}
      sx={{
        display: { xs: "none", sm: "block" },
        flexShrink: 0,
        
      }}
    >
      {children}
    </MyDrawerStyled>
  );
}

export default DrawerStyled;
