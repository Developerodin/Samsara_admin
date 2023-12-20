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
 
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handelContinue = () => {
    // navigation("/login");
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
                      name="phoneNumber"
                    />
                  </Grid>
             
                 
                

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* <DemoContainer components={['DateField']}>
                      <DemoItem label="Date"> */}
                      <DateField placeholder="Company Start Date" style={{ width: "100%" }} />
                      {/* </DemoItem>
      </DemoContainer> */}
                    </LocalizationProvider>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Company Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="phoneNumber"
                  />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Company Id"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="phoneNumber"
                    />
                  </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Domain"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="phoneNumber"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Number Of Employees"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
               
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="GST Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label=" Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

               

                {/* <Grid item xs={4}>
                  <div>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Health Issues
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        sx={{ overflowX: "hidden", width: "100%" }}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid> */}

                {/* <Grid item xs={12} >
                  <div>
                    <TextareaAutosize
                      style={{
                        width:`${!isMobile ? "100%" : "93%"}`,
                         borderColor:"#c4c4c4",
                        padding: 10,
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      maxRows={5}
                      placeholder="Describe Health Issues here"
                    />
                  </div>
                </Grid> */}

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
                      onClick={handelContinue}
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



