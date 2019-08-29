import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import logo from '../images/sun.svg';
import './NavBar.css';

export default function NavBar3({signout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    
    <div className="navbar" >
          <div  className="navbar__main-flex" >
        <div className="navbar__logo-flex">
            <img className="navbar__image" src={logo} alt="" />
            <h2 className="navbar__name">Let's Get Tacos!</h2>
        </div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        
            <i className="material-icons" style={{fontSize: "45px", color: "#a83027"}}>dehaze</i>
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link to="/log-a-taco" className="menu__item">Log A Taco</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/my-profile" className="menu__item">My Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/my-tacos" className="menu__item" >My Tacos</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/explore-tacos" className="menu__item" >Other People's Tacos</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/" onClick={signout} className="menu__item" >Sign Out</Link></MenuItem>
        </Menu>
        </div>{/* end of flexbox   */}
    </div>
   
  );
}