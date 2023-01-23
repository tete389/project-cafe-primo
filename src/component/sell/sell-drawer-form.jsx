import React from 'react'
import {
    
    FormControl,
    FormHelperText,
    InputLabel,
   
    Select,
    
  } from "@mui/material";

export default function SellDrawerForm({inputId, value, label, onChange, name, children}) {
    // const {inputId, value, label, onChange, name} = props;
  return (
    <FormControl sx={{ m: 1, ml: 2, minWidth: 200 }}>
            <InputLabel id={inputId}>{label}</InputLabel>
            <Select
              labelId={inputId}
              id={inputId}
              value={value}
              label={label}
              onChange={onChange}
              name={name}
            >
              { children }
            </Select>
            {/* <FormHelperText>หากไม่เข้าเงื่อนไขจะอยู่ใน "อื่นๆ"</FormHelperText> */}
          </FormControl>
  )
}

