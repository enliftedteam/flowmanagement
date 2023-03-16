import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import HomeIcon from '@mui/icons-material/Home';
// MUI imports below
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

//menu drop down

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //this is to make the save & publish button render
  //base off use is logged in or not.
  //we will need to hook this up to the login component.
  const isLoggedIn = true;
  return (
    <div className="nav">
      <Link to="/">
        <img
          className="nav-logo"
          src="../public/images/footer-logo.png"
          alt="Logo"
          style={{width: '175px', height: '87px'}}
        />
      </Link>

{/* ////////////////Save&PublishButton////////////// */}
<Box sx={{flexGrow: 15, marginLeft: '-200px', marginRight:'-20px'}}>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '10px',
    }}>
    {isLoggedIn ? (
      <button
        className="nav-save-button"
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#3530e9")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#151D92")
        }
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          background: '#151D92',
          color: '#fff',
          border: 'none',
        }}>
        Save
      </button>
    ) : (
      <></>
    )}
    {isLoggedIn ? (
      <button
        className="nav-publish-button"
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#3530e9")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#008CBA")
        }
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          background: '#008CBA',
          color: '#fff',
          border: 'none',
        }}>
        Publish
      </button>
    ) : (
      <h3></h3>
    )}
  </div>
</Box>

{/* ////////////////Save&PublishButton////////////// */}

      <Box sx={{flexGrow: 1}}></Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{mr: 2}}
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="dropdown-menu">
        <MenuItem onClick={handleClose}>
          <HomeIcon sx={{mr: 1}} />
          <Link
            to="/"
            className="navLink"
            style={{color: 'black', width: 80, maxWidth: '100%'}}>
            Home
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() =>
            (window.location.href = 'https://enlifted.me/contact/')
          }>
          <AnnouncementIcon sx={{mr: 1}} />
          Contact Us
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HelpOutlineIcon sx={{mr: 1}} />
          <Link
            to="about"
            className="navLink"
            style={{color: 'black', width: 80, maxWidth: '100%'}}>
            About Us
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
