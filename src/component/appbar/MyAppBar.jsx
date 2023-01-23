import * as React from "react";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, Typography, IconButton, Box, AppBar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector, useDispatch } from "react-redux";
import {
  onClickDrawerWeb,
  onClickDrawerMobile,
} from "../../stores/slices/drawerSlice";
import AppBarStyled from "./appbar-styled";

const drawerWidth = 210;

function MyAppBar() {
 
  const openWeb = useSelector((state) => state.clickDrawer.isOpenWeb);
  const openMoblie = useSelector((state) => state.clickDrawer.isOpenMobile);
  const dispatch = useDispatch();
  const toggleDrawerWeb = () => {
    dispatch(onClickDrawerWeb());
  };
  const toggleDrawerMoblie = () => {
    dispatch(onClickDrawerMobile());
  };

  return (
    <Box
      // component="nav"
      // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      // aria-label="mailbox folders"
    >
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none" },
          bgcolor: 'rgb(5, 30, 52)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawerMoblie}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cafe Primo
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBarStyled open={openWeb}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawerWeb}
            edge="start"
            sx={{ mr: 2, ...(openWeb && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cafe Primo
          </Typography>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}

export default MyAppBar;
