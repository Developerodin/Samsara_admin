import React, { useEffect } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { useFormik } from "formik";
import { Checkbox } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../../Config/BaseUrl";
import axios from "axios";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserModal2 = (props) => {
  const { id } = props;
  const token =sessionStorage.getItem('token');
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cpo/users/${id}`
      ,{ headers: { "Authorization": `${token}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
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

  const initialValues = async ()=>{

    const userData = await fetchUserData();
    console.log(userData);
    if (userData) {
     
        // Assuming userData has properties like "name", "email", etc.
        return {
          Register_Name: userData.name,
          Brand_Name:userData.Brand_Name ,
          GST_No:userData.GST_No ,
          MID: userData.MID,
          Registered_Address:userData.Registered_Address,
          state:userData.state,
          regional: userData.regional,
          National:userData.National,
          Initial_Balance: userData.Initial_Balance,
          
          Number: userData.Number,
          Email: userData.email,
          ABB_TestCharger: userData.ABB_TestCharger,
          Select_Price: userData.Select_Price,
          Fixed_Rent: userData.Fixed_Rent,
          Company_Share: userData.Company_Share,
        
        
      }
        // Add more fields as needed
      
    }



    return {
      Register_Name: "Townhall",
      Brand_Name: "Townhall-1",
      GST_No: "45673GGh123456",
      MID: "2345432",
      Registered_Address:"216, Ganesh Marg, C-Block, Mahesh Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302015",
      state:"Rajasthan",
      regional: "true",
      National: "",
      Initial_Balance: "1000",
      Admin_Name: "Intercharge",
      Number: "+91 8875343434",
      Email: "intercharge@gmail.com",
      Assign_Role: "Admin",
      ABB_TestCharger: "3",
      Select_Price: "30,000",
      Fixed_Rent: "12,000",
      Company_Share: "none",
    
    
  }
  }

  

  const { values, errors, handleSubmit, handleChange, handelBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { resetForm }) => {
      console.log("🚀 ~ file: UserModal.jsx:27 ~ UserModal ~ values:", values);
      // try {
      //   // Send a PATCH request with the updated data
      //   await axios.patch(`/api/cpo/users/${id}`, values);
      //   console.log('User data updated successfully!');
      //   // You can perform any success actions here, like showing a success message
      // } catch (error) {
      //   console.error('Error updating user data:', error);
      //   // Handle the error and display an error message if needed
      // }
      resetForm();
    },
  });


  useEffect(()=>{
  console.log("id of cpo",id);
  
  },[])
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal31"
        style={{ border: "none", backgroundColor: "#fff" }}
      >
        <BorderColorIcon />
      </button>

      <div
        className="modal fade"
        id="exampleModal31"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ minWidth: "90%" }}
        >
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
                      name="Register_Name"
                      value={values.Register_Name}
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
                    <input
                      type="text"
                      style={design}
                      placeholder="GST NO"
                      name="GST_No"
                      value={values.GST_No}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 d-flex justify-content-start design">
                    <input
                      type="text"
                      style={design}
                      placeholder="Initial Balance"
                      name="Initial_Balance"
                      value={values.Initial_Balance}
                      onChange={handleChange}
                    />
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
                    <input
                      type="text"
                      style={design}
                      placeholder="MID"
                      name="MID"
                      value={values.MID}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className="col-md-3 d-flex justify-content-start"
                    placeholder="Select CPO"
                  >
                    <input
                      type="text"
                      style={design}
                      placeholder="Registered Address"
                      name="Registered_Address"
                      value={values.Registered_Address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      placeholder="State"
                      name="state"
                      value={initialValues.state}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3 d-flex justify-content-start design mt-5">
                    <div className="form-check d-flex align-items-center">
                      {/* <input
                        className="form-check-input"
                        type="radio"
                        name="regional"
                        id="flexRadioDefault1"
                      value={values.regional}
                      onChange={handleChange}
                      /> */}
                      <Checkbox {...label} defaultChecked />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ fontSize: "15px", marginRight: "5px" }}
                      >
                        Regional
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      {/* <input
                        className="form-check-input"
                        type="radio"
                        name="National"
                        id="flexRadioDefault1"
                       
                      value={values.National}
                      onChange={handleChange}
                      /> */}
                      <Checkbox {...label} />
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
                    <input
                      type="text"
                      style={design}
                      placeholder="Name"
                      name="Admin_Name"
                      value={values.Admin_Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-start">
                    <input
                      type="text"
                      style={design}
                      placeholder="Number"
                      name="Number"
                      value={values.Number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-start design">
                    <input
                      type="Email"
                      style={design}
                      placeholder="Email"
                      name="Email"
                      value={values.Email}
                      onChange={handleChange}
                    />
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
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
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
              <button
                type="button"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
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
                <div className="col-12" style={{ border: "1px solid #f9f9f9" }}>
                  <div className="row mb-3">
                    <div className="col-4 mt-2" style={{ color: "#d3d2d8" }}>
                      Select modules
                    </div>
                    <div
                      className="col-8 mt-2  d-flex justify-content-center"
                      style={{ color: "#d3d2d8" }}
                    >
                      Access Details
                    </div>
                  </div>
                  <div className="row pb-3" style={{ background: "#f4f5f7" }}>
                    {/* map */}
                    {module.map((self, index) => {
                      return (
                        <>
                          <div
                            key={index + 12}
                            className="col-4 mt-4 txt-center "
                          >
                            {self.name}
                          </div>
                          <div className="col-8 d-flex justify-content-center mt-4">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
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

export default UserModal2;
