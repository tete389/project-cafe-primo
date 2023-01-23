import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useNavigate } from 'react-router-dom';


import ListSubheader from '@mui/material/ListSubheader';

import AssignmentIcon from '@mui/icons-material/Assignment';

const Pages = [
    {
      page : "จัดการข้อมูลสินค้า",
      pageRoute : "/products",
      
  },
    {
        page : "จัดการข้อมูลทั่วไป",
        pageRoute : "/",
        
    },
    {
        page : "จัดการโปรโมชั่น",
        pageRoute : "/",
        
    },
    {
        page : "ประวัติออเดอร์",
        pageRoute : "/",
       
    },
    
]

function SecondaryListDrawerItems() {
    const navigte = useNavigate();
    return (
      <>
      <ListSubheader component="div" inset>
         จัดการหลังร้าน
        </ListSubheader>
      {Pages.map((p) => (
        <ListItemButton key={p.page} onClick={() => (navigte(p.pageRoute))}>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={p.page} />
      </ListItemButton>
      ))}
      
    </>
    )
}

export default SecondaryListDrawerItems