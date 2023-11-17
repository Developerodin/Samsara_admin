
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
import EditIcon from '@mui/icons-material/Edit';
import { AddCircle } from '@mui/icons-material';
const column = [
  { name: "ID" },
  { name: "Category Name" },
  {name: "Total Users"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const Categories = () => {
  const navigate = useNavigate();

  const handelViewClick=()=>{
    navigate("/categories_view");
  }

  const handelAddCategorie=()=>{
    navigate("/add_categorie/")
  }
 
  const rows = [
    { Id: "1", Category: "The Odin", TProducts: "14", CreatedAt: "04/Oct/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "2", Category: "Google", TProducts: "7", CreatedAt: "18/Jul/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "3", Category: "Tata Power", TProducts: "10", CreatedAt: "22/Mar/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "4", Category: "Eye ltd", TProducts: "3", CreatedAt: "09/Sep/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "5", Category: "Zen tech", TProducts: "8", CreatedAt: "11/Nov/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "6", Category: "Electro labs", TProducts: "15", CreatedAt: "03/Aug/2023", Action: <EditIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
   
  ];
  

 
  return (
   <Box >

       <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
            <Typography variant='h5' style={{fontWeight:600,letterSpacing:3}}>COMPANY</Typography>
            </Box>

            <Box style={{width:"50%",hieght:"50px"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Category)}
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
              <Button variant='contained' startIcon={<AddCircle />} onClick={handelAddCategorie} style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}>Create new</Button>
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

