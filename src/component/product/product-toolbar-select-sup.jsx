import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  onMainSelected,
  onSupSelected,
} from "../../stores/slices/pToolbarSelectSlice";
import { types } from "../../mocks/product-type-mocks";
import { category } from "../../mocks/product-cate-mocks";
import { textToolbar } from "../../mocks/product-toolbar";

export default function ProductToolbarSelectedSup({ data }) {
  const mainSelect = useSelector(
    (state) => state.pToolbarSelect.isMainSelected
  );
  const supSelect = useSelector((state) => state.pToolbarSelect.isSupSelected);
  const dispatch = useDispatch();
  const handleSupSelect = (event) => {
    dispatch(onSupSelected(event.target.value));
  };

  return (
    <FormControl sx={{ mx: 1, pb: 2, minWidth: 200 }}>
      <InputLabel id="select-label">{mainSelect}</InputLabel>
      <Select
        labelId="select-label"
        id="select-label"
        label={mainSelect}
        value={supSelect}
        onChange={handleSupSelect}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {mainSelect === textToolbar.mainSelet[0]
          ? types?.map((types, index) => (
              <MenuItem key={types.typeId} value={types.typeName}>
                {types.typeName}
              </MenuItem>
            ))
          : category?.map((cate, index) => (
              <MenuItem key={cate.cateId} value={cate.cateName}>
                {cate.cateName}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
}

//productSelected.propTypes = {}
