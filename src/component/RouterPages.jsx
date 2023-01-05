import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
////  page
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import SellPage from "../pages/SellPage";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/ProductsPage";
import PromotionsPage from "../pages/PromotionsPage";

import AppBarComponent from "../component/AppBarComponent";
import DrawerComponent from "../component/DrawerComponent";

const mdTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
  },
});

function RouterPages() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={mdTheme}>
          <CssBaseline />
          <AppBarComponent />
          <DrawerComponent />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default RouterPages;
