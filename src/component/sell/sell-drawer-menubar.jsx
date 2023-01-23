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
  onDrawerSearch,
  onDrawerSearchOpen,
} from "../../stores/slices/sellSlice";
import SellDrawerForm from "./sell-drawer-form";

const drawerWidth = 260;

export default function SellDrawerMenubar(props) {
  const {} = props;

  const drawerSearchOpen = useSelector(
    (state) => state.sellAction.isDrawerSearchOpen
  );
  const dispatch = useDispatch();
  
  const handleDrawerSearchOpen = () => {
    dispatch(onDrawerSearchOpen());
  }
  const handleDrawerSearch = () => {
    dispatch(onDrawerSearch(drawerSelect));
    dispatch(onDrawerSearchOpen());
  }


  const [selectBy, setSelectBy] = React.useState(textToolbar.mainSelet[1]);
  const [selectByType, setSelectByType] = React.useState(
    textToolbar.supSeletType[0]
  );
  const [selectByCate, setSelectByCate] = React.useState(
    textToolbar.supSeletCate[0]
  );
  const [drawerSelect, setDrawerSelect] = React.useState({
    select1: selectBy,
    select2: selectByCate,
  });

  const handleDrawerSelect = (event) => {
    setDrawerSelect({
      ...drawerSelect,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleSelectBy = (event) => {
    setSelectBy(event.target.value); 
    handleDrawerSelect(event);
 
  };

  const handleSelectByCate = (event) => {
    setSelectByCate(event.target.value);
    handleDrawerSelect(event);
  };

  const handleSelectByType = (event) => {
    setSelectByType(event.target.value);
    handleDrawerSelect(event);
  };

  const handleDrawerSelectValue = (value) => {
    setDrawerSelect({
      ...drawerSelect,
      select2: value,
    });
  };

  React.useEffect(() => {
    selectBy === textToolbar.mainSelet[1]
    ? handleDrawerSelectValue(selectByCate)
    : handleDrawerSelectValue(selectByType);
  },[selectBy])

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        anchor="right"
        variant="temporary"
        open={drawerSearchOpen}
        onClose={handleDrawerSearchOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar />
        <Toolbar>
          <Typography component="h1" variant="h6" color="primary" noWrap>
            Menu Bar
          </Typography>
        </Toolbar>
        <Box sx={{ maxWidth: "lg" }}>
          <FormControl sx={{ m: 1, ml: 2, minWidth: 200 }}>
            <InputLabel id="select-main-label">ค้นหาตาม</InputLabel>
            <Select
              labelId="select-main-label"
              id="select-main-label"
              value={selectBy}
              label="ค้นหาตาม"
              onChange={handleSelectBy}
              name="select1"
            >
              <MenuItem value={textToolbar.mainSelet[1]}>
                {textToolbar.mainSelet[1]}
              </MenuItem>
              <MenuItem value={textToolbar.mainSelet[0]}>
                {textToolbar.mainSelet[0]}
              </MenuItem>
            </Select>
            <FormHelperText>หากไม่เข้าเงื่อนไขจะอยู่ใน "อื่นๆ"</FormHelperText>
          </FormControl>

          {selectBy === textToolbar.mainSelet[1] ? (
            <FormControl sx={{ m: 1, ml: 2, minWidth: 200 }}>
              <InputLabel id="select-label">
                {textToolbar.mainSelet[1]}
              </InputLabel>
              <Select
                labelId="select-label"
                id="select-label"
                label={textToolbar.mainSelet[1]}
                value={selectByCate}
                onChange={handleSelectByCate}
                name="select2"
              >
                {category?.map((cate, index) => (
                  <MenuItem key={cate.cateId} value={cate.cateName}>
                    {cate.cateName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl sx={{ m: 1, ml: 2, minWidth: 200 }}>
              <InputLabel id="select-label">
                {textToolbar.mainSelet[0]}
              </InputLabel>
              <Select
                labelId="select-label"
                id="select-label"
                label={textToolbar.mainSelet[0]}
                value={selectByType}
                onChange={handleSelectByType}
                name="select2"
              >
                {types?.map((types, index) => (
                  <MenuItem key={types.typeId} value={types.typeName}>
                    {types.typeName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Button
            variant="contained"
            sx={{ mx: 10, mt: 5 }}
            endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            onClick={handleDrawerSearch}
          >
            ค้นหา
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
