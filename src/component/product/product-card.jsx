import React from 'react'
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch  } from "react-redux"; 
import { onMainSelected, onSupSelected } from "../../stores/slices/pToolbarSelectSlice";


export default function ProductCard ({ data  }) {

  const mainSelect = useSelector((state) => state.pToolbarSelect.isMainSelected);
  const supSelect = useSelector((state) => state.pToolbarSelect.isSupSelected);
  const dispatch = useDispatch();
  const handleSupSelect = () => {

    dispatch(onSupSelected(data?.typeName == null ? data?.cateName : data?.typeName)); 
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
      }}
      onClick={handleSupSelect}
      
      
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
         
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {data?.typeName == null ? data?.cateName : data?.typeName}
        </Typography>
        {/* <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography> */}
      </CardContent>

      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            {/* <ClockIcon color="action" /> */}
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              จำนวนสินค้า
            </Typography>
          </Grid>

          
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            {/* <DownloadIcon color="action" /> */}
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ px: 1 }}
              variant="body2"
            >
              {data?.prodCount}
              {'  '}
              รายการ
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );}

// ProductCard.propTypes = {
//   data: PropTypes.object.isRequired
//   };
