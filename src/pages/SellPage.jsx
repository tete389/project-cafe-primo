import { Box, Container, Grid, Typography, Toolbar } from "@mui/material";
import React from "react";
import Layout from "../component/Layout/Layout";
import SellToolbar from "../component/sell/sell-toolbar";
import { textToolbar } from "../mocks/product-toolbar";
import SellCard from "../component/sell/sell-card";
import { products } from "../mocks/product-mocks";
import { useSelector, useDispatch } from "react-redux";
import {} from "../stores/slices/sellSlice";
import SellDrawerMenubar from "../component/sell/sell-drawer-menubar";
import TableContainer from "@mui/material/TableContainer";
import SellDrawerAddToCart from "../component/sell/sell-drawer-add-to-cart";
import productApi from "../services/api/productApi";
import { getProdctsToSearch } from "../stores/slices/productApiSlice";
import axios from "axios";

export default function SellPage() {
  const drawerSearch = useSelector((state) => state.sellAction.isDrawerSearch);
  const res = useSelector((state) => state.productApi.productsApi);
  const drawerAddToCartOpen = useSelector(
    (state) => state.sellAction.isDrawerAddToCartOpen
  );

  const dispatch = useDispatch();

  const [toolbarSearch, setToolbarSearch] = React.useState("");
  const handleToolbarSearch = (value) => {
    setToolbarSearch(value);
  };

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const fetchProduct = async () => {
      var requestOptions = {
        headers: myHeaders,
        method: 'POST',
        redirect: 'follow'
      };
      
      // await fetch("http://localhost:8080/prod/getAllProdForEmployee", requestOptions)
      //   .then(response => response.json())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));


      // const resApi = await productApi.post(`prod/getAllProdForEmployee`)


      var config = {
        method: 'post',
        url: 'http://localhost:8080/prod/getAllProdForEmployee',
      headers: { 
        'Content-Type': 'application/json'
      },
        
      };
      await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        
        dispatch(getProdctsToSearch(response.data.res));
      })
      .catch(function (error) {
        console.log(error);
      });
      

      
      setTimeout(() => {
        //dispatch(getProdctsToSearch(resApi));
      }, 500);
    };

    fetchProduct();
  }, []);

  console.log(res);
  return (
    <Layout>
      <Box>
        <Container maxWidth="lg">
          <SellToolbar handleToolbarSearch={handleToolbarSearch} />

          <TableContainer
            sx={{
              pt: 2,
              maxHeight: { xs: 600, sm: 800, md: 900 },
            }}
          >
            <Grid container>
              {toolbarSearch !== ""
                ? products
                    .filter((search) => {
                      const prodName = search.prodName + search.typeName;
                      return prodName.includes(toolbarSearch);
                    })
                    .map(
                      (prod) =>
                        prod.prodStatus === textToolbar.statusSeletEn[0] && (
                          <Grid
                            item
                            key={prod.prodId}
                            lg={3}
                            md={4}
                            sm={6}
                            xs={6}
                            sx={{ p: 1 }}
                          >
                            <SellCard data={prod} />
                          </Grid>
                        )
                    )
                : drawerSearch.search1 === textToolbar.mainSelet[1]
                ? products?.map(
                    (prod) =>
                      prod.prodStatus === textToolbar.statusSeletEn[0] &&
                      prod.category?.map(
                        (cate) =>
                          cate.cateName === drawerSearch.search2 && (
                            <Grid
                              item
                              key={prod.prodId}
                              lg={3}
                              md={4}
                              sm={6}
                              xs={6}
                              sx={{ p: 1 }}
                            >
                              <SellCard data={prod} />
                            </Grid>
                          )
                      )
                  )
                : productsByCate?.map(
                    (prod) =>
                      prod.prodStatus === textToolbar.statusSeletEn[0] &&
                      prod.typeName === drawerSearch.search2 && (
                        <Grid
                          item
                          key={prod.prodId}
                          lg={3}
                          md={4}
                          sm={6}
                          xs={6}
                          sx={{ p: 1 }}
                        >
                          <SellCard data={prod} />
                        </Grid>
                      )
                  )}
            </Grid>
          </TableContainer>
        </Container>
      </Box>
      <SellDrawerMenubar />
      <SellDrawerAddToCart />
    </Layout>
  );
}
