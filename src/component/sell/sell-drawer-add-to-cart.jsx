import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { textToolbar } from "../../mocks/product-toolbar";
import HeaderDrawer from "../drawer/drawer-header";
import ProductToolbarSelectedSup from "../product/product-toolbar-select-sup";
import { types } from "../../mocks/product-type-mocks";
import { category } from "../../mocks/product-cate-mocks";
import { useSelector, useDispatch } from "react-redux";
import {
  onDrawerAddToCartOpen,
} from "../../stores/slices/sellSlice";
import SellDrawerForm from "./sell-drawer-form";

const drawerWidth = 300;

export default function SellDrawerAddToCart(props) {
  const { } = props;

  const drawerAddToCartOpen = useSelector(
    (state) => state.sellAction.isDrawerAddToCartOpen
  );
  const dispatch = useDispatch();

  const handleDrawerAddToCartOpen = () => {
    dispatch(onDrawerAddToCartOpen());
  }

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
      
    >
      <Drawer
        anchor="right"
        variant="temporary"
        open={drawerAddToCartOpen}
        onClose={handleDrawerAddToCartOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
           "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          height: 600
        }}
      >
        <Toolbar />
        <Toolbar>
          <Typography component="h1" variant="h6" color="primary" noWrap>
            เพิ่มสินค้าลงตะกร้า
          </Typography>
        </Toolbar>
        <Box sx={{ maxWidth: "lg"}}>
          <Button
            variant="contained"
            sx={{ px: 16, mx: 1 }}
            endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            //onClick={handleDrawerSearch}
          >
            
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
