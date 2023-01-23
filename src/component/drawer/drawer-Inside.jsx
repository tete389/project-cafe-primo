import * as React from "react";
import HeaderDrawer from "./drawer-header";
import {
  List,
  Divider,
  IconButton,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { onClickDrawerIndex, onClickDrawerMobile } from "../../stores/slices/drawerSlice";
import { useSelector, useDispatch } from "react-redux";


import { useNavigate , Outlet, Link} from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faDolly, faClipboardList, faMugSaucer, faChartSimple } from "@fortawesome/free-solid-svg-icons";

const Pages = [
  {
    page: "ผลกระกอบการ",
    pageRoute: "/",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    page: "ขายหน้าร้าน",
    pageRoute: "/sell",
    icon: <FontAwesomeIcon icon={faStore} />,
  },
  {
    page: "รับออเดอร์",
    pageRoute: "/orders",
    icon: <FontAwesomeIcon icon={faClipboardList} size='lg'/>,
  },
  {
    page: "จัดการสินค้า",
    pageRoute: "/products",
    icon: <FontAwesomeIcon icon={faMugSaucer} />,
  },
  {
    page: "จัดการหลังร้าน",
    pageRoute: "/products",
    icon: <FontAwesomeIcon icon={faDolly} />,
  },
  
];

export default function DrawerInside({ toggleDrawer, isMoblie }) {
  const navigate = useNavigate();
  const selectedIndex = useSelector((state) => state.clickDrawer.isIndex);
  const dispatch = useDispatch();

  const toggleDrawerIndex = (index, p) => {
    dispatch(onClickDrawerIndex(index));
    isMoblie === true && toggleDrawer();
    goToPage(p); 
  };

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage(p) {
    await wait(100);
    navigate(p.pageRoute, {replace: true});
  }

  return (
    <Box sx={{ bgcolor: "rgb(5, 30, 52)", height: "100vh" }}>
      <HeaderDrawer >
        
        {/* <Box sx={{ bgcolor: "rgba(255,255,255,0.8)", height: "8vh", width: "34vh", marginLeft: "-10px", }}>
        <Typography
          component="h1"
          variant="h6"
          color="primary"
          noWrap
          sx={{
            marginLeft: "40px",
            flexGrow: 1,
          }}
        >
          Menu Bar
        </Typography>
        </Box> */}
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
        </IconButton>
      </HeaderDrawer>
      <Divider />
      
        <List sx={{ p:0}}>
          {Pages.map((p, index) => (
            <ListItemButton
              key={p.page}
              selected={selectedIndex === index}
              onClick={(e) => (toggleDrawerIndex(index, p))}
              sx={{
                //pt: 1,
                "& svg": {
                  color: "rgba(255,255,255,0.8)",
                  transition: "0.2s",
                  transform: "translateX(0) rotate(0)",
                },
                "&:hover, &:focus": {
                  bgcolor: "unset",
                  "& svg:first-of-type": {
                    transform: "translateX(-4px) rotate(-20deg)",
                  },
                  "& svg:last-of-type": {
                    right: 0,
                    opacity: 1,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ alignItems: "center", }}>{p.icon}</ListItemIcon>
              <ListItemText
                primary={p.page}
                // sx={{}}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                  color: "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          ))}

          {/* <MainListDrawerItems /> */}
        </List>
      
      <Divider />
      {/* <List>
        <SecondaryListDrawerItems />
      </List> */}
    </Box>
  );
}

