import { Box, Button,Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import axios from 'axios';
import { BASE_URL } from '../../../Config/BaseUrl';
import AddIcon from '@mui/icons-material/Add';
const Complains = () => {
  const userData=JSON.parse(sessionStorage.getItem('User'))
  const token =sessionStorage.getItem('token');
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
  const inputs = {
    minWidth: "100%",
    background: "#f4f5f7",
    border: "1px solid #f4f5f7 ",
    padding: "10px 5px",
  };
  const [formValues, setFormValues] = useState(initalValues);
 
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [update, setupdate] = useState(0);
  const [rows, setRows] = useState([]);

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmitUser = async () => {
    
  };
const column=[
  {name:"User"},
  {name:"Title"},
  {name:"Date"},
  {name:"Status"},
]

function getRandomUserName() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
  return names[Math.floor(Math.random() * names.length)];
}

const rowsDumy = [
  {
    "User": getRandomUserName(),
    "Title": "Fund Not Transfer",
    "Date": "2023-09-24",
    "Status": <Button color='success' variant='contained'>Resolved</Button>
  },
  {
    "User": getRandomUserName(),
    "Title": "My Account is Deleted",
    "Date": "2023-08-12",
    "Status": <Button color='warning' variant='contained'>Pending</Button>
  },
  
  {
    "User": getRandomUserName(),
    "Title": "Late response from support",
    "Date": "2023-10-22",
    "Status": <Button color='warning' variant='contained'>Pending</Button>
  },
  
];



useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/customers/complaints
      `, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response.data;
      const complaints=data.complaints;
      console.log("response compalnts==>", data);
      if(data && data.status === 'success'){
           const formattedData = complaints.map((item) => ({
          "User":item.user,
          "Comapny Name":item.company,
          "Title":item.title,
          "Date":item.date,
          "Status": <Button color='success' variant="contained" >{item.status}</Button> ,
          
      }));

      setRows(formattedData);
      }
      else{
        setRows([]);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setRows([]);
    }
  };

  // console.log("UserData", userData);
  fetchData();
},[update])

  return (
   <Box>
    {/* <AddIcon onClick={handleOpen}/> */}
     <GenralTabel rows={rowsDumy} column={column}/>

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
   </Box>
  )
}

export default Complains
