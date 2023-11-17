
import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Box,
  CardContent,
  Card,
  Typography,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { ThemColor } from '../../Them/ThemColor';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const ProductAdd = () => {
  const [productInfo, setProductInfo] = useState({
    title: '',
    image: '',
    price: '',
    description: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here (e.g., send data to the server)
    console.log(productInfo);
  };

  const handelGoBack=()=>{
    window.history.back()
  }

  return (
    <div>
        <Card>
            <CardContent>
                <Box style={{marginBottom:"30px",display:"flex",alignItems:"center"}}>
                <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
                    <Typography variant='h5' style={{letterSpacing:4}}>
                    Add User
                    </Typography>
                </Box>
            
   
   <Stack spacing={4}>
    <Box style={{width:"300px",height:"150px"}}>
    <img style={{height:"100%",width:"100%",borderRadius:"20px"}} src="https://www.century21albania.com/vendor/core/images/default-image.jpg" alt="img" />

    </Box>
   <TextField
    
     name="image"
     value={productInfo.image}
     type='file'
     onChange={handleInputChange}
     fullWidth
     required
   />
   
   <TextField
     label="Name"
     name="title"
     value={productInfo.title}
     onChange={handleInputChange}
     fullWidth
     required
   />

   <TextField
     label="Email"
     name="price"
     value={productInfo.price}
     onChange={handleInputChange}
     fullWidth
     required
   />
   <TextField
     label="DOB"
     name="description"
     value={productInfo.description}
     onChange={handleInputChange}
     fullWidth
     multiline
     required
   />
   <FormControl fullWidth>
     <InputLabel>Select Category</InputLabel>
     <Select
       label="Select Category"
       name="category"
       value={productInfo.category}
       onChange={handleInputChange}
       required
     >
       <MenuItem value="Category 1">Category 1</MenuItem>
       <MenuItem value="Category 2">Category 2</MenuItem>
       <MenuItem value="Category 3">Category 3</MenuItem>
     </Select>
   </FormControl>
   
   </Stack>
 <Box style={{marginTop:"40px",display:"flex",justifyContent:"flex-end"}}>
 <Button
     variant="contained"
     style={{backgroundColor:`${ThemColor.buttons}`}}
     onClick={handleSubmit}
     size='large'
   >
     Add
   </Button>
 </Box>
            </CardContent>
        </Card>
      
    </div>
  );
};



