import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: 'white', display: "flex", flexDirection: "column", justifyContent: "center", border: "1px solid #ACB8AC"}} fixed>
        <img src='/yardzenLogo.png' style={{height: "20px", alignSelf: "start", position: "fixed", top: 0}} alt="logo"/>
        <h1 style={{alignSelf: "center"}}>Yardzen Budget Calculator</h1>        
      </Container>
    </React.Fragment>
  );
}