import * as React from "react";
import { Box, Drawer } from "@mui/material";
import PropTypes from "prop-types";
import DrawerInside from "./drawer-Inside";
import DrawerStyled from "./drawer-styled";

import { useSelector, useDispatch } from "react-redux";
import {
  onClickDrawerWeb,
  onClickDrawerMobile,
} from "../../stores/slices/drawerSlice";

const drawerWidth = 210;

function MyDrawer(props) {
  const openWeb = useSelector((state) => state.clickDrawer.isOpenWeb);
  const openMoblie = useSelector((state) => state.clickDrawer.isOpenMobile);
  const dispatch = useDispatch();

  const toggleDrawerWeb = () => {
    dispatch(onClickDrawerWeb());
  };
  const toggleDrawerMoblie = () => {
    dispatch(onClickDrawerMobile());
  };

  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={openMoblie}
        onClose={toggleDrawerMoblie}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          
        }}
      >
        <DrawerInside toggleDrawer={toggleDrawerMoblie} isMoblie={true}/>
      </Drawer>

      <DrawerStyled
        // sx={{
        //   width: drawerWidth,
        //   flexShrink: 0,
        //   display: { xs: "none", sm: "block" },
        //   "& .MuiDrawer-paper": {
        //     width: drawerWidth,
        //     boxSizing: "border-box",
        //   },
        // }}
        // variant="persistent"
        // anchor="left"
        // open={openWeb}

        open={openWeb}
      >
        <DrawerInside toggleDrawer={toggleDrawerWeb} isMoblie={false}/>
      </DrawerStyled>
    </Box>
  );
}

MyDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MyDrawer;
