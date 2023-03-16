import { Box } from '@mui/system';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';

export default function TextEnter() {
    const [body, setBody] = useState("")
    const dispatch = useDispatch()
    
    const handleBody = e => {
        dispatch({
            type: 'FLOW_TEXT_SET',
            payload: e
        });
        console.log(e);
        setBody(e);
    }



    return (
        <Box m='50px 0 0 0'>
            <ReactQuill
                style={{ height: '300px', width: '300px' }}
                placeholder='Enter Flow Prompt'
                onChange={handleBody}
                value={body}
            />
        </Box>
    )
}