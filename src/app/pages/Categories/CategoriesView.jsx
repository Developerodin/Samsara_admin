import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom';

export const CategoriesView = () => {
  const navigate = useNavigate();
 
  const handelGoBack=()=>{
    window.history.back()
  }
  return (
   <Box>
   

<Box style={{marginTop:"30px"}}>
<Card>
      <CardContent>
      <Box style={{display:"flex",alignItems:"center"}}>
          <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
        <Typography variant='h5' style={{letterSpacing:4}}>CATEGORIES</Typography>
        </Box>

        <Box style={{marginTop:"50px"}}>
        <Stack spacing={4}>
          <TextField   label="Name" variant="outlined" />
          <TextField  type='file'   variant="outlined" />
          <TextareaAutosize minRows={15}  label="Description" variant="outlined"/>
        </Stack>
        </Box>
        

        <Box style={{marginTop:"50px",display:"flex",justifyContent:"flex-end"}}>
          <Button variant="contained" size='large' style={{backgroundColor:`${ThemColor.buttons}`}}>Save</Button>
        </Box>
      
      </CardContent>
    </Card>
</Box>
   

   </Box>
  )
}
