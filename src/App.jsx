import React from "react";
import css from './app.css'
import { useState } from "react";
import bulbon from "./assests/bulb-on.png";
import bulboff from "./assests/bulb-off.png";
import {Box, Button, Container } from "@mui/material";



export default function App() {

  const [toggle, settoggle] = useState(false);

  const togglebutton = ()=>{
    settoggle(!toggle)
  }
  
  return (
<div align="center">
 <Box>
  <Container>
 <img src={toggle?bulbon:bulboff} className="photo" alt="" />
 </Container>
 </Box>
 <Button variant="contained" onClick={togglebutton} >{toggle?'Off':'On'}</Button>
</div>
  );
}
