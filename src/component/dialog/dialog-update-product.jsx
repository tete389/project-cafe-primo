import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function DialogUpdateProduct({ prodIdItem }) {
  const [open, setOpen] = React.useState(false);
  const [productData, setProductData] = React.useState({});

  let nameOfHot = "ร้อน";
  let nameOfIce = "เย็น";
  let nameOfFrappe = "ปั้่น";

  const handleClickOpen = () => {
    getProductById();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProductById = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      prodId: prodIdItem,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:8080/prod/getProdById", requestOptions)
      .then((response) => response.json())
      .then((result) => setProductData(result))
      .catch((error) => console.log("error", error));
  };

  /////////////////////////
  const updateProductById = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      prodId: prodIdItem.prodId,
      prodName: prodIdItem.prodName,
      prodImg: prodIdItem.prodImg,
      prodStatus: prodIdItem.prodStatus,
      prodPrice: prodIdItem.prodPrice,
      prodTimeProcess: prodIdItem.prodTimeProcess,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:8080/prod/updateProd", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {}, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="warning">
        แก้ไข
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>แก้ไขข้อมูลสินค้า</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อสินค้า"
            defaultValue={productData.prodName}
            //variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="สถานะสินค้า"
            riant="standard"
            defaultValue={productData.prodStatus}
            //variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="Price"
            label="ราคา"
            type="number"
            defaultValue={productData.prodPrice}
            //variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="TimeProcess"
            label="เวลาในการทำ"
            type="number"
            defaultValue={productData.prodTimeProcess}
            //variant="standard"
          />

          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">
                แก้ไขประเภทสินค้า (ถ้ามี)
              </FormLabel>
              <FormHelperText>เพิ่ม - ลด จากราคาตั้งต้น</FormHelperText>
              <FormGroup className="mt-2">
                <div className="flex flex-row  justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        // checked={hot}
                        // onChange={handleChange}
                        name="hot"
                      />
                    }
                    label={nameOfHot}
                  />
                  <input
                    type="number"
                    //disabled={!hot}
                    className="border-2 pl-2 w-16 h-8"
                    // defaultValue={hotPrice}
                    // onChange={(e) =>
                    //   setPrice({ ...price, hotPrice: e.target.value.trim(" ") })
                    // }
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        // checked={ice}
                        // onChange={handleChange}
                        name="ice"
                      />
                    }
                    label={nameOfIce}
                  />
                  <input
                    type="number"
                    //disabled={!ice}
                    className="border-2 pl-2 w-16 h-8"
                    // defaultValue={icePrice}
                    // onChange={(e) =>
                    //   setPrice({ ...price, icePrice: e.target.value.trim(" ") })
                    // }
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        // checked={frappe}
                        // onChange={handleChange}
                        name="frappe"
                      />
                    }
                    label={nameOfFrappe}
                  />
                  <input
                    type="number"
                    //disabled={!frappe}
                    className="border-2 pl-2 w-16 h-8"
                    // defaultValue={frappePrice}
                    // onChange={(e) =>
                    //   setPrice({
                    //     ...price,
                    //     frappePrice: e.target.value.trim(" "),
                    //   })
                    // }
                  />
                </div>
              </FormGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={updateProductById} color="success">
            Update
          </Button>
          <Button onClick={handleClose} color="warning">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
