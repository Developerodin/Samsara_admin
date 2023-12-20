
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Divider, IconButton, Switch, TextField, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ReplayIcon from '@mui/icons-material/Replay';
import { useFormik } from 'formik';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddVehicle = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const initialValues={
    Vehicle:"",
    VehicleNum:"",
 
}

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
     initialValues:initialValues,
     onSubmit:(values,{resetForm}) => {
       console.log("🚀 ~ file: ChargerFilter.jsx:33 ~ ChargerFilter ~ values:", values)
        
       
       handleClose();
               
     }
  })

  return (
    <div>
      
      <IconButton sx={{color:"#000000" }} onClick={handleClickOpen} >
        <ElectricCarIcon sx={{ fonstSize:"large"}}/>
     </IconButton>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <Box sx={{display:"flex",justifyContent:"space-around", alignItems:"center"}}>

        
        <Typography sx={{color:"black",marginTop:"5px", fontWeight:"bold"}}variant="h5" component="subtitle1">Add Vehicle</Typography>
        
        </Box>

        <DialogContent >
            <Box width={"300px"}>

            

            
            <Box sx={{margin:"20px 5px"}}>
            <TextField  sx={{width:"100%"}} label="Vehicle" variant="outlined" name="Vehicle" onChange={handleChange} value={values.Vehicle}/>
             
             
            </Box>
         
            <Divider/>
            <Box sx={{margin:"20px 5px"}}>
            <TextField  sx={{width:"100%"}} label="Vehicle Number" variant="outlined" name="VehicleNum" onChange={handleChange} value={values.VehicleNum}/>
             
            </Box>
            </Box>
          
        </DialogContent>
        <DialogActions>
         <Box sx={{width:"100%"}}>
         <Button  variant='contained'  sx={{backgroundColor:"crimson", width:"100%","&:hover": { backgroundColor: "#E21818"}}} onClick={handleSubmit}>Submit</Button>
         </Box>
          
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddVehicle
