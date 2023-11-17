import React from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { useFormik } from "formik";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const UserModal = () => {
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
  Company_Name:"",
  Select_CPO:"",
  GST_No:"",
  MID:"",
  Address:"",
  fleet:"",
  Host:"",
  Investor:"",
  Admin_Name:"",
  Number:"",
  Email:"",
  Assign_Role:"",
  ABB_TestCharger:"",
  Select_Price:"",
  Fixed_Rent:"",
  Company_Share:""

}


  const {values,errors,handleSubmit,handleChange,handelBlur}=useFormik({
    initialValues:initialValues,
    onSubmit:(values,{resetForm}) => {
      console.log("🚀 ~ file: UserModal.jsx:27 ~ UserModal ~ values:", values)
      resetForm()
    }
  })
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal123"
        style={{border:"none"}}
      >
       <LibraryAddIcon/>
      </button>

      <div
        className="modal fade"
        id="exampleModal123"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" style={{ minWidth: "90%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLongTitle">
                List A Charger
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-start">
                    Charger Name
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Charger Station
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Latitude
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      name="Company_Name"
                      value={values.Company_Name}
                      onChange={handleChange}
                      placeholder="Charger Name"
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      placeholder="Charger Station"
                      name="Select_CPO"
                      
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    <input type="text" style={design} placeholder="latitude" name="GST_No"
                      
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="row mt-5 ">
                  <div className="col-md-4 d-flex justify-content-start">
                    Street
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Area
                  </div>
                  <div className="col-md-4 d-flex justify-content-start ">
                    State
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="Street" name="MID"
                      
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="Area" name="Address"
                      
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="state" name="Address"
                      
                      onChange={handleChange}/>
                  </div>
                  {/* <div className="col-md-4 d-flex justify-content-start design mt-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fleet"
                        id="flexRadioDefault1"
                      value={values.fleet}
                      onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Fleet
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Host"
                        id="flexRadioDefault1"
                       
                      value={values.Host}
                      onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Host
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Investor"
                        id="flexRadioDefault1"
                       
                      value={values.Investor}
                      onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Investor
                      </label>
                    </div>
                  </div> */}
                </div>

                <div className="row mt-5 ">
                  <div className="col-md-4 d-flex justify-content-start">
                    City
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Pincode
                  </div>
                  <div className="col-md-4 d-flex justify-content-start ">
                    Accesstype
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="City" name="MID"
                      
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="Pincode" name="Address"
                      
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="Accesstype" name="Address"
                      
                      onChange={handleChange}/>
                  </div>
                 
                </div>



                <div className="row mt-5 ">
                  <div className="col-md-4 d-flex justify-content-start">
                    Open and Close Time
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    OEM
                  </div>
                  <div className="col-md-4 d-flex justify-content-start ">
                    OCCP ID
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="Open and Close Time" name="MID"
                    
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="OEM"
                  >
                    <input type="text" style={design} placeholder="OEM" name="Address"
                      
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="OCCP ID" name="Address"
                    
                      onChange={handleChange}/>
                  </div>
                 
                </div>


                <div className="row mt-5 ">
                  <div className="col-md-4 d-flex justify-content-start">
                    Fixed Cost
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Demand Fee
                  </div>
                  <div className="col-md-4 d-flex justify-content-start ">
                    Ownership
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder=" Fixed Cost" name="MID"
                    
                      onChange={handleChange}/>
                  </div>
                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="OEM"
                  >
                    <input type="text" style={design} placeholder="Demand Fee" name="Address"
                      
                      onChange={handleChange}/>
                  </div>

                  <div
                    className="col-md-4 d-flex justify-content-start"
                    placeholder="Area"
                  >
                    <input type="text" style={design} placeholder="Ownership" name="Address"
                    
                      onChange={handleChange}/>
                  </div>
                 
                </div>

     
                <div className="row mt-5 ">
                  <div className="col-md-4 d-flex justify-content-start">
                    Number Of Connectors
                  </div>
                  

                  <div className="col-md-12 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="" name="MID"
                    
                      onChange={handleChange}/>
                  </div>
                 

                  
                 
                </div>












              </div>
              {/* <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mt-5">
                    <h3> Add Admin</h3>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Name
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Phone
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    Email
                  </div>

                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="Name" name="Admin_Name"
                      value={values.Admin_Name}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    <input type="text" style={design} placeholder="Number" name="Number"
                      value={values.Number}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    <input type="Email" style={design} placeholder="Email" name="Email"
                      value={values.Email}
                      onChange={handleChange}/>
                  </div>
                  <div className="col-md-4 mt-3 d-flex justify-content-start design">
                    <span> Assign Role</span>
                    <div
                      className="d-flex justify-content-end"
                      style={{ minWidth: "70%" }}
                    >
                      {" "}
                      <span
                        style={{
                          fontSize: "10px",
                          borderBottom: "1px solid black",
                        }}
                        type="button"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        {" "}
                        Add Role
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8"></div>
                  <div className="col-md-4 mb-5 d-flex justify-content-start design">
                    <input
                      type="Email"
                      style={design}
                      placeholder="Assign Role"
                      name="Assign_Role"
                      value={values.Assign_Role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <h3 className="mb-5">Charger Mapping</h3>
                <div
                  className="row pt-5 pb-5 "
                  style={{ border: "1px solid #f3f3f3" }}
                >
                  <div className="col-6">
                    <input
                      className="p-3"
                      type="text"
                      style={{ minWidth: "80%", border: "1px solid #f4f5f7" }}
                      placeholder="Search"
                      name="Search"
                     
                    />
                  </div>

                  <div className="col-2 d-flex align-items-center">
                    Select Price
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    Fixed Rent
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    Company Share
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                       
                        id="flexCheckDefault"
                        name="Select_Price"
                      value={values.Select_Price}
                      onChange={handleChange}
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        ABB_TestCharger
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="ABB_TestCharger"
                      id=""
                      style={{
                        maxWidth: "50%",
                        background: "#f4f5f7",
                        border: "none",
                      }}
                    
                      value={values.ABB_TestCharger}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="Fixed_Rent"
                      id=""
                      style={{
                        maxWidth: "50%",
                        background: "#f4f5f7",
                        border: "none",
                      }}
                     
                      value={values.Fixed_Rent}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      name="Company_Share"
                      id=""
                      style={{
                        maxWidth: "40%",
                        border: "none",
                        marginRight: "5px",
                        background: "#f4f5f7",
                      }}
                     
                      value={values.Company_Share}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="Company_Share2"
                      id=""
                      style={{
                        maxWidth: "40%",
                        border: "none",
                        background: "#f4f5f7",
                      }}
                      
                      value={values.Company_Share2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div> */}
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
        id="exampleModal123"
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
