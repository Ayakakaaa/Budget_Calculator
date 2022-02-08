import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Header() {

  const containerStyles = {
    bgcolor: 'white', 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    border: "1px solid #ACB8AC"
  };

  const logoStyles = {
    height: "20px", 
    alignSelf: "start", 
    position: "fixed", 
    top: 0
  };

  const titleStyles = {
    alignSelf: "center"
  }; 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={containerStyles} fixed>
        <img src='/yardzenLogo.png' style={logoStyles} alt="logo"/>
        <h1 style={titleStyles}>Yardzen Budget Calculator</h1>        
      </Container>
    </React.Fragment>
  );
}