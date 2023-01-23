import React from "react";
import styled from "@emotion/styled";

const HeaderDrawerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HeaderDrawer({ children }) {
  return (
    <>
      <HeaderDrawerStyled>{children}</HeaderDrawerStyled>
    </>
  );
}

export default HeaderDrawer;
