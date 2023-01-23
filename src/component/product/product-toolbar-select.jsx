import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
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
  onStatusSelected,
} from "../../stores/slices/pToolbarSelectSlice";

import ProductToolbarSelectedSup from "./product-toolbar-select-sup";

import { textToolbar } from "../../mocks/product-toolbar";

export default function ProductToolbarSelect() {
  const mainSelect = useSelector(
    (state) => state.pToolbarSelect.isMainSelected
  );
  const statusSelect = useSelector(
    (state) => state.pToolbarSelect.isStatusSelected
  );
  const dispatch = useDispatch();

  const handleMainSelect = (event) => {
    dispatch(onMainSelected(event.target.value));
    dispatch(onSupSelected(""));
    dispatch(onStatusSelected(textToolbar.statusSeletEn[0]));
  };

  const handleStatusSelect = (event) => {
    dispatch(onStatusSelected(event.target.value));
  };

  // React.useEffect(() => {
  //   console.log(mainSelect);
  // }, [mainSelect]);

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          
        }}
      >
        <Typography sx={{ mx: 1, mb:2 }} variant="h4">
          ข้อมูลสินค้า
        </Typography>
      </Box>

     
        <Card>
          <CardContent sx={{ mb: -2 }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ maxWidth: "lg" }}>
                <FormControl sx={{ mx: 1, minWidth: 250 }}>
                  <InputLabel id="select-main-label">ค้นหาตาม</InputLabel>
                  <Select
                    labelId="select-main-label"
                    id="select-main-label"
                    value={mainSelect}
                    label="ค้นหาตาม"
                    onChange={handleMainSelect}
                  >
                    <MenuItem value={textToolbar.mainSelet[0]}>
                      {textToolbar.mainSelet[0]}
                    </MenuItem>
                    <MenuItem value={textToolbar.mainSelet[1]}>
                      {textToolbar.mainSelet[1]}
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    หากไม่เข้าเงื่อนไขจะอยู่ใน "อื่นๆ"
                  </FormHelperText>
                </FormControl>
                <ProductToolbarSelectedSup />

                <FormControl sx={{ mx: 1,  minWidth: 200 }}>
                  <InputLabel id="select-status-label">สถานะ</InputLabel>
                  <Select
                    value={statusSelect}
                    onChange={handleStatusSelect}
                    label="สถานะ"
                    labelId="select-status-label"
                    id="select-status-label"
                  >
                    <MenuItem value={textToolbar.statusSeletEn[0]}>
                      {textToolbar.statusSeletTh[0]}
                    </MenuItem>
                    <MenuItem value={textToolbar.statusSeletEn[1]}>
                      {textToolbar.statusSeletTh[1]}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </CardContent>
        </Card>
      
    </>
  );
}
