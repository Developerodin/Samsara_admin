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
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const EditBooking = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const initialValues={
  BookingID:"",
  ChargerName:"",
  StartTimestamp:"",
  EndTimestamp:"",
  Price:"",
  Units:"",
  Status:""

 
}

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
     initialValues:initialValues,
     onSubmit:(values,{resetForm}) => {
       console.log("🚀 ~ file: ChargerFilter.jsx:33 ~ ChargerFilter ~ values:", values)
        
       
       handleClose();
               
     }
  })

  return (
    <Box >
      
      <IconButton sx={{color:"#000000" }} onClick={handleClickOpen} >
       
        <DriveFileRenameOutlineIcon fonstSize="large"/>
     </IconButton>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
        
        <Box sx={{display:"flex",justifyContent:"space-around", alignItems:"center"}} >

        <Typography sx={{color:"Black",marginTop:"5px", fontWeight:"bold"}}variant="h5" component="h5">Edit Booking Details</Typography>
     
        </Box>

        <DialogContent >
            <Box width={"100%"} >

            <Box  marginTop={"10px"}>
            <TextField id="outlined-basic" sx={{width:"100%",marginBottom:"20px"}} label="Booking ID" variant="outlined" name="BookingID" onChange={handleChange} value={values.BookingID}/>
             <TextField id="filled-basic" sx={{width:"100%"}} label="Charger Name" variant="outlined" name="ChargerName" onChange={handleChange} value={values.ChargerName}/>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"20px"}>
            <TextField id="outlined-basic" sx={{width:"45%"}} label="Start Timestamp" variant="outlined" name="StartTimestamp" onChange={handleChange} value={values.StartTimestamp}/>
            <TextField id="outlined-basic" sx={{width:"45%"}} label="End Timestamp" variant="outlined" name="EndTimestamp" onChange={handleChange} value={values.EndTimestamp}/>
             
            </Box>
            <Divider/>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"20px"}>
            <TextField id="outlined-basic" sx={{width:"45%"}} label="Price" variant="outlined" name="Price" onChange={handleChange} value={values.Price}/>
            <TextField id="outlined-basic" sx={{width:"45%"}} label="Units" variant="outlined" name="Units" onChange={handleChange} value={values.Units}/>
            </Box>

            <Divider/>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"20px"}>
            
            <TextField id="outlined-basic" sx={{width:"100%",marginBottom:"20px"}} label="Status" variant="outlined" name="Status" onChange={handleChange} value={values.Status}/>
            
            </Box>
            <Divider/>

            </Box>
          
        </DialogContent>
        <DialogActions>
         <Box sx={{display:"flex",msFlexDirection:"end"}}>
         <Button  variant='contained'  sx={{backgroundColor:"crimson", width:"100%","&:hover": { backgroundColor: "#E21818"}}} onClick={handleSubmit}>Submit</Button>
         </Box>
          
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default EditBooking
