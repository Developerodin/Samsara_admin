import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel, InputAdornment ,Checkbox } from '@mui/material';
import { ThemColor } from '../../Them/ThemColor';
import Grid from "@mui/material/Grid";
import { Base_url } from '../../Config/BaseUrl';
import { FormLabel } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; 

export const CreateEvent = () => {
  const [newEvent, setnewEvent] = useState({
    eventName: '',
    
    eventType: "",
    details: "",
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    address: '',
    state: '',
    city: '',
    coHosts: [],
  });

  const [TeachersData, setTeachersData] = useState([]);
  const [showEndDateTime, setShowEndDateTime] = useState(false); 
  const [showCoHosts, setShowCoHosts] = useState(false);
  const [eventImage, setEventImage] = useState(null);

  const [tempSelectedCoHosts, setTempSelectedCoHosts] = useState(newEvent.coHosts);

  const handleTempChange = (event) => {
    const { value } = event.target;
    setTempSelectedCoHosts(value);
    setnewEvent((prevClass) => ({
      ...prevClass,
      coHosts: value,
    }));
  };

  const handleDoneClick = () => {
    handleCoHostsChange({ target: { value: tempSelectedCoHosts } });
  };

  const handleDateChange = (date) => {
    setnewEvent((prevClass) => ({ ...prevClass, startDate: date }));
  };

  const handleCoHostsChange = (e) => {
    setnewEvent((prevClass) => ({
      ...prevClass,
      coHosts: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewEvent((prevClass) => ({
      ...prevClass,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const randomName = `${uuidv4()}_${file.name}`;
      const renamedFile = new File([file], randomName, { type: file.type });
      setEventImage(renamedFile);
    }
  };
  
  const createNewEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('eventName', newEvent.eventName);
      formData.append('eventType', newEvent.eventType);
      formData.append('details', newEvent.details);
      formData.append('startDate', newEvent.startDate);
      formData.append('startTime', newEvent.startTime);
      formData.append('endDate', newEvent.endDate);
      formData.append('endTime', newEvent.endTime);
      formData.append('address', newEvent.address);
      formData.append('state', newEvent.state);
      formData.append('city', newEvent.city);
      formData.append('coHosts', JSON.stringify(newEvent.coHosts));
  
      
      if (eventImage) {
        formData.append('image', eventImage);
      }
  
      
  
      const response = await axios.post(`${Base_url}api/events`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      
      console.log('Event created:', response.data);
  
      // Reset form after successful submission
      setnewEvent({
        eventName: '',
        eventType: '',
        details: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        address: '',
        state: '',
        city: '',
        coHosts: [],
      });
      setEventImage(null);
  
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };
  

  const handelGoBack = () => {
    window.history.back();
  };

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/teacher`);
      const Data = response.data.data.teachers;
      if (Data) {
        setTeachersData(Data);
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);


  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: 1,
          padding: "20px",
          margin: "0px 80px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          backgroundColor:'#fff',
        }}
      >
        <div>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ArrowBackIcon onClick={handelGoBack} style={{ marginRight: "20px", color: `${ThemColor.buttons}` }} />
            <Typography variant='h5' style={{ letterSpacing: 1, fontSize: 14, fontWeight: "bold", color: "grey" }}>Add new event</Typography>
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Event name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="eventName"
                  value={newEvent.eventName}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Upload Event Image</FormLabel>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ width: "100%", padding: "10px 0" }}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <FormLabel>Start Date</FormLabel>
                  <TextField fullWidth type='date' name="startDate" value={newEvent.startDate} onChange={handleInputChange} />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <FormLabel>Start Time</FormLabel>
                  <TextField fullWidth type='time' name="startTime" value={newEvent.startTime} onChange={handleInputChange} />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <FormLabel>Time Zone</FormLabel>
                  <TextField fullWidth InputProps={{ startAdornment: <InputAdornment position="start">GMT +5:30</InputAdornment>, }} />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  style={{ color: 'blue' }}
                  onClick={() => setShowEndDateTime(!showEndDateTime)}
                >
                  + End date and time
                </Button>
              </Grid>

              {showEndDateTime && (
                <>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <FormLabel>End Date</FormLabel>
                      <TextField fullWidth type='date' name="endDate" value={newEvent.endDate} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <FormLabel>End Time</FormLabel>
                      <TextField fullWidth type='time' name="endTime" value={newEvent.endTime} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel>Select Event Type</FormLabel>
                  <Select
                    label="eventType"
                    variant="outlined"
                    style={{ width: '100%' }}
                    name="eventType"
                    value={newEvent.eventType}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"inPerson"}>In Person</MenuItem>
                    <MenuItem value={"virtualEvent"}>Virtual Event</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {newEvent.eventType === "inPerson" && (
                <>
                  <Grid item xs={4}>
                  <FormControl fullWidth>
                      <FormLabel>Address</FormLabel>
                      <TextField fullWidth name="address" value={newEvent.address} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <FormLabel>State</FormLabel>
                      <TextField fullWidth name="state" value={newEvent.state} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <FormLabel>City</FormLabel>
                      <TextField fullWidth name="city" value={newEvent.city} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Details"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="details"
                  value={newEvent.details}
                  onChange={handleInputChange}
                />
              </Grid>

              

              
              <Grid item xs={12}>
      <FormControl fullWidth>
        <FormLabel>Co-Hosts</FormLabel>
        <Select
    multiple
    value={tempSelectedCoHosts}
    onChange={handleTempChange}
    renderValue={(selected) => selected.map(id => TeachersData.find(teacher => teacher._id === id)?.name).join(', ')}
  >
    {TeachersData.map((teacher) => (
      <MenuItem key={teacher._id} value={teacher._id}>
        <Checkbox checked={tempSelectedCoHosts.indexOf(teacher._id) > -1} />
        {teacher.name}
      </MenuItem>
    ))}
  </Select>
        
      </FormControl>
    </Grid>
            

                <Grid item xs={12}>
                <div style={{ marginTop: "30px", display: "flex", justifyContent: "right" }}>
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
  );
};
