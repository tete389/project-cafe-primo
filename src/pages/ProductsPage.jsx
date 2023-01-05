import * as React from "react";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { ProductListToolbar } from "../component/product/product-list-toolbar";
import TableProduct from "../component/TableProduct";

function ProductsPage() {
  const [open, setOpen] = React.useState(false);
  const [productData, setProductData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProduct = async () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch("http://localhost:8080/prod/getProdForCustomer", requestOptions)
      .then((result) => result.json())
      .then((response) => (setProductData(response)))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {/* {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))} */}
            </Grid>
          </Box>
        </Container>
        <TableProduct productItem={productData} />
      </Box>
    </>
  );
}

export default ProductsPage;
