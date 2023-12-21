import React, { useEffect, useState } from 'react'
import UserHeader from './Components/UserHeader'


import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import MapLocation from '../../../MapLocation/MapLocation'
import { Button, Switch,Modal,Box,Typography,TextField, Card, CardContent } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import RemoveIcon from '@mui/icons-material/Remove';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChaletIcon from '@mui/icons-material/Chalet';
import { useNavigate } from 'react-router-dom'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { UserWalletModal } from './Components/UserWalletModal'
import AddVehicle from './Components/AddVehicle'
import { BASE_URL, Base_url } from '../../../Config/BaseUrl'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useFormik } from "formik";
import Autocomplete from '@mui/material/Autocomplete';
import TuneIcon from '@mui/icons-material/Tune';
import { AddCircle } from '@mui/icons-material';
import { ThemColor } from '../../../Them/ThemColor'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const UserList = () => {
  const navigate = useNavigate();
  const token =sessionStorage.getItem('token');
  const userData=JSON.parse(sessionStorage.getItem('User'))
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    border: "none",
    p: 4,
  };
  const initalValues = {
    name: "",
    email: "",
    phone_number: "",
    password:"",
    cpoId:userData._id
   
  };
  const [update, setupdate] = useState(0);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(initalValues);
  const [selectedCustomerId, setSelectedCustomerId] = useState();
  const [userWallet,setUserWallet]=useState({});
  const [userWalletUserData,setUserWalletUserData]=useState({});
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [InActiveUsers,setInActiveUsers] = useState([])
  const [ActiveUsers,setActiveUsers] = useState([])
  const initialValuesWallet={
    Amount:"",
    Description:""

  }
  const [userWalletHistory,setUserWalletHistory]=useState([]);
  const [userWalletValues,setUserWalletValues]=useState(initialValuesWallet);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const column=[
    
    {name:"Name"},
    {name:"Email"},
    {name:"Phone"},
    {name:"Address"},
    {name:"city"},
    // {name:"Charge Duration"},
    {name:"Status"},
    // {name:"Wallet"},
    
    // {name:"Vehicles"},
    {name:"Active"},
    {name:"View"},
    {name:"Update"},
    {name:"Delete"}
  ]
  const inputs = {
    minWidth: "100%",
    background: "#f4f5f7",
    border: "1px solid #f4f5f7 ",
    padding: "10px 5px",
  };
  const inputsL = {
    maxWidth: "100%",
    background: "#f4f5f7",
    border: "1px solid #f4f5f7 ",
    padding: "10px 5px",
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeWallet = (e) => {
    const { name, value } = e.target;
    setUserWalletValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
 
    if(inputValue === ""){
      setFilterRows(rows)
    }
    else{
         // Filter the rows based on whether any property contains the search input
    const filteredResults = rows.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(inputValue)
    )
  );

  // Update the filteredRows state
  setFilterRows(filteredResults);
    }
   

    // Update the search input state
    setSearchInput(inputValue);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/customers/customers
      `, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response.data;
      const CustomersData=data.data.users;
      console.log("response chargers==>", CustomersData);
      if(data && data.status === 'success'){
           const formattedData = CustomersData.map((item) => ({
          "Name":item.name,
          "Email":item.email,
          "Phone":item.phone_number,
         
          "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
          // "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
      
          "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
     
          // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
          
        Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
        Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
      }));
      const ActiveUsers = CustomersData.filter((item) => {
        return item.status === true;
      });
      const ActiveData = ActiveUsers.map((item) => ({
        "Name":item.name,
        "Email":item.email,
        "Phone":item.phone_number,
        "Charge Duration":"100 hrs",
        "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
        "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
        "Vehicles":"tata Ev4",
        "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
        "Icon":<AddVehicle/>,
        // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
        
      Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
      Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
    }));

      const InActiveUsers = CustomersData.filter((item) => {
        return item.status === false;
      });

      const InActiveData = InActiveUsers.map((item) => ({
        "Name":item.name,
        "Email":item.email,
        "Phone":item.phone_number,
        "Charge Duration":"100 hrs",
        "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
        "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
        "Vehicles":"tata Ev4",
        "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
        "Icon":<AddVehicle/>,
        // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
        
      Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
      Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
    }));

      setRows(formattedData);
      setFilterRows(formattedData);
      setActiveUsers(ActiveData);
      setInActiveUsers(InActiveData);
      }
      else{
        setRows([]);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setRows([]);
    }
  };

  const handelUserView = (id)=>{
    navigate(`user_view/${id}`)
  }
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/users`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.users
      console.log("User Data ==>",Data)
      if(Data){
        const Users = Data.filter((item) => {
          return item.corporate_id === "";
        });
          const formattedData = Users.map((item) => ({
         "Name":item.name,
         "Email":item.email,
         "Phone":item.mobile,
         "Address":item.Address,
        "City":item.city,
         "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
         // "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
     
         "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
          "View":<RemoveRedEyeIcon onClick={()=>handelUserView(item._id)}/>,
         // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
         
       Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
       Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
     }));
  //    const ActiveUsers = CustomersData.filter((item) => {
  //      return item.status === true;
  //    });
  //    const ActiveData = ActiveUsers.map((item) => ({
  //      "Name":item.name,
  //      "Email":item.email,
  //      "Phone":item.phone_number,
  //      "Charge Duration":"100 hrs",
  //      "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
  //      "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
  //      "Vehicles":"tata Ev4",
  //      "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
  //      "Icon":<AddVehicle/>,
  //      // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
       
  //    Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
  //    Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
  //  }));

  //    const InActiveUsers = CustomersData.filter((item) => {
  //      return item.status === false;
  //    });

  //    const InActiveData = InActiveUsers.map((item) => ({
  //      "Name":item.name,
  //      "Email":item.email,
  //      "Phone":item.phone_number,
  //      "Charge Duration":"100 hrs",
  //      "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
  //      "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
  //      "Vehicles":"tata Ev4",
  //      "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
  //      "Icon":<AddVehicle/>,
  //      // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
       
  //    Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
  //    Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
  //  }));

     setRows(formattedData);
     setFilterRows(formattedData);
    //  setActiveUsers(ActiveData);
    //  setInActiveUsers(InActiveData);
    
    
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };
  useEffect(()=>{
   
  
    // console.log("UserData", userData);
    // fetchData();
    fetchUsers();
  },[update])

  const handelWalletClick=(id,data)=>{
    fetchUserWalletData(id);
    handelWalletHistory(id)
    setUserWalletUserData(data)
    setState({ ...state, 'right': true });
    
  }

  const handelWalletHistory=async(id)=>{
    try {
      
      const response = await axios.get(`${BASE_URL}/customers/gethistory/${id}`, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response.data.data;
      console.log("response history==>", data);
      setUserWalletHistory(data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserWalletHistory([]);
    }
  }

  const handelWalletClose = (id,data)=>{
    setState({ ...state, 'right': false });
    setUserWalletValues(initialValuesWallet)

  }

  
  const fetchUserWalletData = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/customers/getWallet/${id}`, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response;
      const CustomersWalletData=data.data;
      console.log("response Wallet==>", CustomersWalletData);
      if(CustomersWalletData && CustomersWalletData.status === 'success'){
        const wallet = data.data.wallet;
      setUserWallet(wallet);
      }
      else{
        setUserWallet({});
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserWallet({});
    }
  };

  const handleCreditTransaction=async(id)=>{
    const values={
      customerId:id,
       amount:userWalletValues.Amount,
       type:"credit"
    }
    console.log(values)
    try {
      const response = await axios.post(`${BASE_URL}/customers/processTransaction`,values, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response;
      const CustomersWalletData=data.data;
      console.log("response Wallet==>", data);
     
      fetchUserWalletData(id);
      handelWalletHistory(id)
      setUserWalletValues(initialValuesWallet)
      
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // setUserWallet({});
    }
  }

  const handleDebitTransaction=async(id)=>{
    const values={
      customerId:id,
       amount:userWalletValues.Amount,
       type:"debit"
    }
    console.log(values)
    try {
      const response = await axios.post(`${BASE_URL}/customers/processTransaction`,values, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response;
      const CustomersWalletData=data.data;
      console.log("response Wallet==>", data);
     
      fetchUserWalletData(id);
      handelWalletHistory(id)
      setUserWalletValues(initialValuesWallet)
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // setUserWallet({});
    }
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 , padding:"10px"}}
      role="presentation"
      
    >


        <Box sx={{padding:"15px"}}>
        <Typography sx={{color:"#F16767"}}variant="h6" component="h2">USER WALLET</Typography>
          <Box sx={{margin:"20px 0px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Name</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{userWalletUserData.name}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Phone number</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{userWalletUserData.phone_number}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Email</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">{userWalletUserData.email}</Typography>
            </Box>
          </Box>
        </Box>
     <hr/>
      
      
        <Box sx={{padding:"5px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{fontWeight:"bold"}} variant="h6" component="h2">Available Balance</Typography>
            <Typography variant="h6" component="h2">₹{userWallet.balance}</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",margin:"20px 5px"}}>
            <TextField id="outlined-basic" label="Amount" variant="outlined" name="Amount" type='number' onChange={handleChangeWallet} value={userWalletValues.Amount}/>
             <TextField id="filled-basic" label="Description" variant="outlined" name="Description" onChange={handleChangeWallet} value={userWalletValues.Description}/>
            </Box>

            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                <Box sx={{display:"flex",width:"150px" , justifyContent:"space-evenly",marginTop:"20px",marginBottom:"20px"}}>
                <Button variant="contained" color="success" onClick={()=>handleCreditTransaction(userWalletUserData._id)}>Add</Button>
                <Button variant="contained" color="error" onClick={()=>handleDebitTransaction(userWalletUserData._id)}>Debit</Button>
                </Box>
           
            </Box>
        </Box>

        <hr/>

        <Box sx={{padding:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{fontWeight:"bold"}}variant="h6" component="h2">Payment History</Typography>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
            <RotateLeftIcon/>
            <AddRoadIcon/>
            <RemoveIcon/>
            </Box>
            </Box>

            {
              userWalletHistory && userWalletHistory.map((el)=>{
                return (
                  <Box> 
                      <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"15px",padding:"10px"}}>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">QQ</Typography>
             <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">{el.type} by {userWalletUserData.name}</Typography>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">Fri feb 17 2023</Typography>
             </Box>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle1" component="h2"><CurrencyRupeeIcon sx={{fontSize:"small",color: `${el.type === "credit" ? "green" : "red"}` }} />{el.amount}</Typography>
             </Box>
                     </Box>
                  </Box>
                )
              })
            }

            

        </Box>


    </Box>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    // if (
    //   event &&
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };

  const getCustomerById=async(id)=>{
    setSelectedCustomerId(id)
    try{
      const res = await axios.get(`${BASE_URL}/customers/customers/${id}`
      ,{ headers: { "Authorization": `${token}` } })
  
      
      const data = res.data
      console.log("in Customer Update === ==>",data);
      if(data){
            setFormValues(data);
      }
  }
  catch(err){
     console.log("error in Customer adding",err)
  }
  }

  const handleSubmitUser = async () => {
    console.log("Customer Values ===>", formValues);
    try {
      const res = await axios.put(`${BASE_URL}/customers/editcustomers/${selectedCustomerId}`, formValues, {
        headers: { "Authorization": `${token}` }
      });
      console.log("res Customer updated === ==>", res);
    } catch (err) {
      console.log("error in Customer adding", err);
    }
    // resetForm();
    
    handleClose();
    setupdate((prev)=>prev+1)
  };

  const updateFunctionalStatus=async(checked,id)=>{
    const values={
      customerId:id,
      functionalStatus:checked
    }
    try {
      const res = await axios.post(`${BASE_URL}/customers/update-functional`, values, {
        headers: { "Authorization": `${token}` }
      });
      console.log("res charger status updated === ==>", res);
    } catch (err) {
      console.log("error in charger adding", err);
    }
    setupdate((prev)=>prev+1); 
  }

  const handleUpdateCustomerOpen=(id)=>{
    console.log("Customer Update  Open");
    // getCustomerById(id);
    // handleOpen();
  }

  const handelDeleteCustomer=async(id)=>{
    console.log("delete Customer",id)
    try {
      const res = await axios.delete(`${Base_url}api/users/${id}`, {
        // headers: { "Authorization": `${token}` }
      });
      console.log("res Customer delete === ==>", res);
      setupdate((prev)=>prev+1)
    } catch (err) {
      console.log("error in Customer delete", err);
    }
  }

  const handleSwitchChange=async(event,id)=>{
    const checked = event.target.checked;
    // console.log("Check sttaus===>",checked,id)
    // try {
    //   await updateFunctionalStatus( checked,id);
    // } catch (err) {
    //   console.log("Error updating functional status", err);
    // }
  }

  const handelActiveFilter=()=>{
    setFilterRows(ActiveUsers)
  }

  const handelInActiveFilter=()=>{
    setFilterRows(InActiveUsers)
  }

  const handelAllUsers =()=>{
    setFilterRows(rows)
  }
  
  const handelAddNew=()=>{
    navigate("/add_user");
  }

 const data = "26.509904,75.410153";
  return (
    <div>
    <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
           

            <Box style={{width:"30%"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </Box>

            <Box >
            <Button
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}
          startIcon={<AddCircle />}
          onClick={handelAddNew}
        >
          Add User
        </Button>
             
              <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                <TuneIcon />
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>
 
   
   <GenralTabel rows={filterRows} column={column}/>
  
   <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
 <div className="modal-content">
   <div className="modal-header">
     <h5 className="modal-title" id="exampleModalLongTitle">Location</h5>
      
        
   
   </div>
   <div className="modal-body" style={{"height":"400px"}}>
     <MapLocation data={data}/>
   </div>
   <div className="modal-footer" >
     <button type="button" className="btn btn-primary mt-5" data-bs-dismiss="modal">Close</button>
  
   </div>
 </div>
</div>
</div>

<SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={handelWalletClose}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
     <Box sx={style}>
        
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h3>Add EV Owner</h3>
                  <hr />
                </div>
                <div className="col-12 mt-3">
                  <h5>Fill the details</h5>
                  
                </div>
              </div>




              <div className="row justify-content-around mt-2">
                <div className="col-md-6">
                <div className="row">
                    <div className="col-6 mb-2">Full Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        onChange={handleChangeUser}
                        value={formValues.name}
                        id="name"
                        placeholder="Full Name"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Phone Number</div>
                    <div className="col-12">
                      <input
                        type="number"
                        name="phone_number"
                        id="phone_number"
                        placeholder="PhoneNumber"
                        value={formValues.phone_number}
                        onChange={handleChangeUser}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row justify-content-around mt-7">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Email</div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChangeUser}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Password</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChangeUser}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                
              </div>


              
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
              <button onClick={handleSubmitUser} className=" btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
        
        </Box>

      </Modal>
 </div>
  )
}

export default UserList
