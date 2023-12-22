import { Autocomplete, Box, Button, Card, CardContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import { AddCircle } from '@mui/icons-material';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import { useNavigate } from 'react-router-dom';
const column=[
    {name:"Title"},
    {name:"Teacher"},
    {name:"Schedule Date"},
    {name:"Teacher Phone Number"},
    {name:"Total Students Joined"},
    {name:"Recordings"},
    {name:"View"},
    {name:"Update"},
    {name:"Delete"},
    
  ]
export const ManageClasses = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);

    const handelClassView = (id)=>{
      navigate(`corporate_user_view/${id}`)
    }

    const handelClassAdd = ()=>{
      navigate(`add_class/`)
    }
  return (
    <div>
        <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
           

            <Box style={{width:"30%"}}>
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

            <Box >
            <Button
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}
          startIcon={<AddCircle />}
          onClick={handelClassAdd}
        >
          Create new class
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
    </div>
  )
}
