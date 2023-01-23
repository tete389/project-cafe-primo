import * as React from "react";

import {
  Box,
  Paper,
  Toolbar,
  Container,
  Grid,
  Pagination,
  styled,
  Button,
} from "@mui/material";

import ProductToolbarSelect from "../../component/product/product-toolbar-select";
import ProductTable from "../../component/product/Product-table";
import Layout from "../../component/Layout/Layout";
import ProductCard from "../../component/product/product-card";
import ProductToolbarAdd from "../../component/product/product-toolbar-add";
import TableContainer from "@mui/material/TableContainer";

import { types } from "../../mocks/product-type-mocks";
import { category } from "../../mocks/product-cate-mocks";
import { textToolbar } from "../../mocks/product-toolbar";
import { products } from "../../mocks/product-mocks";

import { useSelector, useDispatch } from "react-redux";

export default function ProductsPage() {
  const mainSelect = useSelector(
    (state) => state.pToolbarSelect.isMainSelected
  );
  const supSelect = useSelector((state) => state.pToolbarSelect.isSupSelected);
  const statusSelect = useSelector(
    (state) => state.pToolbarSelect.isStatusSelected
  );

  // const [open, setOpen] = React.useState(false);
  // const [productData, setProductData] = React.useState([]);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const getProduct = async () => {
  //   var requestOptions = {
  //     method: "POST",
  //     redirect: "follow",
  //   };

  //   await fetch("http://localhost:8080/prod/getProdForCustomer", requestOptions)
  //     .then((result) => result.json())
  //     .then((response) => setProductData(response))
  //     .catch((error) => console.log("error", error));
  // };

  // React.useEffect(() => {
  //   getProduct();
  // }, []);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <Layout>
      <Box>
        <Container maxWidth="lg" >
          <ProductToolbarSelect />
          <ProductToolbarAdd />
          <TableContainer
            sx={{
              pt: 2,
              maxHeight: { xs: 350, sm: 600, md: 370 }
              //display: "flex", flexDirection: { xs: "column", sx:"row", gap: 4}
            }}
          >
            <Grid container >
              {mainSelect === textToolbar.mainSelet[1] ? (
                supSelect === "" ? (
                  category?.map(
                    (cate) =>
                      cate.cateStatus === statusSelect && (
                        <Grid
                          item
                          key={cate.cateId}
                          lg={3}
                          md={4}
                          sm={6}
                          xs={6}
                          sx={{p:1}}
                        >
                          <ProductCard data={cate} />
                        </Grid>
                      )
                  )
                ) : (
                  <ProductTable productItem={products} />
                )
              ) : supSelect === "" ? (
                types?.map(
                  (type) =>
                    type.typeStatus === statusSelect && (
                      <Grid item key={type.typeId} lg={3} md={4} sm={6} xs={6} sx={{p:1}}> 
                        <ProductCard data={type} />
                      </Grid>
                    )
                )
              ) : (
                <ProductTable productItem={products} />
              )}
            </Grid>
          </TableContainer>
        </Container>
      </Box>

      {/* <ProductTable productItem={productData} /> */}
    </Layout>
  );
}
