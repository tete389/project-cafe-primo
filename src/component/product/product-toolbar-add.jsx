import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useSelector, useDispatch  } from "react-redux"; 
import { onMainSelected, onSupSelected } from "../../stores/slices/pToolbarSelectSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductToolbarAdd() {

  const mainSelect = useSelector((state) => state.pToolbarSelect.isMainSelected);
  const supSelect = useSelector((state) => state.pToolbarSelect.isSupSelected);
  const dispatch = useDispatch();
  const handleSupSelect = () => {

    dispatch(onSupSelected("")); 
  };
  return(
  <Box
    sx={{
      maxWidth: "lg",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ m: 1,  justifyContent: "start"}}>
      { supSelect !== "" &&
      <Button color="primary" variant="contained" onClick={handleSupSelect}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>}
    </Box>

    <Box
      sx={{
        maxWidth: "lg",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          <FontAwesomeIcon icon={faCirclePlus} />

          <Typography sx={{ ml: 1 }} variant="h7">
            เพิ่มสินค้า
          </Typography>
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          <FontAwesomeIcon icon={faCirclePlus} />
          <Typography sx={{ ml: 1 }} variant="h7">
            เพิ่มหมวดหมู่
          </Typography>
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          <FontAwesomeIcon icon={faCirclePlus} />
          <Typography sx={{ ml: 1 }} variant="h7">
            เพิ่มประเภท
          </Typography>
        </Button>
      </Box>
    </Box>
  </Box>
);}


//export default ProductToolbarAdd
