import React from 'react'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import TextField from '@mui/material/TextField';

export default function AddStep() {

  // State  of  the text and the associated inputs are stored in a reducer.
  // on click of add new step, state of previous step is pushed to reducer.
  // Then the state of inputs is cleared from the dom,  allowing for a new step.
  // Clicking on a previous step calls for the state at the end of the array.
  
  // Context, short, and long will need their options

  // State will represent the type of input we are storing.
  const [inputSave, setInput] = useState('');
  // State will represent the text that we are inputing.
  const [flowText, setFlowText] = useState('');
  // Below is a test for the input appending
  const [inputFileds, setInputFields] = useState([
    { content: '' }
  ])
  const addInput = ( index,  event ) => {
    let data = [...inputFileds, {content: ''}]
    setInputFields(data)

  }
  
  const reducerTest = useSelector((store) => store.flowStepReducer)
  const dispatch = useDispatch();
  // State will also have to represent the previous flow steps to be called on when moving backwards
  // This will work better in a reducer,  but state for  demo:
  const [demo, setDemo] = useState([
    {id: 1, title: 'Flow One'},
    {id: 2, title: 'Flow Two'},
    {id: 3, title: 'Flow Three'},
    {id: 4, title: 'Flow Four'}
  ]);
  
  useEffect(() => {
    dispatch({ 
      type: 'ADD_FLOW_REDUCER',
      payload: 'hello'
      });
  }, []);
  // This is the function that adds the current flow to the demo state
  const  addFlowStep = () => {
    setDemo([...demo,  {id: 6, title: 'Flow Six'}])
  }

  // This is to return to previous flow steps:
  const returnToFlow = () => {
    // This will  have to be built out once We have a surface to put the object.
  }

  // Everything Bellow this is boiler plate for the MUI Component. 
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <>
  <Box>
        <List>
          {demo.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={returnToFlow} >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      <Divider />
      <List>
        {['Add Flow Step'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={addFlowStep}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Box>
    </>
  )
}






    // <form>
    //   {inputFileds.map((input,  index) => {
    //     return ( 
    //       <div key={index}>
    //         <TextField
    //           id="outlined-multiline-static"
    //           label="Multiline"
    //           multiline
    //           rows={4}
    //           defaultValue="Default Value"
    //         />            
    //       </div>
    //     )
    //   })}
    // </form>
    // <button onClick={addInput}>Click Me</button>

    // this goes into the flow constructor when ready




//     const addStepToFlow = async (flowId) => {
//       try {
//         const newStepData = {
//           instructions: 'New instruction',
//           content: 'New content',
//           input_type: 1, // Replace with the desired input_type ID
//         };
    
//         const response = await axios.post(`http://localhost:3000/add-step/${flowId}`, newStepData);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error adding step to flow:', error);
//       }
//     };
// <button onClick={() => addStepToFlow(2)}>Add Step to Flow</button>