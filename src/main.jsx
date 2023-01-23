import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </>
  </Provider>
);
