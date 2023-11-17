import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { useState,useEffect } from "react";
import { FriendList } from "./FriendList";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import axios from "axios";
import { BASE_URL } from "../../../../Config/BaseUrl";


export default function ChargerUpdate({id}) {

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
    FixedCost: "",
    demandFee: "",
    ownership: "",
    functional: false,
    companyname: "",
    selectPrice: "",
    onboardindDate: "",
    numberOfConnector: "",
    searchComapny: "",
    SelectComapny:"",
    cpoId:"64be3bdad27dbc99fe193cdc"
    // AddClient:""
  };
 
  const [initialValues, setInitialValues] = useState(initalValues);
  const [count, setCount] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

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
    },
  });

  useEffect(() => {
    // Fetch the initial values from the API
    const fetchInitialValues = async () => {
      try{
        const res = await axios.get(`${BASE_URL}/chargers/${id}`
        ,{ headers: { "Authorization": `${token}` } })

        console.log("in Charger Update === ==>",res)
    }
    catch(err){
       console.log("error in charger adding",err)
    }
    };
    fetchInitialValues();
  }, [id]);
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
      
    </div>
  );
}
