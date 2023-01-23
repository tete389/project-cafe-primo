import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses  } from "@mui/material/TableCell";
import { useSelector, useDispatch } from "react-redux";
import { textToolbar } from "../../mocks/product-toolbar";
import ProductTableType from "./product-table-type";
import ProductTableCate from "./product-table-cate";

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

export default function ProductTable({ productItem }) {
  const mainSelect = useSelector(
    (state) => state.pToolbarSelect.isMainSelected
  );
 
  return (
    <TableContainer component={Paper} sx={{ maxHeight: { xs: 300, sm: 330 ,md: 350} }}>
      <Table stickyHeader sx={{ minWidth: 600  }} aria-label="customized table">
        <TableHead >
          <TableRow>
          <StyledTableCell sx={{ maxWidth: 100 }}>หมายเลขสินค้า</StyledTableCell>
            <StyledTableCell sx={{ maxWidth: 100 }}>ชื่อสินค้า</StyledTableCell>
            <StyledTableCell sx={{ maxWidth: 50 }}align="center">ราคา</StyledTableCell>
            <StyledTableCell sx={{ maxWidth: 100 }}align="center">รูปภาพ</StyledTableCell>
            <StyledTableCell align="center" sx={{ width: '20%' }}>
              จัดการ
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainSelect === textToolbar.mainSelet[0] ? (
            
            <ProductTableType props={productItem} />
          ) : (
            <ProductTableCate props={productItem} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}

// <TableRow
//   key={row.prodId}
//   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// >
//   <TableCell component="th" scope="row">
//     {index+1}
//   </TableCell>
//   <TableCell component="th" scope="row">
//     {row.prodName}
//   </TableCell>
//   <TableCell align="right">{row.prodPrice}</TableCell>
//   <TableCell align="right">{row.prodStatus}</TableCell>
//   <TableCell align="right" >
//     <div className="flex flex-row gap-4 justify-end ">
//       <Box><DialogUpdateProduct prodIdItem={row.prodId}/></Box>

//       <Button variant="outlined" color="error" className="p-4">
//         ลบ
//       </Button>
//     </div>
//   </TableCell>

//   {/* <TableCell align="right">{row.protein}</TableCell> */}
// </TableRow>
