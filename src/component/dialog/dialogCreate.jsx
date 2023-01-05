import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function FormDialog() {
  let nameOfHot = "ร้อน";
  let nameOfIce = "เย็น";
  let nameOfFrappe = "ปั้่น";

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState({
    hot: false,
    ice: false,
    frappe: false,
  });
  const [price, setPrice] = React.useState({
    hotPrice: 0,
    icePrice: 0,
    frappePrice: 0,
  });

  const stateDetail = {
    prodName: "",
    prodImg: "",
    prodStatus: "",
    prodPrice: "",
    prodTimeProcess: "",
    prodType: [],
  };
  const [productDetail, setProductDetail] = React.useState(stateDetail);

  const { hot, ice, frappe } = type;
  const { hotPrice, icePrice, frappePrice } = price;

  React.useEffect(() => {
    console.log(type);
  }, [type]);

  const handleChange = (event) => {
    setType({
      ...type,
      [event.target.name]: event.target.checked,
    });
  };

  const keepType = () => {
    if (hot === true) {
      productDetail.prodType.push({
        typeName: nameOfHot,
        typeStatus: "sale",
        typePrice: hotPrice,
      });
    }
    if (ice === true) {
      productDetail.prodType.push({
        typeName: nameOfIce,
        typeStatus: "sale",
        typePrice: icePrice,
      });
    }
    if (frappe === true) {
      productDetail.prodType.push({
        typeName: nameOfFrappe,
        typeStatus: "sale",
        typePrice: frappePrice,
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;

    setOpen(false);
    setProductDetail(stateDetail);
  };

  const createProductApi = async () => {
    keepType();
    console.log(productDetail);

    // await axios ({
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json'},
    //   url:'http://localhost:8080/prod/createProd',
    //   data: {
    //     "prodName": productDetail.prodName,
    //     "prodImg": 'img',
    //     "prodStatus": productDetail.prodStatus,
    //     "prodPrice": parseFloat(productDetail.prodPrice),
    //     "prodTimeProcess": parseFloat(productDetail.prodTimeProcess),
    // }
    // })

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "JSESSIONID=4ADCD81345EA8D790CA18C0DB45FFCE6");

    var raw = JSON.stringify({
      prodName: productDetail.prodName,
      prodImg: "img",
      prodStatus: productDetail.prodStatus,
      prodPrice: parseFloat(productDetail.prodPrice),
      prodTimeProcess: parseFloat(productDetail.prodTimeProcess),
      prodType: productDetail.prodType,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:8080/prod/createProd", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => (setOpen(false), setProductDetail({ stateDetail })))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        เพิ่มสินค้า
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>เพิ่มสินค้า</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อสินค้า"
            defaultValue={productDetail.prodName}
            onChange={(e) =>
              setProductDetail({ ...productDetail, prodName: e.target.value })
            }
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="สถานะสินค้า"
            defaultValue={productDetail.prodStatus}
            onChange={(e) =>
              setProductDetail({ ...productDetail, prodStatus: e.target.value })
            }
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Price"
            label="ราคา"
            type="number"
            defaultValue={productDetail.prodPrice}
            onChange={(e) =>
              setProductDetail({ ...productDetail, prodPrice: e.target.value })
            }
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="TimeProcess"
            label="เวลาในการทำ"
            type="number"
            defaultValue={productDetail.prodTimeProcess}
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                prodTimeProcess: e.target.value,
              })
            }
            variant="standard"
          />

          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">
                เพิ่มประเภทสินค้า (ถ้ามี)
              </FormLabel>
              <FormHelperText>เพิ่ม - ลด จากราคาตั้งต้น</FormHelperText>
              <FormGroup className="mt-2">
                <div className="flex flex-row  justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        checked={hot}
                        onChange={handleChange}
                        name="hot"
                      />
                    }
                    label={nameOfHot}
                  />
                  <input
                    type="number"
                    disabled={!hot}
                    className="border-2 pl-2 w-16 h-8"
                    defaultValue={hotPrice}
                    onChange={(e) =>
                      setPrice({ ...price, hotPrice: e.target.value.trim(" ") })
                    }
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        checked={ice}
                        onChange={handleChange}
                        name="ice"
                      />
                    }
                    label={nameOfIce}
                  />
                  <input
                    type="number"
                    disabled={!ice}
                    className="border-2 pl-2 w-16 h-8"
                    defaultValue={icePrice}
                    onChange={(e) =>
                      setPrice({ ...price, icePrice: e.target.value.trim(" ") })
                    }
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <FormControlLabel
                    className="w-24"
                    control={
                      <Checkbox
                        checked={frappe}
                        onChange={handleChange}
                        name="frappe"
                      />
                    }
                    label={nameOfFrappe}
                  />
                  <input
                    type="number"
                    disabled={!frappe}
                    className="border-2 pl-2 w-16 h-8"
                    defaultValue={frappePrice}
                    onChange={(e) =>
                      setPrice({
                        ...price,
                        frappePrice: e.target.value.trim(" "),
                      })
                    }
                  />
                </div>
              </FormGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={createProductApi} color="success">
            Create
          </Button>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
