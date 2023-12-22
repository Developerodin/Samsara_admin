import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemColor } from '../../Them/ThemColor';
import Grid from "@mui/material/Grid";
export const AddNewClass = () => {
  const [newClass, setNewClass] = useState({
    title: '',
    description: '',
    teacher: '', // You might want to select a teacher from a dropdown
    schedule: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prevClass) => ({
      ...prevClass,
      [name]: value,
    }));
  };

  const createNewClass = async () => {
    try {
      const response = await axios.post('/api/classes', newClass);
      // setClasses((prevClasses) => [...prevClasses, response.data.data]);
      setNewClass({
        title: '',
        description: '',
        teacher: '',
        schedule: new Date(),
      });
    } catch (error) {
      console.error('Error creating class:', error.message);
    }
  };

  const handelGoBack=()=>{
    window.history.back()
  }


  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      
      <div
        style={{
          flex: 1,
          padding: "20px",
          // backgroundColor: "#FFFBF5",
          margin: "0px",
          borderRadius:"10px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
         <div>
         <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h5' style={{letterSpacing:1,fontSize:14,fontWeight:"bold",color:"grey"}}>Add corporate user</Typography>
            </Box>

<Box sx={{marginTop:"30px"}}>
<Grid container spacing={3}>
              <Grid item xs={6}>
              <TextField
                      id="outlined-basic"
                      label="Class Title"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="title" 
                      value={newClass.title} 
                      onChange={handleInputChange}
                    />
                  </Grid>


                  <Grid item xs={6}>
              <TextField
                      id="outlined-basic"
                      label="Class Description"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="description"
          value={newClass.description}
          onChange={handleInputChange}
                    />
                  </Grid>


                  <Grid item xs={6}>
              <TextField
                      id="outlined-basic"
                      label="Teacher"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="teacher"
          value={newClass.teacher}
          onChange={handleInputChange}
                    />
                  </Grid>


                  <Grid item xs={6}>
              <TextField
                      id="outlined-basic"
                      label="Class Title"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="schedule"
          value={newClass.schedule.toISOString().slice(0, -8)}
          onChange={handleInputChange}
                    />
                  </Grid>

               
                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={createNewClass}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>
              </Grid>
</Box>
            

      
    </div>
      </div>

    </div>
  
  )
}
