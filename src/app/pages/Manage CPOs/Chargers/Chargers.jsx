import {useContext,useEffect,useState} from 'react'
import { Button ,Switch, TextField,Box} from '@mui/material'
import MapLocation from '../../../MapLocation/MapLocation'
import { KTCard } from '../../../../_metronic/helpers'
import { UsersListHeader } from '../../Internal-Cpo-Managment/AllCpos/UsersListHeader'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import ChargersHeader from './Components/ChargersHeader'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import { useNavigate,Navigate } from 'react-router-dom'
import { BASE_URL } from '../../../Config/BaseUrl'
import axios from 'axios'
import UserContext from '../../../../Context/UserContext'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useFormik } from "formik";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import { FriendList } from './ClientComponents/FriendList'
import CloseIcon from '@mui/icons-material/Close';
const Chargers = () => {
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
    ChargerName: "",
    ChargerStation: "",
    Latitude: "",
    Longitude: "",
    street: "",
    area: "",
    state: "",
    city: "",
    Pincode: "",
    accesstype: "",
    opentime: "",
    closetime: "",
    OEM: "",
    OCPP_ID: "",
    fixedCost: "",
    demandFee: "",
    ownership: "",
    functional: false,
    ChargerPrice: "",
    onboardindDate: "",
    numberOfConnector: "",
    CompanyName:"",
    cpoId:userData._id,
    ChargerType:"",
    PowerRating:"",
    Connectors:""
    // AddClient:""
  };
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  // const {userData}=useContext(UserContext)
  
  const [initialValues, setInitialValues] = useState(initalValues);
  const [formValues, setFormValues] = useState(initalValues);
  const [selectedChargeId, setSelectedChargeId] = useState();
  const [update, setupdate] = useState(0);
  const [count, setCount] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = "26.509904,75.410153";
  const [Mapcords,setMapcords] = useState(data);
  const [MapModesOpen,setMapModesOpen] = useState(false)
  const [filterRows,setFilterRows] = useState([])
  const [DcChargers,setDcChargers] = useState([])
  const [AcChargers,setAcChargers] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const handelClick=(e) => {
    console.log("🚀 ~ file: Chargers.jsx:22 ~ handelClick ~ e:", e.target)
     navigate("/chargerdetails/", {state:{_id:"akshay"}});
    //  <Navigate to="/chargerdetails" state={{todos:[]}} replace={true}/>
  
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
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

  // const { values, error, handleChange, handleSubmit } = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: async(values, { resetForm }) => {
  //     console.log("Charger Values ===>",values);
  //     try{
  //         const res = await axios.post(`${BASE_URL}/chargers/addchargers`, 
  //         values
  //         ,{ headers: { "Authorization": `${token}` } })

  //         console.log("res cpo add ==>",res)
  //     }
  //     catch(err){
  //        console.log("error in charger adding",err)
  //     }
  //     resetForm();
  //     handleClose();
  //   },
  // });


  const column=[
    {name:"Charger Name"},
    {name:"Station Name"},
    {name:"Location"},
    {name:"OCPP ID"},
    {name:"Address"},
    {name:"Status"},
    {name:"City"},
    {name:"Charger Type"},
    {name:"Power Rating"},
    {name:"Connectors"},
    {name:"Functional"},
    {name:"Update"},
    {name:"Delete"}
  ]
  // const rows=[
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
  //   {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    
  
  // ]
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/chargers/`, {
        headers: { Authorization: `${token}` },
      });
      // Assuming the response data is an array of objects with the required properties
      
      const data = response.data;
      const ChargerData=data.data.chargers;
      console.log("response chargers==>", data);
      if(data && data.status === 'success'){
           const formattedData = ChargerData.map((item) => ({
          "Name":<Button variant="text" onClick={handelClick}>{item.ChargerName}</Button>,
          "Station Name":item.ChargerStation,
          "Location":<Button  onClick={()=>{handelMapOpen(`${item.Latitude},${item.Longitude}`)}}  variant='text'>{item.Latitude},{item.Longitude}</Button>,
          "OCPP ID":item.OCPP_ID,
          "Address":<span>{item.street},{item.area},{item.city},{item.Pincode},{item.state}</span>,
          "Status":item.functional ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
          "City":item.city,
          "ChargerType":item.ChargerType,
          "Power Rating":"60.00KW",
          "Connectors":"CCS / GBT/ TYPE 2",
          "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
          // Update:<DriveFileRenameOutlineIcon/>,
        Update: <BorderColorIcon onClick={() => handleUpdateChargerOpen(item._id)} />,
        Delete: <DeleteIcon  onClick={() => handelDeleteCharger(item._id)}/>
      }));

      const ChargersDcData = formattedData.filter((item) => {
        return item.ChargerType.toLowerCase() === "dc"
      });

      const ChargersAcData = formattedData.filter((item) => {
        return item.ChargerType.toLowerCase() === "ac"
      });

      setRows(formattedData);
      setFilterRows(formattedData);
      setDcChargers(ChargersDcData);
      setAcChargers(ChargersAcData)
      }
      else{
        setRows([]);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setRows([]);
    }
  };
useEffect(()=>{
 

  // console.log("UserData", userData);
  fetchData();
},[update])
const handelDeleteCharger=async(id)=>{
  console.log("delete charger",id)
  try {
    const res = await axios.delete(`${BASE_URL}/chargers/deletechargers/${id}`, {
      headers: { "Authorization": `${token}` }
    });
    console.log("res cpo updated === ==>", res);
    setupdate((prev)=>prev+1)
  } catch (err) {
    console.log("error in charger adding", err);
  }
}
const getChargerById=async(id)=>{
  setSelectedChargeId(id)
  try{
    const res = await axios.get(`${BASE_URL}/chargers/${id}`
    ,{ headers: { "Authorization": `${token}` } })

    
    const data = res.data
   
    if(data && data.status === "success"){
          const ChargerData=data.data.charger
          console.log("in Charger Update === ==>",ChargerData);
          setFormValues(ChargerData);
    }
}
catch(err){
   console.log("error in charger adding",err)
}
}
const handleUpdateChargerOpen=(id)=>{
  console.log("Charger Update  Open");
  getChargerById(id);
  handleOpen();
  
}

const handleSwitchChange = async (event,id) => {
  const checked = event.target.checked;
  console.log("Check sttaus===>",checked,id)
  try {
    await updateFunctionalStatus( checked,id);
  } catch (err) {
    console.log("Error updating functional status", err);
  }
};

const updateFunctionalStatus=async(checked,id)=>{
  const values={
    chargerId:id,
    functionalStatus:checked
  }
  try {
    const res = await axios.post(`${BASE_URL}/chargers/update-functional`, values, {
      headers: { "Authorization": `${token}` }
    });
    console.log("res charger status updated === ==>", res);
  } catch (err) {
    console.log("error in charger adding", err);
  }
  setupdate((prev)=>prev+1); 
}
const handleSubmit = async () => {
  console.log("Charger Values ===>", formValues);
  try {
    const res = await axios.patch(`${BASE_URL}/chargers/editchargers/${selectedChargeId}`, formValues, {
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

const handelMapData=(data)=>{
  setMapcords(data)
}

const handelMapClose=()=>{
  setMapModesOpen(false);
  setMapcords("")
}

const handelMapOpen=(data)=>{
  setMapModesOpen(true);
  handelMapData(data)
}

const handelAcFilter=()=>{
  setFilterRows(AcChargers)
}

const handelDcFilter=()=>{
  setFilterRows(DcChargers)
}

const handelAllFilter=()=>{
  setFilterRows(rows);
}

 
  return (
    <div>
      <ChargersHeader state={setupdate} AcFunc={handelAcFilter} DcFun={handelDcFilter} AllFunc={handelAllFilter} DcLength={DcChargers.length} AcLength={AcChargers.length}
       handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/>
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
        <MapLocation data={Mapcords}/>
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
                  <h3>Edit A Charger</h3>
                   <CloseIcon onClick={handleClose}/>
                  </div>
                  <hr />
                </div>
                <div className="col-12 mt-3">
                  <h5>Fill the details</h5>
                  
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Charger Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ChargerName"
                        id="ChargerName"
                        placeholder="ChargerName"
                        value={formValues.ChargerName}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Charger Station</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ChargerStation"
                        onChange={handleChange}
                        value={formValues.ChargerStation}
                        id="ChargerStation"
                        placeholder="ChargerStation"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
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
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12">Street</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="street"
                        id="street"
                        placeholder="Street"
                        value={formValues.street}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
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
                <div className="col-md-4">
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
              </div>
              <div className="row justify-content-around mt-2">
                <div className="col-md-4">
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
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12">Pincode</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="Pincode"
                        id="Pincode"
                        placeholder="Pincode"
                        value={formValues.Pincode}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12">Accesstype</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="accesstype"
                        id="accesstype"
                        placeholder="Accesstype"
                        value={formValues.accesstype}
                        onChange={handleChange}
                        style={inputs}
                      />
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
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">OEM</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="OEM"
                        id="OEM"
                        placeholder="OEM"
                        value={formValues.OEM}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2"> OCPP ID</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="OCPP_ID"
                        onChange={handleChange}
                        value={formValues.OCPP_ID}
                        id=" OCPP_ID"
                        placeholder=" OCPP_ID"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Fixed Cost</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="fixedCost"
                        id="fixedCost"
                        placeholder="FixedCost"
                        value={formValues.fixedCost}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Demand Fee</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="demandFee"
                        onChange={handleChange}
                        value={formValues.demandFee}
                        id="demandFee"
                        placeholder="Demand Fee"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>


                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Ownership</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ownership"
                        onChange={handleChange}
                        value={formValues.ownership}
                        id="ownership"
                        placeholder="ownership"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
              </div>



              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">ChargerType</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ChargerType"
                        id="ChargerType"
                        placeholder="ChargerType"
                        value={formValues.ChargerType}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">PowerRating</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="PowerRating"
                        onChange={handleChange}
                        value={formValues.PowerRating}
                        id="PowerRating"
                        placeholder="Power Rating"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Connectors</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="Connectors"
                        onChange={handleChange}
                        value={formValues.Connectors}
                        id="Connectors"
                        placeholder="Connectors"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Number Of Connector</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="numberOfConnector"
                        id="numberOfConnector"
                        placeholder="Number Of Connector"
                        value={formValues.numberOfConnector}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="row">
                        <div className="col-12 mb-2">Functional</div>
                        <div className="col-12">
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              name="functional"
                              checked={formValues.functional}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                </div>
                
              </div>




              <div className="row mt-2">
                
                <div className="col-md-7">
                  <div className="col-12 mt-4">
                    <h3>Company </h3>
                  </div>
                  <div className="row justify-content-space-between">
                    <div className="col-12">
                      <div
                        className="row pt-3  pb-3"
                        style={{ borderTop: "1px solid grey" }}
                      >
                        <div className="col-5">
                          <div className="row">
                           
                       
                    <div className="col-12 mb-2">Company Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="CompanyName"
                        id="CompanyName"
                        placeholder="Company Name"
                        value={formValues.CompanyName}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="row" >
                            <div className="col-12">Price</div>
                            <div className="col-12">
                        
                      <input className="mt-5" type="text" name="ChargerPrice" id="ChargerPrice" value={formValues.ChargerPrice} onChange={handleChange} style={{maxWidth:"50%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row">
                        <div className="col-12">Onboarding Date</div>
                        <div className="col-12 d-flex justify-content-space-evenly">  <input className="mt-5" type="text"  name="onboardindDate" id="onboardindDate" value={formValues.onboardindDate} onChange={handleChange} style={{maxWidth:"50%"}} /></div>
                        </div>
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

      <Modal
        open={MapModesOpen}
        onClose={handelMapClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
         
        <div className="modal-body" style={{"height":"400px"}}>
        <MapLocation data={Mapcords}/>
      </div>
         
        </Box>
      </Modal>
    </div>
  )
}

export default Chargers
