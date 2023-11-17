import {useState,useEffect, useContext} from 'react'
import StationHeader from './Components/StationHeader'
import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import MapLocation from '../../../MapLocation/MapLocation'
import { Button, Switch, Typography,Box} from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Modal from "@mui/material/Modal";
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChaletIcon from '@mui/icons-material/Chalet';
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../../Context/UserContext'
import axios from 'axios'
import { BASE_URL } from '../../../Config/BaseUrl'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
const ChargingStations = () => {
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
  const {userData}=useContext(UserContext);
  const initalValues = {
    StationName: "",
    Latitude: "",
    Longitude: "",
    street: "",
    area: "",
    state: "",
    city: "",
    landmark:"",
    Pincode: "",
    accesstype: "",
    opentime: "",
    closetime: "",
    cpoId:userData._id
  };
  const [update, setupdate] = useState(0);

  const [rows,setRows] =useState([])
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(initalValues);
  const [selectedStationId, setSelectedStationId] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
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
  
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
 
    if(inputValue === ""){
      setFilterRows(rows)
    }
    else{
         // Filter the rows based on whether any property contains the search input
    const filteredResults = filterRows.filter((item) =>
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

  const column=[
    {name:"Name"},
    {name:"Location"},
    {name:"Unit Consumed"},
    {name:"Address"},
    {name:"State"},
    {name:"City"},
    {name:"Access Type"},
    {name:"Opening Hours"},
   
    {name:"Update"},
    {name:"Delete"}
  ]
  // const rows=[
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>}
  
  // ]

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/stations/stations`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        
        const data = response.data;
        // const ChargerData=data.data.chargers;
        console.log("response stations==>", data);
        if(response && response.status === 200){
             const formattedData = data.map((item) => ({
            "Name":<Button variant="text" >{item.StationName}</Button>,
            "Location":<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>{item.Latitude},{item.Longitude}</Button>,
            "Unit Consumed":"324",
            "Address":<span>{item.street},{item.area},{item.city},{item.Pincode},{item.state}</span>,
            "State":item.state,
            "City":item.city,
            "Access Type":item.accesstype,
            "Opening Hours":<Typography>{item.opentime} {" : "}{item.closetime}</Typography>,
           
          Update: <BorderColorIcon onClick={() => handleUpdateStationOpen(item._id)} />,
          Delete: <DeleteIcon  onClick={() => handelDeleteStation(item._id)}/>
        }));
  
        setRows(formattedData);
        setFilterRows(formattedData)
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

  const handleUpdateStationOpen=(id)=>{
      console.log("Charger Update  Open");
    getStationById(id);
    handleOpen();
  }

  const handelDeleteStation=async(id)=>{
    console.log("delete charger",id)
    try {
      const res = await axios.delete(`${BASE_URL}/stations/deletestations/${id}`, {
        headers: { "Authorization": `${token}` }
      });
      console.log("res delete station === ==>", res);
      setupdate((prev)=>prev+1)
    } catch (err) {
      console.log("error in charger adding", err);
    }
  }


  const getStationById=async(id)=>{
    setSelectedStationId(id)
    try{
      const res = await axios.get(`${BASE_URL}/stations/stationsbyId/${id}`
      ,{ headers: { "Authorization": `${token}` } })
  
      
      
     console.log("sttaion data===>",res);
      if(res && res.status === 200){
        const data = res.data
            console.log("in staion Update === ==>",data);
            setFormValues(data);
      }
  }
  catch(err){
     console.log("error in charger adding",err)
  }
  }
 
 
  
  const handleSubmit = async () => {
    console.log("Charger Values ===>", formValues);
    try {
      const res = await axios.put(`${BASE_URL}/stations/editstations/${selectedStationId}`, formValues, {
        headers: { "Authorization": `${token}` }
      });
      console.log("res cpo updated === ==>", res);
    } catch (err) {
      console.log("error in charger adding", err);
    }
    // resetForm();
    
    handleClose();
    setupdate((prev)=>prev+1)
  };
 const data = "26.509904,75.410153";
  return (
    
    <div>
     <StationHeader state={setupdate} handleSearchInputChange={handleSearchInputChange}  searchInput={searchInput}/>
    <KTCard>
    
    <GenralTabel rows={filterRows} column={column}/>
    </KTCard>
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
                 
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <h3>Edit A Station</h3>
                   <CloseIcon onClick={handleClose}/>
                  </div>
                  <hr />
                </div>
                <div className="col-12 mt-3">
                  <h5>Fill the details</h5>
                  
                </div>
              </div>



              <div className="row mt-2">
                {/* <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Charger Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ChargerName"
                        id="ChargerName"
                        placeholder="ChargerName"
                        value={values.ChargerName}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12 mb-2">Station Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="StationName"
                        onChange={handleChange}
                        value={formValues.StationName}
                        id="StationName"
                        placeholder="Station Name"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row ">
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Latitude</div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="Latitude"
                            id="Latitude"
                            onChange={handleChange}
                            value={formValues.Latitude}
                            placeholder="Latitude"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Longitude</div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="Longitude"
                            id="Longitude"
                            value={formValues.Longitude}
                            onChange={handleChange}
                            placeholder="Longitude"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-around mt-2">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Street</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="street"
                        id="Street"
                        placeholder="Street"
                        value={formValues.street}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Area</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="area"
                        value={formValues.area}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row justify-content-around mt-2">

             <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">State</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="state"
                        value={formValues.state}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">City</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="city"
                        value={formValues.city}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>


                <div className="row mt-2 mb-2">
               
                <div className="col-md-6 p-0">
                  <div className="row">
                    <div className="col-12 mb-2">Landmark</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="landmark"
                        onChange={handleChange}
                        value={formValues.landmark}
                        id="landmark"
                        placeholder="Landmark"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row ">
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Pincode</div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="Pincode"
                            id="Pincode"
                            onChange={handleChange}
                            value={formValues.Pincode}
                            placeholder="Pincode"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Access Type</div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="accesstype"
                            id="accesstype"
                            value={formValues.accesstype}
                            onChange={handleChange}
                            placeholder="Access Type"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



       
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="row ">
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Opentime</div>
                        <div className="col-12">
                          <input
                            type="time"
                            name="opentime"
                            id="opentime"
                            onChange={handleChange}
                            value={formValues.opentime}
                            placeholder="Opentime"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div className="col-12 mb-2">Closetime</div>
                        <div className="col-12">
                          <input
                            type="time"
                            name="closetime"
                            id="closetime"
                            value={formValues.closetime}
                            onChange={handleChange}
                            placeholder="Closetime"
                            style={inputsL}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              
              </div>








             
              
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <button onClick={handleSubmit} className=" btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
         
        </Box>
      </Modal>
  </div>
  )
}

export default ChargingStations
