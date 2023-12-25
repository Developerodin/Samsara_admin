import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
  stepperClasses,
  IconButton,
  Card,CardContent
} from "@mui/material";
// import Logo from "../assest/samsara-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs from "dayjs";
import { ThemColor } from "../../Them/ThemColor";
import axios from "axios";
import { Base_url } from "../../Config/BaseUrl";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
export const CompanyCreate = () => {
  const navigation = useNavigate();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const [personName, setPersonName] = React.useState([]);
  const [formData, setFormData] = useState({
    ownerName: '',
    mobile: '',
    companyStartDate: '',
    companyName: '',
    companyId: '',
    domain: '',
    numberOfEmployees: '',
    gstNumber: '',
    address:"",
    city: '',
    pincode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   
    console.log("Data ",formData )
    
    try {
      // Create a new company
      const response = await axios.post(`${Base_url}api/company/companies`, formData);
      if(response){
        clearForm();
        handelGoBack();
      }
      
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  const clearForm = () => {
    setFormData({
      ownerName: '',
      mobile: '',
      companyStartDate: '',
      companyName: '',
      companyId: '',
      domain: '',
      numberOfEmployees: '',
      gstNumber: '',
      city: '',
      pincode: '',
      country: '',
    });
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      companyStartDate: date,
    }));
  };

  const names = [
    "Stress",
    "Insomnia",
    "Depression",
    "Overweight",
    "Backproblem",
    "Shoulder and Neck problem",
    "Sciatica",
    "Diabetes",
  ];


  const handelGoBack=()=>{
    window.history.back()
  }

  return (
    <div>
        <Card>
            <CardContent>
            <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h5' style={{letterSpacing:1,fontSize:14,fontWeight:"bold",color:"grey"}}>Add new company</Typography>
            </Box>
            <div style={{ marginTop: 30 }}>
              <Grid container spacing={3}>
              <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Owner Name"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Grid>
             
                 
                

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="mobile"
                      value={formData.mobile}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        label="DOB"
                        value={formData.companyStartDate}
                        onChange={handleDateChange}
                        format="DD-MM-YYYY"
                        style={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Company Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e)=>handleChange(e)}
                  />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Company Id"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="companyId"
                      value={formData.companyId}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Domain"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="domain"
                    value={formData.domain}
                    onChange={(e)=>handleChange(e)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                  type="number"
                    id="outlined-basic"
                    label="Number Of Employees"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>
               
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="GST Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="gstNumber"
                      value={formData.gstNumber}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>
                
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="address"
                      value={formData.address}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="city"
                      value={formData.city}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="pincode"
                      value={formData.pincode}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="country"
                      value={formData.country}
                      onChange={(e)=>handleChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            </CardContent>
        </Card>
      
    </div>
  );
};



