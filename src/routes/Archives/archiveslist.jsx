import React, { version } from 'react'
import ArchivesItem from './archivesitem'
import { liveFlows } from '../../Data'
import { Box, List, Typography } from '@mui/material'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function ArchivesList() {

  const [data, setData] = useState();

    useEffect(() => {
    
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/latest-versions');
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


      

  const arrToShow = liveFlows.slice(Math.min(liveFlows.length - 10, 0))

  return (
    <Box alignItems='stack'>
      <List sx={{ width: '100%' }}>
        {arrToShow.slice(0).reverse().map(flow => (
          <ArchivesItem
          key={flow.id}
        id = {flow.id}
        name = {flow.name}
        version = {flow.version}
        published = {flow.published}
        dateMade = {flow.dateMade}
                 />
                    
                        ))}
      </List>
    </Box>
  )
}
