import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ArchivesItem({id, name, version, published, dateMade}) {
  return (
     <Box 
     justifyContent={'space-between'} 
     display='flex' 
     key={id}
    width = '600px'
    height = '100px'
    backgroundColor = 'white'
    textAlign='center'
    alignContent = 'center'
    margin={'10px 10px 10px 50px'}
    borderRadius={'10px'}
     >
      <Box>
      <Typography margin={'40px 0px 0px 20px'}>{name}</Typography>
      </Box>

      <Box>
      <Typography margin={'40px 0px 0px 20px'}>{version}</Typography>
      </Box>



      <Box>
      <Typography margin={'40px 20px 0px 20px'}>{dateMade}</Typography>
      </Box>
     </Box>
  )
}
