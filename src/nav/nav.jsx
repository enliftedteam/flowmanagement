import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import HomeIcon from '@mui/icons-material/Home';
// MUI imports below
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {useLocation} from 'react-router-dom'
import {useAuth} from '../auth';
//menu drop down

export default function Nav({showButtons = false}) {
 const [anchorEl, setAnchorEl] = useState(null);
 const auth = useAuth();
 const handleClick = event => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };

 function handleSignOut() {
  auth.signout(() => {});
}
 //this is to make the save & publish button render
 //base off use is logged in or not.
 //we will need to hook this up to the login component.
 const isLoggedIn = true;
 const location = useLocation();
 return (
  <div className="nav">
   <Link to="/">
    <img
     className="nav-logo"
     src="../public/images/footer-logo.png"
     alt="Logo"
     style={{width: '100px', height: '50px'}}
    />
   </Link>
   {/* ////////////////Save&PublishButton%%%%%TOP%%%%%%%%%%%////////////// */}
         {/* ////conditionalRenderButtons///// */}
   <Box sx={{flexGrow: 15, marginLeft: '-200px', marginRight: '25px', width: '100%'}}>
    <div
     style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '10px',
      // marginLeft: '1000px',
     }}>
     {isLoggedIn && location.pathname === '/Constructor' ? (
   <>
    <button
     className="nav-save-button"
     onMouseOver={e =>
      (e.currentTarget.style.backgroundColor = '#3530E9')
     }
     onMouseOut={e =>
      (e.currentTarget.style.backgroundColor = '#151D92')
     }
     style={{
      padding: '10px 20px',
      borderRadius: '20px',
      background: '#151D92',
      color: '#fff',
      border: 'none',
     }}
    >
     Save
    </button>
    <button
     className="nav-publish-button"
     onMouseOver={e =>
      (e.currentTarget.style.backgroundColor = '#3530E9')
     }
     onMouseOut={e =>
      (e.currentTarget.style.backgroundColor = '#008CBA')
     }
     style={{
      padding: '10px 20px',
      borderRadius: '20px',
      background: '#008CBA',
      color: '#fff',
      border: 'none',
     }}
    >
     Publish
    </button>
   </>
  ) : null}
 </div>
   </Box>
   {/* ////////////////Save&PublishButton%%BOTTOM%%////////////// */}
{/* //Menu DropDownButton/ */}
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
    <MenuItem onClick={handleClose}>
     <AnnouncementIcon sx={{mr: 1}} />
     <Link
      to="https://enlifted.me/contact/"
      className="navLink"
      style={{color: 'black', width: 80, maxWidth: '100%'}}>
      Contact Us
     </Link>
    </MenuItem>
    <MenuItem onClick={handleSignOut}>
     <HelpOutlineIcon sx={{mr: 1}} />
     <Link
      
      className="navLink"
      style={{color: 'black', width: 80, maxWidth: '100%'}}>
      Log Out
     </Link>
    </MenuItem>
   </Menu>
  </div>
 );
}


