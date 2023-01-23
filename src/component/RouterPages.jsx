import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

////  page
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import SellPage from "../pages/SellPage";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/product/ProductsPage";
import PromotionsPage from "../pages/PromotionsPage";

const mdTheme = createTheme({
  // components:{
  //     MuiListItemButton : {
  //       selected: {
  //         bgcolor : 'rgb(102, 157, 246)'
  //       },
  //     },
      
    
  // },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(71, 98, 130, 0.2)' ,

          '&.Mui-selected': {
            backgroundColor: 'rgba(71, 98, 130, 1.2)',
            // "&:hover": {
            //   backgroundColor: 'rgba(255,255,255,0.5)',
            // },
          },
        },
      },
    },

    
  },

  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 150,
      // recommended when something is leaving screen
      leavingScreen: 150,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

function RouterPages() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default RouterPages;
