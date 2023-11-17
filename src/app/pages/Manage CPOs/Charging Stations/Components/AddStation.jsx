import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
// import { FriendList } from "./FriendList";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import axios from "axios";
import { BASE_URL } from "../../../../Config/BaseUrl";
import CloseIcon from '@mui/icons-material/Close';

export default function AddStation({setUpdate}) {
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
 

  const [count, setCount] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    onSubmit: async(value, { resetForm }) => {
      console.log("Stations Values ===>",values);
      try{
          const res = await axios.post(`${BASE_URL}/stations/addstation`, 
          values
          ,{ headers: { "Authorization": `${token}` } })

          console.log("res Stations add ==>",res)
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
        data-bs-target="#exampleModal1234"
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
                  <h3>List A Station</h3>
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
                        value={values.StationName}
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
                            type="text"
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
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Street</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="street"
                        id="Street"
                        placeholder="Street"
                        value={values.street}
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
                        value={values.area}
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
                        value={values.state}
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
                        value={values.city}
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
                        value={values.landmark}
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
                            value={values.Pincode}
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
                            value={values.accesstype}
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
                
              
              </div>








             
              
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
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
