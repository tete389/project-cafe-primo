import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import { useNavigate } from 'react-router-dom';

const Pages = [
    {
      page : "Dashboard",
      pageRoute : "/",
      icon : <DashboardIcon />
  },
    {
        page : "ขายหน้าร้าน",
        pageRoute : "/sell",
        icon : <LayersIcon />
    },
    {
        page : "ออเดอร์",
        pageRoute : "/orders",
        icon : <ShoppingCartIcon />
    },
    {
        page : "โปรโมชั่น",
        pageRoute : "/promotions",
        icon : <BarChartIcon />
    }
]




function MainListDrawerItemsComponent() {
    const navigte = useNavigate();
  return (
    <>
    {Pages.map((p) => (
      <ListItemButton key={p.page} onClick={() => (navigte(p.pageRoute))}>
      <ListItemIcon>
        {p.icon}
      </ListItemIcon>
      <ListItemText primary={p.page} />
    </ListItemButton>
    ))}
    
  </>
  )
}

export default MainListDrawerItemsComponent