import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  onDrawerAddToCartOpen,
} from "../../stores/slices/sellSlice";

export default function SellCard ({ data })
{
  const drawerAddToCartOpen = useSelector(
    (state) => state.sellAction.isDrawerAddToCartOpen
  );
  const dispatch = useDispatch();

  const handleDrawerAddToCartOpen = () => {
    console.log(data.prodId);
    dispatch(onDrawerAddToCartOpen());
  }
  return(
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      cursor: 'pointer',
    }}
    onClick={handleDrawerAddToCartOpen}
  >
    <CardContent>

      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      ></Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {data?.prodImg}
      </Typography>
    </CardContent>

    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* <ClockIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {data?.prodName + " (" + data?.typeName + ") "}
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* <DownloadIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ px: 1 }}
            variant="body2"
          >
            {" "}
            {data?.prodPrice}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);}

// SellCard.propTypes = {
// data: PropTypes.object.isRequired
// };
