import * as React from "react";
import {
  Box,
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Button,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import SellDrawerMenubar from "./sell-drawer-menubar";
import {
  onDrawerSearch,
  onDrawerSearchOpen,
} from "../../stores/slices/sellSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

export default function SellToolbar(props) {

  const {
    handleToolbarSearch
  } = props;


  const drawerSearch = useSelector(
    (state) => state.sellAction.isDrawerSearch
  );
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");

  const handleSearchValue = () => {
    dispatch(onDrawerSearch({
      search1: "",
      search2: "",
    }));
    handleToolbarSearch(search);
  }

  const handleDrawerSearchOpen = () => {
    dispatch(onDrawerSearchOpen());
    handleToolbarSearch("");
    setSearch("");
  }

  const value = {
    select1: "หมวดหมู่",
    select2: "แนะนำ",
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    search === "" && dispatch(onDrawerSearch(value))
    search === "" && handleToolbarSearch(search);
  },[search])

  return (
     <>
      
      <Box
        sx={{
          
          alignItems: "center",
          display: { sm: "flex" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          mb: { xs: 2, sm: 2},
        }}
      >
        <Box>
          <Typography sx={{ m: 1, mb: 2 }} variant="h4">
            สินค้า
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: "block" } }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ pl: "10px" }} />
              <Typography variant="h5" sx={{ minWidth: 50 }}>
                {drawerSearch.search2}
              </Typography>

              <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={handleDrawerSearchOpen}
              >
                <FontAwesomeIcon icon={faBars} size="sm" />
              </IconButton>
            </Box>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1, minWidth: 100 }}
              id="toolbar-search"
              placeholder="ค้นหาสินค้า"
              inputProps={{ "aria-label": "ค้นหาสินค้า" }}
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={handleSearchValue}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
            {/* <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          ></IconButton> */}
            {/* <Box sx={{ p: "5px" }} /> */}
          </Paper>
        </Box>
      </Box>
     </>
  );
}

{
  /* <Card>
<CardContent>
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "Wrap",
      
    }}
  >
    <Box sx={{ maxWidth: "lg" }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="select-main-label">หมวดหมู่</InputLabel>
        <Select
          labelId="select-main-label"
          id="select-main-label"
          //value={mainSelect}
          label="ค้นหาตาม"
          //onChange={handleMainSelect}
        >
          {category?.map((cate, index) => (
            <MenuItem key={cate.cateId} value={cate.cateName}>
              {cate.cateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ProductToolbarSelectedSup />
    </Box>
    <Box sx={{ maxWidth: 200 }}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder="Search product"
        variant="outlined"
      />
    </Box>
  </Box>
</CardContent>
</Card> */
}
