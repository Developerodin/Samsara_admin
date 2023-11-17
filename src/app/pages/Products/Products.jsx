import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { AddCircle } from '@mui/icons-material';
const column = [
  { name: "ID" },
  { name: "Name" },
  {name: "Comapny"},
  {name: "Status"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const Products = () => {

  const navigate = useNavigate();
  const handelViewClick=()=>{
    navigate("/product_view");
  }

  const handelAddNew=()=>{
    navigate("/add_product");
  }

  const rows = [
    { Id: "1", Name: "Samar Sharma", Category: "The ODIN", Price:<Button color='success' variant="contained" >Active</Button>, CreatedAt: "04 / Oct / 2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
  ];
  
  return (
   <Box >

       <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
            <Typography variant='h5' style={{fontWeight:600,letterSpacing:2}}>Users</Typography>
            </Box>

            <Box style={{width:"50%",hieght:"50px"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </Box>

            <Box>
            <Button
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}
          startIcon={<AddCircle />}
          onClick={handelAddNew}
        >
          Add User
        </Button>
             
              <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                <TuneIcon />
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>

       <Box style={{marginTop:"-2px"}}>
       
          <GenralTabel column={column} rows={rows} />
        
       </Box>
   </Box>
  )
}

