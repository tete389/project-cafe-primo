import React from "react";
import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 209;

const MyAppBarStyled = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),

shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBarStyled({ open, children }) {
  return (
    <MyAppBarStyled
      position="fixed"
      //position="absolute"
      open={open}
      // sx={{
      //   ml: { sm: `${drawerWidth}px` },
      // }}
        sx={{
          display: { xs: "none", sm: "block" },
          bgcolor: 'rgb(5, 30, 52)',
        }}
    >
      {children}
    </MyAppBarStyled>
  );
}

export default AppBarStyled;
