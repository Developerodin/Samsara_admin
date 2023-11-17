import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Config/BaseUrl';
import axios from 'axios';

export const CategoriesCreate = () => {
    const navigate = useNavigate();
 
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  const handelGoBack=()=>{
    window.history.back()
  }

 

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    // Make an HTTP POST request to your Node.js backend to upload the image using Axios
    axios
      .post(`${BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Handle the response from the server (e.g., success or error)
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  const handelSave =()=>{
    handleUpload()
  }
  return (
    <Box>
   

    <Box style={{marginTop:"30px"}}>
    <Card>
          <CardContent>
          <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h5' style={{letterSpacing:4}}>ADD NEW COMPANY</Typography>
            </Box>
    
            <Box style={{marginTop:"20px"}}>
            <Stack spacing={4}>
            <Box style={{width:"300px",height:"150px"}}>
            {selectedFile ? ( // Check if an image has been selected
        <img
          style={{ borderRadius: '20px',height:"100%",width:"100%" }}
          src={URL.createObjectURL(selectedFile)} // Display the selected image
          alt="Selected Image"
        />
      ) : (
        <img
          style={{ height: '150px', width: '300px', borderRadius: '20px' }}
          src="https://www.century21albania.com/vendor/core/images/default-image.jpg"
          alt="Default Image"
        />
      )}

    </Box>
            <TextField  type='file'   variant="outlined" onChange={handleFileChange}  />
              <TextField   label="Name" variant="outlined" />
             
              <TextareaAutosize minRows={15}  label="Description" variant="outlined"/>
            </Stack>
            </Box>
            
    
            <Box style={{marginTop:"50px",display:"flex",justifyContent:"flex-end"}}>
              <Button variant="contained" size='large' style={{backgroundColor:`${ThemColor.buttons}`}} onClick={handelSave}>Save</Button>
            </Box>
          
          </CardContent>
        </Card>
    </Box>
       
    
       </Box>
  )
}
