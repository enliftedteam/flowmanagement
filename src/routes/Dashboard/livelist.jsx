import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import { Box } from '@mui/material';


import {useState, useEffect} from 'react';
import axios from 'axios';


export default function LiveList() {

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

    return (
        <Box alignItems='stack'>
            <Typography sx={{ color: '#7F95FA' }} variant='h5'>Flows</Typography>
            <List sx={{ width: '100%' }}>
                {data && data.map(flow => (
                <ListItem 
                key={flow.id}
                sx={{margin: '20px 0'}}
                 >
                    <ListItemIcon>
                    
                    {flow.is_published ? 
                        <BlurCircularIcon
                            sx={{ color: '#7F95FA' }}
                            fontSize='small'
                        />
                        :
                        <BlurCircularIcon
                            color='disabled'
                            fontSize='small'
                        />
                    }

                    </ListItemIcon>
                    
                    <Typography
                        paddingRight={5}
                        variant='h7'
                    >
                        {flow.title} V{flow.versions_number}
                    </Typography>
                    {/* <Typography
                    sx={{ opacity: .5 }}
                    >
                        {flow.dateMade}
                    </Typography> */}
                </ListItem>
                    
                        ))}
            </List>
        </Box>
    )
}
