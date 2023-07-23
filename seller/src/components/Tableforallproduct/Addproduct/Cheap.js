import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const handledelete = ()=>{
}

export default function ChipsArray(chipData) {
 

 console.log(chipData);

  return (
    <Paper
      className='conchips'
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        listStyle: 'none',
        borderRadius:"10px",
        
      }}
      component="div"
      style={{ width:'100%', overflow:"auto", border: `1px solid #D0D5DD`,gap:'10px', background: `#FCFCFD`,padding: "1px 5px"}}
    >
      {chipData.chipData.map((data) => {

        return (
               
               <ListItem key={data.key} style={{marginLeft:"1px" }} >
            <Chip
                size='small'
                className='chip'
                label={data.label}
                
                deleteIcon={<CloseOutlinedIcon style={{color:'#C2D0E3'}} />}
                onDelete={handledelete}
                style={{fontWeight: '500',
                  fontSize: '10px',
                  minWidth : "fit-content",
                  lineHeight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  
                  color: '#FCFCFD',background: '#164C96'}}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}