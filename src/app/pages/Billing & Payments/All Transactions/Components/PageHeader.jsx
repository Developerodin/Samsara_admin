import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import { KTCard } from '../../../../../_metronic/helpers'

const PageHeader = () => {
  const navigate = useNavigate();
  const handelChargingSession=()=>{
    navigate("/billing/alltransaction/", {state:{_id:"akshay"}});
  }
  const handelUserPayments=()=>{
    navigate("/billing/userpayments/", {state:{_id:"akshay"}});
  }
  const handelComapnyPayments=()=>{
    navigate("/billing/companypayments/", {state:{_id:"akshay"}});
  }
  const handelRoamingRecon=()=>{
    navigate("/billing/roaming_recon/", {state:{_id:"akshay"}});
  }
  return (
  
    <Box sx={{padding:"10px"}}>
       <Box sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:"50%",xl:"40%"},display:"flex", justifyContent:"space-around"}}>
             <Button variant="contained" sx={{color:"#fff" , backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}} onClick={handelChargingSession} >Charging Sessions</Button>
             <Button variant="contained" sx={{color:"#fff" , backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}}  onClick={handelUserPayments} >User Payments</Button>
             <Button variant="contained"sx={{color:"#fff" , backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}} onClick={handelComapnyPayments} >Company Payments</Button>
             <Button variant="contained"sx={{color:"#fff" , backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}} onClick={handelRoamingRecon} >Roaming Recon</Button>
       </Box>
    </Box>
   
  )
}

export default PageHeader
