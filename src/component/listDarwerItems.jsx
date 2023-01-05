import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pages = [
  {
    page : "Dashboard",
    pageRoute : "/",
    icon : <LayersIcon />
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
      page : "จัดการสินค้า",
      pageRoute : "/products",
      icon : <BarChartIcon />
  },
  {
      page : "โปรโมชั่น",
      pageRoute : "/promotions",
      icon : <DashboardIcon />
  }
  ]


export const mainListDrawerItems = (
  <React.Fragment>
    {Pages.map((p) => (
      <ListItemButton key={p.page}>
      <ListItemIcon>
        {p.icon}
      </ListItemIcon>
      <ListItemText primary={p.page} />
    </ListItemButton>
    ))}
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListDrawerItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);