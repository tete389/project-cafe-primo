import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    backgroundColor: "rgba(71, 98, 130, 1.2)",
    color: "rgba(255,255,255,255)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductTableCate({ props }) {
  const supSelect = useSelector((state) => state.pToolbarSelect.isSupSelected);
  const statusSelect = useSelector((state) => state.pToolbarSelect.isStatusSelected);

  return props?.map((row, index) =>
  row.prodStatus === statusSelect &&
    row.category?.map(
      (cate, index) =>
        cate.cateName === supSelect && (
          <StyledTableRow key={row.prodId}>
            <StyledTableCell sx={{ maxWidth: 100 }} align="left">{row.prodId}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.prodName + " " + "(" + row.typeName + ")"}
            </StyledTableCell>
            <StyledTableCell align="center">{row.prodPrice}</StyledTableCell>
            <StyledTableCell align="center">{row.prodImg}</StyledTableCell>
            <StyledTableCell align="center" sx={{ width: '20%' }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  
                }}
              >
                <Button variant="contained" color="warning" sx={{ px: 2 }}>
                  แก้ไข
                </Button>
                <Button variant="contained" color="error">
                  ลบ
                </Button>
              </Box>
            </StyledTableCell>
          </StyledTableRow>
        )
    )
  );
}
