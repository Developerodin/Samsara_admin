import React, { useContext, useEffect, useState } from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { UsersListHeader } from "../../Internal-Cpo-Managment/AllCpos/UsersListHeader";
import { GenralTabel } from "../../../TabelComponents/GenralTable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from '@mui/icons-material/Delete';
import { WalletModel } from "./Modal/WalletModal";
import UserModal from "./ClientComponents/UserModal";
import UserModal2 from "./ClientComponents/UserModal2";

import { BASE_URL } from "../../../Config/BaseUrl";
import axios from "axios";
import { useFormik } from "formik";
import CposContext from "../../../../Context/CposContext";
import { Button,SwipeableDrawer,Box,Modal,Typography,TextField,Dialog,Slide, Grid  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TransitionProps } from '@mui/material/transitions';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { CpoListHeader } from "./Components/CpoListHeader";
const column = [
  { name: "CPOs" },
  { name: "State" },
  {name: "Number of Chargers"},
  {name: "Roaming Agreements"},
  {name: "Category"},
  { name: "Available Credits" },
  { name: "Company Wallet" },
  { name: "Update" },
  { name: "Delete" },
];
const MyBox = styled('Button')({
  width:'100%',
  color: '#fff',
  backgroundColor: '#009ef7',
  padding: 8,
  borderRadius: 4,
  border:"none",
  fontWeight: 'bold',
  margin:"10px"
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Item = styled(Paper)(() => ({
  backgroundColor: '#fff',
  textAlign: 'center',
}));

const CPOs = () => {
  const token = sessionStorage.getItem("token");
  const initialValues = {
    name: "",
    email: "",
    password: "",
    Brand_Name: "",
    GST_No: "",
    MID: "",
    Registered_Address: "",
    state: "",
    regional: "",
    National: "",
    Initial_Balance: "",
    Number: "",
    ABB_TestCharger: "",
    Select_Price: "",
    Fixed_Rent: "",
    Company_Share: "",
    image: "",
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [Cpostate, setCpoState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [rows, setRows] = useState([]);
  const [selectedCpo, setselectedCpo] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [Dilogopen, setDilogOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = useState(0);
  const initialValuesChargers = {
  
    selectedNumber: 0, 
    chargerDetails: [], 
  };
  const initialValuesRoaming = {
  
    selectedNumber: 0, 
    RoamingDetails: [], 
  };
  const [selectedNumber, setSelectedNumber] = useState(initialValuesChargers.selectedNumber);
  const [chargerDetails, setChargerDetails] = useState(initialValuesChargers.chargerDetails);
  const [selectedNumberOfRomaing, setSelectedNumberOfRomaing] = useState(initialValuesRoaming.selectedNumber);
  const [RoamingDetails, setRoamingDetailss] = useState(initialValuesRoaming.RoamingDetails);
  const [SelectedCpoChargerDetailsRows, setSelectedCpoChargerDetailsRows] = useState([]);
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const companyNames = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];
  const handleOpen = (Data) => {
    console.log(Data);
    let Chargerlength=Data.chargerDetails.length;
    let Romainglength=Data.roamingDetails.length;
    // console.log("length",length)
    setFormValues(Data);
    setSelectedNumber(Chargerlength);
    setSelectedNumberOfRomaing(Romainglength)
    setChargerDetails(Data.chargerDetails);
    setRoamingDetailss(Data.roamingDetails)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormValues(initialValues);
  };

  const handleDilogOpen = (Data) => {
    // setFormValues(Data);
    setDilogOpen(true);
  };
  const handleDilogClose = () => {
    setDilogOpen(false);
    // setFormValues(initialValues);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:"90%",
    height:"90%",
    overflow: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();

  const fetchUserData = async () => {
    // try {
    //   const response = await axios.get(`${BASE_URL}/cpo/users/${id}`
    //   ,{ headers: { "Authorization": `${token}` } }
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    //   return null;
    // }
  };

  const module = [
    { name: "Charger Management" },
    { name: "User Management" },
    { name: "Company Management" },
    { name: "Billing and Payment" },
    { name: "Complaints Management" },
    { name: "Coupon Management" },
  ];
  const design = {
    minWidth: "85%",
    background: "rgb(244,245,247)",
    border: "none",
    padding: "10px",
    marginTop: "10px",
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(parseInt(event.target.value, 10));
    setChargerDetails([]); // Reset chargerDetails when the number changes
  };

  const handleChargerDetailsChange = (index, field, value) => {
    const updatedChargerDetails = [...chargerDetails];
    updatedChargerDetails[index][field] = value;
    setChargerDetails(updatedChargerDetails);
  };

  const handleAddFields = () => {
    const newChargerDetails = Array.from({ length: selectedNumber }, () => ({
      Select_Price: null,
      Fixed_Rent: null,
      Company_Share: null,
      chargerName: "", // Add a field for charger name
    }));
    setChargerDetails(newChargerDetails);
  };

  const handleRoamingNumberChange = (event) => {
    setSelectedNumberOfRomaing(parseInt(event.target.value, 10));
    setRoamingDetailss([]); // Reset chargerDetails when the number changes
  };

  const handleRoamingDetailsChange = (index, field, value) => {
    const updatedChargerDetails = [...RoamingDetails];
    updatedChargerDetails[index][field] = value;
    setRoamingDetailss(updatedChargerDetails);
  };

  const handleRoamingAddFields = () => {
    const newRoamingDetails = Array.from({ length: selectedNumberOfRomaing }, () => ({
      eMsp_Cost: null,
      Additional_cost: null,
      Aggrement: "",
      Company_Name: companyNames[0], // Default to the first company name
    }));
    setRoamingDetailss(newRoamingDetails);
  };



  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleEditSubmit = async () => {
    console.log(" Edit Submit", formValues);
    const data={
      name:formValues.name,
email:formValues.email,
password:formValues.password,
Brand_Name:formValues.Brand_Name,
GST_No:formValues.GST_No,
MID:formValues.MID,
Registered_Address:formValues.Registered_Address,
state:formValues.state,
regional:formValues.regional,
National:formValues.National,
Initial_Balance:formValues.Initial_Balance,
Number:formValues.Number,
image:formValues.image,
roamingDetails:RoamingDetails,
chargerDetails:chargerDetails
    }
    try {
      // Send a PATCH request with the updated data from the state
      await axios.put(`${BASE_URL}/cpo/users/${formValues._id}`, data, {
        headers: { Authorization: `${token}` },
      });
      setUpdate((prev)=>prev+1);
      handleClose();
      console.log("User data updated successfully!");
      // You can perform any success actions here, like showing a success message
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle the error and display an error message if needed
    }
  };

  const handelDeleteCpo=async(id)=>{
   
    try {
      // Send a PATCH request with the updated data from the state
      await axios.delete(`${BASE_URL}/cpo/users/${id}`, {
        headers: { Authorization: `${token}` },
      });
      setUpdate((prev)=>prev+1);
    
      console.log("User delete updated successfully!");
      // You can perform any success actions here, like showing a success message
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle the error and display an error message if needed
    }
  }

  const handelRoamingClick=(data) => {
    // console.log("🚀 ~ file: Chargers.jsx:22 ~ handelClick ~ e:", e.target)
     navigate("/roaming_agreements/", {state:{data:data}});
    //  <Navigate to="/chargerdetails" state={{todos:[]}} replace={true}/>
  
  }

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerCpo = (anchor, open) => (event) => {
    setCpoState({ ...state, [anchor]: open });
  };

  const handelWalletClose = (id,data)=>{
    setState({ ...state, 'right': false });
    // setUserWalletValues(initialValuesWallet)

  }

  const handelCpoClose = (id,data)=>{
    setCpoState({ ...state, 'top': false });
    

  }

  const CpoChargerDetailscolumnData=[
    {name:"Charger Name"},
    {name:"Select Price"},
    {name:"Fixed Rent"},
    {name:"Company Share"},
  ]

  

  const handelCpoClick=(id,data)=>{
    // fetchUserWalletData(id);
    // handelWalletHistory(id)
    console.log('handelCpoClick',data)
    setselectedCpo(data);
    const formattedData = data.chargerDetails.map((item) => ({
      "chargerName":<Typography>{item.chargerName}</Typography>,
      "Select_Price":<Typography>₹ {item.Select_Price}</Typography> ,
      "Fixed_Rent":<Typography>₹ {item.Fixed_Rent}</Typography>,
      "Company_Share":<Typography>{item.Company_Share}</Typography>
    
    }));
    setSelectedCpoChargerDetailsRows(formattedData)
    setCpoState({ ...state, 'top': true });
    
  }

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
 
    if(inputValue === ""){
      setFilterRows(rows)
    }
    else{
         // Filter the rows based on whether any property contains the search input
    const filteredResults = rows.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  // Update the filteredRows state
  setFilterRows(filteredResults);
    }
   

    // Update the search input state
    setSearchInput(inputValue);
  };

  const listCpoDetails = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 , padding:"10px"}}
      role="presentation"
      
    >
      <Grid container spacing={2}>
        <Grid item xs={6} >
        <Item>
       
        <Box sx={{padding:"5px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6">CPO Details</Typography>
         
            </Box>
          <Box sx={{margin:"20px"}}>
            
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Name</Typography>
          <Typography sx={{color:"#00af06"}}variant="subtitle1" component="h2">{selectedCpo.name}</Typography>
          
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Number</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Number}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Balance</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">₹ {selectedCpo.Initial_Balance}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Email</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.email}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Category</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.National ? "National" : ""} / {selectedCpo.regional ? "Regional" : ""}</Typography>
            </Box>

            
          </Box>
        </Box>

        </Item>
        </Grid>

        <Grid item xs={6} >
        <Item>
       
        <Box sx={{padding:"5px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6">Company Details</Typography>
         
            </Box>

            <Box sx={{margin:"20px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Brand Name</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Brand_Name}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Registered_Address</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.Registered_Address}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">State</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.state}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">GST No</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.GST_No}</Typography>
            </Box>
           
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">MID</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{selectedCpo.MID}</Typography>
            </Box>
            
          </Box>

           
        </Box>

        </Item>
        </Grid>


        <Grid item xs={12} >
        
       {
         SelectedCpoChargerDetailsRows.length > 0 && <Box sx={{padding:"5px"}}>
        <Box sx={{display:"flex",justifyContent:"center",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
        <Typography sx={{color:"crimson"}} variant="h6" component="h6">Charger Details</Typography>
     
        </Box>

        <Box sx={{margin:"20px",maxHeight:"500px",overflow:"auto"}}>
         
        <GenralTabel column={CpoChargerDetailscolumnData} rows={SelectedCpoChargerDetailsRows} />
        
      </Box>

       
    </Box>
       }
        

      
        </Grid>
      </Grid>

        
    
      
      <Box sx={{margin:"30px 0px ",display:"flex",justifyContent:"center",alignItems:"center"}}>

<Button variant="contained" size="large" onClick={handelCpoClose}>
Close
</Button>
        
      </Box>
       

        

        


    </Box>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cpo/users`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        console.log("response", response);
        const data = response.data;
        const formattedData = data.map((item) => ({
          "Brand Name":<Button onClick={()=>handelCpoClick(item._id,item)}>{item.Brand_Name}</Button>,
          State: item.state,
          "NumberOfChargers":<Button onClick={()=>handleDilogOpen()}>40</Button>,
          "Roaming": <Button onClick={()=>handelRoamingClick(item.roamingDetails)}>{item.roamingDetails.length}</Button>,
          "Category": <Typography>{item.National ? "National" : ""} / {item.regional ? "Regional" : ""}</Typography>,
          "Credits":<Typography>₹ {item.Initial_Balance}</Typography> ,
          "Company Wallet": <WalletModel />,
          Update: <BorderColorIcon onClick={() => handleOpen(item)} />,
          Delete: <DeleteIcon  onClick={() => handelDeleteCpo(item._id)}/>
        }));

        setRows(formattedData);
        setFilterRows(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  return (
    <div>
      <KTCard>
        <CpoListHeader  state={setUpdate}  handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/>

        <GenralTabel rows={filterRows} column={column} />
      </KTCard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLongTitle">
                ADD CPO
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-start">
                    Register Name
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    Brand Name
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    GST No.
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                  Initial Balance
                  </div>

                  <div className="col-md-3 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                    placeholder="Register Name"
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      placeholder="Brand Name"
                      name="Brand_Name"
                      value={formValues.Brand_Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="text" style={design} placeholder="GST NO" name="GST_No"
                      value={formValues.GST_No}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="number" style={design} placeholder="Initial Balance" name="Initial_Balance"
                      value={formValues.Initial_Balance}
                      onChange={handleChange}/>
                  </div>
                </div>
                <div className="row mt-5 ">
                  <div className="col-md-3 d-flex justify-content-start">
                    MID
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    Registered Address
                  </div>
                  <div className="col-md-3 d-flex justify-content-start">
                    State
                  </div>
                  <div className="col-md-3 d-flex justify-content-start ">
                    Choose Category
                  </div>

                  <div className="col-md-3 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="MID" name="MID"
                      value={formValues.MID}
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-content-start"
                    placeholder="Select CPO"
                  >
                    <input type="text" style={design} placeholder="Registered Address" name="Registered_Address"
                      value={formValues.Registered_Address}
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-3 d-flex justify-content-start"
                   
                  >
                    <input type="text" style={design} placeholder="State" name="state"
                      value={formValues.state}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-3 d-flex justify-content-start design mt-5">
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        style={{marginRight:"10px"}}
                        id="flexCheckDefault"
                        name="regional"
                        checked={formValues.regional}
                      value={formValues.regional}
                      onChange={handleChange}
                      />
                      
                       {/* <Checkbox {...label}  /> */}
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "15px" }}
                      >
                        Regional
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                    <input
                    style={{marginRight:"10px"}}
                        className="form-check-input"
                        type="checkbox"
                        checked={formValues.National}
                        id="flexCheckDefault"
                        name="National"
                      value={formValues.National}
                      onChange={handleChange}
                      />
                      
                       {/* <Checkbox {...label}  /> */}
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        National
                      </label>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mt-5">
                    <h3> Add Credentials</h3>
                  </div>
                  
                  <div className="col-md-4 d-flex justify-content-start">
                  Email
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                   Password
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    Number
                  </div>
                  
                  

                  
                  <div className="col-md-4 d-flex justify-content-start">
                  <input type="Email" style={design} placeholder="Email" name="email"
                      value={formValues.email}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    

                     <input type="text" style={design} placeholder="Password" name="password"
                      value={formValues.password}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="number" style={design} placeholder="Number" name="Number"
                      value={formValues.Number}
                      onChange={handleChange}/>
                  </div>
                 
                  
                  
                </div>
              </div>
              <div className="container-fluid mt-20">
                <h3 className="mb-5">Charger Mapping</h3>
                {/* Select list for choosing the number of fields */}
                <div className="row pt-3 pb-3">
                  <div className="col-6">
                    <label htmlFor="selectNumber">Select Number of Fields:</label>
                    <select
                      id="selectNumber"
                      className="form-select"
                      value={selectedNumber}
                      onChange={handleNumberChange}
                    >
                      <option value="0">Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="col-6  ">
                    <Box style={{marginTop:"16px"}}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!selectedNumber}
                      onClick={handleAddFields}
                    >
                      Add Fields
                    </button>
                    </Box>
                   
                  </div>
                </div>
                {/* Conditionally render charger details fields */}
                {chargerDetails.map((charger, index) => (
                  <div className="row mt-2" key={index}>
                     <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Charger Name"
                        value={charger.chargerName}
                        onChange={(event) => handleChargerDetailsChange(index,"chargerName", event.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        placeholder="Select Price" 
                        name="Select_Price"
                      
                        value={charger.Select_Price}
                        onChange={(event) => handleChargerDetailsChange(index, "Select_Price", event.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        
                        placeholder="Fixed Rent" 
                        name="Fixed_Rent"
                        value={charger.Fixed_Rent}
                        onChange={(event) => handleChargerDetailsChange(index, "Fixed_Rent", event.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        placeholder="Company Share" 
                        name="Company_Share"
                        value={charger.Company_Share}
                        onChange={(event) => handleChargerDetailsChange(index, "Company_Share", event.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>



              <div className="container-fluid mt-20">
                <h3 className="mb-5">Roaming </h3>
                {/* Select list for choosing the number of fields */}
                <div className="row pt-3 pb-3">
                  <div className="col-6">
                    <label htmlFor="selectedNumberOfRomaing">Select Number of Fields:</label>
                    <select
                      id="selectedNumberOfRomaing"
                      className="form-select"
                      value={selectedNumberOfRomaing}
                      onChange={handleRoamingNumberChange}
                    >
                      <option value="0">Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="col-6  ">
                    <Box style={{marginTop:"16px"}}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!selectedNumberOfRomaing}
                      onClick={handleRoamingAddFields}
                    >
                      Add Fields
                    </button>
                    </Box>
                   
                  </div>
                </div>
                {/* Conditionally render charger details fields */}
                {RoamingDetails.map((Roaming, index) => (
                  <div className="row mt-2" key={index}>
                     <div className="col-6">
                     <select
        className="form-select"
        value={Roaming.Company_Name}
        onChange={(event) => handleRoamingDetailsChange(index, "Company_Name", event.target.value)}
      >
        {companyNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        placeholder="eMsp Cost" 
                        name="eMsp_Cost"
                      
                        value={Roaming.eMsp_Cost}
                        onChange={(event) => handleRoamingDetailsChange(index, "eMsp_Cost", event.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        
                        placeholder="Additional Cost" 
                        name="Additional_cost"
                        value={Roaming.Additional_cost}
                        onChange={(event) => handleRoamingDetailsChange(index, "Additional_cost", event.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="file"
                        placeholder="Aggrement" 
                        name="Aggrement"
                        // value={Roaming.Aggrement}
                        onChange={(event) => handleRoamingDetailsChange(index, "Aggrement", event.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

             <div style={{ marginTop: "40px" }}>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "50%",
                  margin: "auto",
                }}
              >
                <button
                  type="button"
                  onClick={handleEditSubmit}
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div> */}

              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
              
                onClick={handleClose}
              >
                Close
              </button>
              <button type="button" onClick={handleEditSubmit} data-bs-dismiss="modal" className="btn btn-primary">
                Save
              </button>
            </div>
            </div>
          </div>
        </Box>
      </Modal>

      
           


          <SwipeableDrawer
            anchor={'top'}
            open={Cpostate['top']}
            onClose={handelCpoClose}
            onOpen={toggleDrawerCpo('top', true)}
          >
            {listCpoDetails('top')}
          </SwipeableDrawer>

          <Dialog
        open={Dilogopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDilogClose}
        aria-describedby="alert-dialog-slide-description"
      >
       <DialogTitle>{"Total Chargers : 40"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box display="flex" justifyContent="space-between" alignItems="center" width="500px" >
              
            <MyBox>AC (15)
            </MyBox>

            <MyBox>DC (25)
            </MyBox>
            </Box>
          
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CPOs;
