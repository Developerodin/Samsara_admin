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
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { createTheme } from "@mui/material/styles";

import axios from "axios";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';

import dayjs from 'dayjs';
import { Base_url } from "../../../Config/BaseUrl";
import { ThemColor } from "../../../Them/ThemColor";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const orangeTheme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Set the main color to your desired shade of orange
    },
  },
});
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop:3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const PersonalUserUpdate = () => {
  const navigation = useNavigate();



 
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    email: "",
    companyName: "",
    corporateId: "",
    mobile: "",
    dob: null,
    city: "",
    pincode: "",
    country: "",
    height: "",
    weight: "",
    healthIssues: [],
    description: "",
    Address: "",
    howyouknowus: "",
    PriorExperience: "",
  });

const [selectedType,setSelectedType] = useState("Personal")
  const [userimageFile1,setUserImageFile1] = useState(null)
  const [userimageFile2,setUserImageFile2] = useState(null)
 

  const [value, setValue] = React.useState(0);

  const {id} = useParams()
  const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const handleChangetabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (event) => {
    const checkedName = event.target.value;
    console.log("checkedName", formData.healthIssues);
     console.log(checkedName);
    setFormData((prevFormData) => {
      const updatedHealthIssues = prevFormData.healthIssues.includes(checkedName)
        ? prevFormData.healthIssues.filter((name) => name !== checkedName)
        : [...prevFormData.healthIssues, checkedName];

      return {
        ...prevFormData,
        healthIssues: updatedHealthIssues,
      };
    });
  };

 

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

 



  const handelContinue = () => {
    if (selectedType === "Corporate" && (formData.companyName === "" || formData.corporateId === "")) {
      alert("Company Name and Corporate ID are required for Corporate type.");
      return;
    }
   
   for (const key in formData) {
      // Skip checking companyName and corporateId if selectedType is Corporate
      console.log("Selected type : ",selectedType)

      if (formData[key] === "") {
        if (selectedType !== "Corporate" && (key === "companyName" || key === "corporateId")) {
          console.log("Corporate ==>",key)
          continue;
        }
        else{
          alert(`${key} is required.`);
        }
        
        return; // Stop the submission process if any field is empty
      }
    }

    const formData1 = new FormData();
    console.log("Data of images", userimageFile1);
    const userData ={
      "name": formData.name,
      "gender": formData.sex,
      "company_name":formData.companyName,
      "corporate_id":formData.corporateId,
      "email":formData.email,
      "password": "",
      "mobile":formData.mobile,
      "dob": formData.dob,
      "images": [userimageFile1],
      "Address":formData.Address,
      "city":formData.city,
      "pincode":formData.pincode,
      "country":formData.country,
      "height":formData.height,
      "weight":formData.weight,
      "health_issues":formData.healthIssues,
      "howyouknowus":formData.howyouknowus,
      "PriorExperience": formData.PriorExperience,
      "description":formData.description,
      "dataImages":userimageFile1
    };
    
    formData1.append("name", userData.name);
    formData1.append("gender", userData.gender);
    formData1.append("company_name", userData.company_name);
    formData1.append("corporate_id", userData.corporate_id);
    formData1.append("email", userData.email);
    formData1.append("password", userData.password);
    formData1.append("mobile", userData.mobile);
    formData1.append("dob", userData.dob);
    userData.images.forEach((image, index) => {
      formData1.append('images', image);
    });
    userData.health_issues.forEach((el, index) => {
      formData1.append('health_issues', el);
    });
    formData1.append("Address", userData.Address);
    formData1.append("city", userData.city);
    formData1.append("pincode", userData.pincode);
    formData1.append("country", userData.country);
    formData1.append("height", userData.height);
    formData1.append("weight", userData.weight);
    
    formData1.append("howyouknowus", userData.howyouknowus);
    formData1.append("PriorExperience", userData.PriorExperience);
    formData1.append("description", userData.description);
    
    axios.patch(`${Base_url}api/users/update/${id}`, formData1,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('User Updated successfully:', response.data);
        handelGoBack()
       
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        
        alert("Refresh and try again");
      });
  };


  const names = [
    'Neck and Shoulder',
    'Lower Back',
    'Frozen Shoulder',
    'Diabetic',
    'Knee Problem',
    'PCOS & PCOD',
    'Thyroid',
    'Gastric & Constipations',
    'Insomnia',
    'Varicos Vein',
    'High BP',
    'Low BP',
    'Anxiety',
    'Depression',
    'Breathless',
    'Dizziness',
    'Sciatica',
    'Morning Sickness',
    'Oedema (Swelling Joints)',
    'Headache'
  ];


  const handleFileChange = (e) => {
    setUserImageFile1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setUserImageFile2(e.target.files[0]);
  };


  const handelNext = (value)=>{
    setValue(value)
  }
  const handelPrevious = (value)=>{

    setValue(value)
  }

  const handelGoBack=()=>{
    window.history.back()
  }

  const fetchUsersById = async (id) => {
    try {
      const response = await axios.get(`${Base_url}api/users/${id}`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.user
      console.log("User Data edit ==>",Data)
      if(Data){
        const formattedDate = dayjs(Data.dob);
        console.log("Formated Data ===>", formattedDate)
        setFormData( {
            name:Data.name,
            sex: Data.gender,
            email: Data.email,
            companyName: Data.company_name,
            corporateId: Data.corporate_id,
            mobile: Data.mobile,
            dob: formattedDate,
            city: Data.city,
            pincode: Data.pincode,
            country: Data.country,
            height: Data.height,
            weight: Data.weight,
            healthIssues: Data.health_issues,
            description: Data.description,
            Address:Data.Address,
            howyouknowus: Data.howyouknowus,
            PriorExperience: Data.PriorExperience,
          })
         

    // Update the state with the formatted date
   
    
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

//   const makePostRequest = async () => {
//     const url = 'https://odds.starcric.live/ws/getMarketDataNew';
    
//     const headers = {
//       'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5yZWRkeWJvb2suY2x1Yi9hcGkvYXV0aCIsImlhdCI6MTcwNDA4ODY2MiwiZXhwIjoxNzA0MTA2NjYyLCJuYmYiOjE3MDQwODg2NjIsImp0aSI6IktWaDJvQ1FraVRzSVZ4WGEiLCJzdWIiOiIxODg1OTkxIiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.nWB8Yu1cLzEiwHOgNAZI-FcI6pSJ43J5cBW9amVJjS8',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };
  
//     const formData = new FormData();
//     formData.append('market_ids[]', '1.222807147');
//     formData.append('market_ids[]', '1.222807151');
//     formData.append('market_ids[]', '1.222807195');
//     formData.append('market_ids[]', '1.222807192');
  
//     try {
//       const response = await axios.post(url, formData, { headers });
//       console.log('Response:', response.data);
//       // Handle the response as needed
//     } catch (error) {
//       console.error('Error making the request:', error.message);
//       // Handle the error
//     }
//   };
  

  useEffect(()=>{
    fetchUsersById(id);
    // makePostRequest()
  },[])

  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      
      <div
        style={{
          flex: 1,
          padding: "20px",
          // backgroundColor: "#FFFBF5",
          margin: `${!isMobile ? "30px" : "0px"}`,
          borderRadius: `${!isMobile ? "50px" : "0px"}`,
          // boxShadow:
          //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <div style={{ height: "100%" }}>
       
        <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h5' style={{letterSpacing:1,fontSize:14,fontWeight:"bold",color:"grey"}}>Edit corporate user</Typography>
            </Box>


        
            <div style={{ marginTop: 30,
              height: "620px",
                overflowY: "auto",
                paddingTop: 5,
            
            }}>
                      <Box sx={{ width: '100%' }}>
      <Box sx={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
      <ThemeProvider theme={orangeTheme}>
        <Tabs value={value} onChange={handleChangetabs} aria-label="basic tabs example" textColor="primary"
        indicatorColor="primary"
       
        >
          <Tab label="Details" {...a11yProps(0)}  style={{backgroundColor:`${value === 0 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
          <Tab label="Address" {...a11yProps(1)} style={{backgroundColor:`${value === 1 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}} />
          <Tab label="Questions" {...a11yProps(2)}  style={{backgroundColor:`${value === 2 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
        </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Grid container spacing={3}>
              <Grid item xs={12}>
      
                  </Grid>
          
             
               
             
             
             
              
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AttachMoneyIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                

                <Grid item xs={4}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        label="DOB"
                        value={formData.dob}
                        onChange={(newDate) => handleDateChange(newDate)}
                        format="DD-MM-YYYY"
                        style={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Height"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Weight"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
      <div>
        <Typography style={{fontSize:"16px",color:"#fff"}}>Health Issues</Typography>
        <FormControl sx={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {names.map((name) => (
              <MenuItem key={name}  value={name}>
                <Checkbox
                  checked={formData.healthIssues.includes(name)}
                  onChange={handleChange2}
                  value={name}
                 
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </div>
        </FormControl>
      </div>
    </Grid>
              
                <Grid item xs={12}>
                <div style={{marginBottom:"20px"}}>
                      <Typography
                        style={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "14px",
                        }}
                      >
                        Portrait Image upload
                      </Typography>
                    </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "20px" }}>
                      {
                        userimageFile1 && <div style={{display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(userimageFile1)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                         
                        >
                        
                        </div>
                        </div>
                      }
                      
                      
                      <TextField  type='file'   variant="outlined" onChange={handleFileChange}  />
        
                    </div>

                  </div>
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
                      onClick={()=>handelNext(1)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>
              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={3}>
              
                

               
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Resident permanent address:"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(0)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelNext(2)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>


              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={3}>
            
          

                <Grid item xs={12}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Prior yoga experience "
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="PriorExperience"
                      value={formData.PriorExperience}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="How did u get to know about us ?"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="howyouknowus"
                      value={formData.howyouknowus}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
               

                <Grid item xs={12}>
                  <div>
                    <TextareaAutosize
                      style={{
                        width: `${!isMobile ? "100%" : "93%"}`,
                        // backgroundColor: "#FFFBF5",
                        padding: 10,
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      maxRows={5}
                      placeholder="Describe here"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>

                

                

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(1)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handelContinue}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
      </CustomTabPanel>
    </Box>
              
            </div>
       

       
        </div>
      </div>

    </div>

  );
};
