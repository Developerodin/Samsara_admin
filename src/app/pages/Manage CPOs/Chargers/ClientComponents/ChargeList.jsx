import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { useState ,useContext} from "react";
import { FriendList } from "./FriendList";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import axios from "axios";
import { BASE_URL } from "../../../../Config/BaseUrl";
import UserContext from "../../../../../Context/UserContext";
import CloseIcon from '@mui/icons-material/Close';
export default function ChargeList({setUpdate}) {

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
 

  const [count, setCount] = useState();
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {userData}=React.useContext(UserContext)
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

  const { values, error, handleChange, handleSubmit } = useFormik({
    initialValues: initalValues,
    onSubmit: async(values, { resetForm }) => {
      console.log("Charger Values ===>",values);
      try{
          const res = await axios.post(`${BASE_URL}/chargers/addchargers`, 
          values
          ,{ headers: { "Authorization": `${token}` } })

          console.log("res cpo add ==>",res)
      }
      catch(err){
         console.log("error in charger adding",err)
      }
      
      resetForm();
      handleClose();
      setUpdate((prev)=>prev+1);
    },
  });

 
  return (
    <div>
    
      <Button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal123"
        style={{border:"none"}}
        onClick={handleOpen}
      >
       <LibraryAddIcon/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <h3>List A Charger</h3>
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
                        value={values.ChargerName}
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
                        value={values.ChargerStation}
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
                            type="number"
                            name="Latitude"
                            id="Latitude"
                            onChange={handleChange}
                            value={values.Latitude}
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
                            type="number"
                            name="Longitude"
                            id="Longitude"
                            value={values.Longitude}
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
                        value={values.street}
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
                        value={values.area}
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
                        value={values.state}
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
                        value={values.city}
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
                        value={values.Pincode}
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
                        value={values.accesstype}
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
                            value={values.opentime}
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
                            value={values.closetime}
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
                        value={values.OEM}
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
                        value={values.OCPP_ID}
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
                        type="number"
                        name="fixedCost"
                        id="fixedCost"
                        placeholder="FixedCost"
                        value={values.fixedCost}
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
                        type="number"
                        name="demandFee"
                        onChange={handleChange}
                        value={values.demandFee}
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
                        value={values.ownership}
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
                        value={values.ChargerType}
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
                        value={values.PowerRating}
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
                        value={values.Connectors}
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
                        type="number"
                        name="numberOfConnector"
                        id="numberOfConnector"
                        placeholder="Number Of Connector"
                        value={values.numberOfConnector}
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
                        value={values.CompanyName}
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
                        
                      <input className="mt-5" type="number" name="ChargerPrice" id="ChargerPrice" value={values.ChargerPrice} onChange={handleChange} style={{maxWidth:"50%"}} />
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row">
                        <div className="col-12">Onboarding Date</div>
                        <div className="col-12 d-flex justify-content-space-evenly">  <input className="mt-5" type="text" name="onboardindDate" id="onboardindDate" onChange={handleChange} style={{maxWidth:"50%"}} /></div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button type="submit" className=" btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
