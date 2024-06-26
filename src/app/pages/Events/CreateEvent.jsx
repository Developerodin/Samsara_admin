import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, TextField, Typography,Select,MenuItem,FormControl,
  InputLabel } from '@mui/material';
import { ThemColor } from '../../Them/ThemColor';
import Grid from "@mui/material/Grid";
import { Base_url } from '../../Config/BaseUrl';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { FormLabel } from 'react-bootstrap';
export const CreateEvent = () => {
  const [newEvent, setnewEvent] = useState({
    eventName: '',
    image:"",
    eventType:"",
    details:"",
    startDate:new Date(),
    startTime:null,
  });


  const [TeachersData,setTeachersData] = useState([])

  const handleDateChange = (date) => {
    setnewEvent((prevClass) => ({ ...prevClass, startDate: date }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewEvent((prevClass) => ({
      ...prevClass,
      [name]: value,
    }));
  };

  const createNewEvent = async () => {
    console.log("Data ==>",newEvent)
    try {
      const response = await axios.post(`${Base_url}api/events`, newEvent);
     
      setnewEvent({
        eventName: '',
        image:"",
        eventType:"",
        details:"",
        startDate:new Date(),
        startTime:null,
      });
      handelGoBack()
    } catch (error) {
      console.error('Error creating class:', error.message);
    }
  };

  const handelGoBack=()=>{
    window.history.back()
  }

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/teacher`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.teachers
      console.log("Trainer Data ==>",Data)
      if(Data){
        setTeachersData(Data)
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  useEffect(()=>{
    fetchTeachers();
  },[])


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
            <Typography variant='h5' style={{letterSpacing:1,fontSize:14,fontWeight:"bold",color:"grey"}}>Add new event</Typography>
            </Box>

<Box sx={{marginTop:"30px"}}>
<Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
                      id="outlined-basic"
                      label="Event Title"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="eventName" 
                      value={newEvent.eventName} 
                      onChange={handleInputChange}
                    />
                  </Grid>

                  
                  <Grid item xs={12}>
              <TextField
                      id="outlined-basic"
                      label="Details"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="details"
          value={newEvent.details}
          onChange={handleInputChange}
          rows={5}
                    />
                  </Grid>


                  <Grid item xs={4}>
                  <FormControl fullWidth>
                    <FormLabel>Start Date</FormLabel>
                    <TextField fullWidth type='date' name="startDate" value={newEvent.startDate} 
                      onChange={handleInputChange}  />
                  </FormControl>

   
                  </Grid>

               

                  <Grid item xs={4}>
                 
                  <FormControl fullWidth>
                    <FormLabel>Start Time</FormLabel>
                    <TextField fullWidth type='time' name="startTime" value={newEvent.startTime} 
                      onChange={handleInputChange}  />
                  </FormControl>
    
                  </Grid>

                  <Grid item xs={4}>
                  <FormControl sx={{ width: "100%" }}>
                  <FormLabel>Select Event Type</FormLabel>
                      {/* <InputLabel id="demo-multiple-checkbox-label">
                        Select Event Type
                      </InputLabel> */}
                      <Select
              label="eventType"
              variant="outlined"
              style={{ width: '100%' }}
              name="eventType"
              value={newEvent.eventType}
              onChange={handleInputChange}
            >
            
                <MenuItem  value={"inPerson"}>
                In Person
                </MenuItem>
                <MenuItem  value={"virtualEvent"}>
                Virtual Event
                </MenuItem>
            
            </Select>
                    </FormControl>
           
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
                      onClick={createNewEvent}
                    >
                      Create
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
