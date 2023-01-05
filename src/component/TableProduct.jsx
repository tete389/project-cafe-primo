import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableProduct({ productItem }) {
  return (
    <TableContainer component={Paper} className="mx-4 !w-auto">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ชื่อสินค้า</TableCell>
            <TableCell align="right">ราคาตั้งต้น</TableCell>
            <TableCell align="right">สถานะ</TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {productItem?.map((row) => (
            <TableRow
              key={row.prodId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.prodName}
              </TableCell>
              <TableCell align="right">{row.prodPrice}</TableCell>
              <TableCell align="right">{row.prodStatus}</TableCell>
              <TableCell align="right" >
                <Button variant="outlined" color="warning" className="p-4">
                  แก้ไข
                </Button>

                <Button variant="outlined" color="error" className="p-4">
                  ลบ
                </Button>
              </TableCell>
              

              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
