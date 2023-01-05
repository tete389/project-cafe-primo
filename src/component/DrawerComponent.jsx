import * as React from "react";
import { styled } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";

import ListSubheader from "@mui/material/ListSubheader";

import { Box } from "@mui/material";
// import MainListDrawerItemsComponent from './listDrawerItems/MainListDrawerItemsComponent';
// import { useSelector, useDispatch  } from 'react-redux';
// import { onClickDrawer } from '../stores/slices/drawerSlice';
import MainListDrawerItemsComponent from "./listDrawerItems/MainListDrawerItemsComponent";
import SecondaryListDrawerItemsComponent from "./listDrawerItems/SecondaryListDrawerItemsComponent";

import { useSelector, useDispatch } from "react-redux";
import { onClickDrawer } from "../stores/slices/drawerSlice";



const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
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

function DrawerComponent() {
  const open = useSelector((state) => state.clickDrawer.isOpen);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(onClickDrawer());
  };

  return (
   
    <Box sx={{ display: "flex" }}>
      <SwipeableDrawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Divider />
        <List component="nav">
          <ListSubheader component="div" inset>
            จัดการหน้าร้าน
          </ListSubheader>
          <MainListDrawerItemsComponent />
          <Divider sx={{ my: 1 }} />
          <SecondaryListDrawerItemsComponent />
        </List>
      </SwipeableDrawer>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            noWrap
            sx={{
              marginLeft: "60px",
              flexGrow: 1,
            }}
          >
            Menu Bar
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListDrawerItemsComponent />
          <Divider sx={{ my: 1 }} />
          <SecondaryListDrawerItemsComponent />
        </List>
      </Drawer>
    </Box>
  
 
  );
}

export default DrawerComponent;
