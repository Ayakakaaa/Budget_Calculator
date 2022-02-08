import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { textAlign } from '@mui/system';

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container sx={{ bgcolor: '#cfe8fc', display: "flex", flexDirection: "row", textAlign: "center"}} fixed>
        <img src='/yardzenLogo.png' style={{height: "20px", position: "fixed"}}/>
        <h1 style={{textAlign: "center" }}>Yardzen Budget Calculator</h1>        
      </Container> */}
      <Container sx={{ bgcolor: 'white', display: "flex", flexDirection: "column", justifyContent: "center", border: "1px solid #ACB8AC"}} fixed>
        <img src='/yardzenLogo.png' style={{height: "20px", alignSelf: "start", position: "fixed", top: 0}}/>
        <h1 style={{alignSelf: "center"}}>Yardzen Budget Calculator</h1>        
      </Container>
    </React.Fragment>
  );
}