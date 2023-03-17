import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import { Box, Tooltip, Typography } from '@mui/material';
import useReduxStore from '../../../Hooks/useReduxStore';
import { useSelector } from 'react-redux';


export default function View() {
  const store = useReduxStore();
  const words = useSelector(store => store.wysiwygReducer)
  const option = useSelector(store => store.optionsSelectReducer)

  return (

    <Box display='stack' textAlign='center'>
      <Box

        width='321px'
        m='50px 50px 50px 50px'
        height='695px'
        backgroundColor='#2B2C2E'
        border='1px solid #959292'
        borderRadius='10px'
        sx={{ boxShadow: 5 }}
      >

        {/* POSITION 1 */}
        <Box marginTop='50px'>

          { option == 1 &&
          <Typography textAlign={'left'} m='50px 30px' color='white' >{words.replace(/<[^>]*>?/gm, '')}</Typography>
          }
          
          
          { option == 2 &&
          <textarea
            style={{
              m:'50px 50px',
              width: '270px',
              height: '120px',
              padding: '12px 20px',
              boxSizing: 'border-box',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: 'grey',
              resize: 'none'
            }}
            placeholder='text goes here'
          />
          }


        </Box>


        {/* POSITION 2 */}
        <Box>
          {/* { option == 1 &&
          <Typography textAlign={'left'} m='50px 30px' color='white' >{words.replace(/<[^>]*>?/gm, '')}</Typography>
          } */}

          {/* { option == 2 &&
          <textarea
            style={{
              width: '270px',
              height: '120px',
              padding: '12px 20px',
              boxSizing: 'border-box',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: 'grey',
              resize: 'none'
            }}
            placeholder='text goes here'
          />
          } */}
        </Box>


        {/* POSITION 3 */}
        <Box>
          {/* { option == 1 &&
          <Typography textAlign={'left'} m='50px 30px' color='white' >{words.replace(/<[^>]*>?/gm, '')}</Typography>
          } */}

          {/* { option == 2 &&
          <textarea
            style={{
              width: '270px',
              height: '120px',
              padding: '12px 20px',
              boxSizing: 'border-box',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: 'grey',
              resize: 'none'
            }}
            placeholder='text goes here'
          />
          } */}
        </Box>


      </Box>
    </Box>

  )
}
