import React from 'react';
import pfp from '../images/pfp.jpg'

function Header() {


  return(
    <header>
      <img id="profile" src={pfp} alt="profile pic"></img>
      <h1>Burak Aksu</h1>
    </header>
  );
}

export default Header;