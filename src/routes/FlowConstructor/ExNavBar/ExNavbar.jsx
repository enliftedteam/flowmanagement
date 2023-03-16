// somehow this level is too deep so I have to put the nav file
// on the same level to be able to use it
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

export default function Nav({showButtons = false}) {
  const isLoggedIn = true;

  return (
    <>
      <Box sx={{flexGrow: 15, marginLeft: '-200px', marginRight: '-20px'}}>
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
              onMouseOver={e =>
                (e.currentTarget.style.backgroundColor = '#3530e9')
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
              }}>
              Save
            </button>
          ) : (
            null()
          )}
          {isLoggedIn ? (
            <button
              className="nav-publish-button"
              onMouseOver={e =>
                (e.currentTarget.style.backgroundColor = '#3530e9')
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
              }}>
              Publish
            </button>
          ) : null}
          {/* // (<h3></h3>)} */}
        </div>
      </Box>
    </>
  );
}
