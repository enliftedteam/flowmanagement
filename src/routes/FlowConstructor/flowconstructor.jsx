import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddStep from './Stepbar/addstep'
import StepBar from './Stepbar/stepBar'
import ToolBar from './Toolbar/toolBar'
import View from './WYSIWYG/view'
import Nav from '../../nav/nav'

export default function FlowConstructor() {


  return (
    <>
    <Nav className="shong" style={{ display: 'block' }} />

    <Box display='flex' justifyContent='space-between' >
    <ToolBar/>
    <View/>
    <StepBar/>
    </Box>
    </>
  )
}
