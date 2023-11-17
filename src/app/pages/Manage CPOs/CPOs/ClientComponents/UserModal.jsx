import React, { useContext, useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { useFormik } from "formik";
import { Box, Checkbox } from "@mui/material";
import { BASE_URL } from "../../../../Config/BaseUrl";
import axios from "axios";
import CposContext from "../../../../../Context/CposContext";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UserModal = ({setUpdate}) => {
  const token =sessionStorage.getItem('token');
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

  const companyNames = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];


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


  const module=[
    {name:"Charger Management"},
    {name:"User Management"},
    {name:"Company Management"},
    {name:"Billing and Payment"},
    {name:"Complaints Management"},
    {name:"Coupon Management"}
  ]
  const design = {
    minWidth: "85%",
    background: "rgb(244,245,247)",
    border: "none",
    padding: "10px",
    marginTop: "10px",
  };


  const initialValues={
  name:"",
  email:"",
  password:"",
  Brand_Name:"",
  GST_No:"",
  MID:"",
  Registered_Address:"",
  state:"",
  regional:false,
  National:false,
  Initial_Balance:null,
  Number:null,
  image:""
}


  const {values,errors,handleSubmit,handleChange,handelBlur}=useFormik({
    initialValues:initialValues,
    onSubmit:async(values,{resetForm}) => {
      const data={
        name:values.name,
  email:values.email,
  password:values.password,
  Brand_Name:values.Brand_Name,
  GST_No:values.GST_No,
  MID:values.MID,
  Registered_Address:values.Registered_Address,
  state:values.state,
  regional:values.regional,
  National:values.National,
  Initial_Balance:values.Initial_Balance,
  Number:values.Number,
  image:values.image,
  roamingDetails:RoamingDetails,
  chargerDetails:chargerDetails
      }
      console.log("🚀 ~ file: UserModal.jsx:27 ~ UserModal ~ values:", data);
      // console.log("Charger Details:",chargerDetails)
      // console.log("RoamingDetails:",RoamingDetails)
      try{
        const res =await axios.post(`${BASE_URL}/cpo/signup`, 
        data  
        ,{ headers: { "Authorization": `${token}` } })
        setUpdate((prev)=>prev+1)
        console.log("res cpo add ==>",res)
      }
      catch(err){
        console.log("error: ", err);
      }
      resetForm()
      setRoamingDetailss([]);
      setChargerDetails([]);
      setSelectedNumber(0);
      setSelectedNumberOfRomaing(0);
    }
  })
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
       <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' /> Add CPO
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" style={{ minWidth: "90%" }}>
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
                      value={values.name}
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
                      value={values.Brand_Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="text" style={design} placeholder="GST NO" name="GST_No"
                      value={values.GST_No}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input type="number" style={design} placeholder="Initial Balance" name="Initial_Balance"
                      value={values.Initial_Balance}
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
                      value={values.MID}
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-content-start"
                    placeholder="Select CPO"
                  >
                    <input type="text" style={design} placeholder="Registered Address" name="Registered_Address"
                      value={values.Registered_Address}
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-3 d-flex justify-content-start"
                   
                  >
                    <input type="text" style={design} placeholder="State" name="state"
                      value={values.state}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-3 d-flex justify-content-start design mt-5">
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="regional"
                        checked={values.regional}
                      value={values.regional}
                      onChange={handleChange}
                      />
                      
                       {/* <Checkbox {...label}  /> */}
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Regional
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="National"
                        checked={values.National}
                      value={values.National}
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
                      value={values.email}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    

                     <input type="text" style={design} placeholder="Password" name="password"
                      value={values.password}
                      onChange={handleChange}/>
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="number" style={design} placeholder="Number" name="Number"
                      value={values.Number}
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
                        value={Roaming.Aggrement}
                        onChange={(event) => handleRoamingDetailsChange(index, "Aggrement", event.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
           
            
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Add New Role
              </h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">Role Name</div>
                <div className="col-12">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ background: "#f4f5f7", border: "none" }}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">Permission and Functionality </div>
                <div className="col-12"style={{border:"1px solid #f9f9f9"}}>
<div className="row mb-3">
  <div className="col-4 mt-2" style={{color:'#d3d2d8'}}>
    Select modules
  </div>
  <div className="col-8 mt-2  d-flex justify-content-center" style={{color:'#d3d2d8'}}>
    Access Details
  </div>
  </div>
  <div className="row pb-3"  style={{background:"#f4f5f7"}}>
  {/* map */}
  {module.map((self,index)=>
  {return(
<>
<div key={index+12} className="col-4 mt-4 txt-center ">
  {self.name}
  </div>
  <div className="col-8 d-flex justify-content-center mt-4">
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
</div>
  </div>
</>
  )})}
 
</div>
  {/* map */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
