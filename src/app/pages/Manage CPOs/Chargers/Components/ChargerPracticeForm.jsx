



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
import { PracticeFormSchema } from './Schema';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ChargerPracticeForm = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues={
    firstname:"",
    lastname:"",
    email:"",
    password:""

  }

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema: PracticeFormSchema,
    onSubmit: (values,{resetForm}) => {
        console.log("🚀 ~ file: ChargerPracticeForm.jsx:38 ~ ChargerPracticeForm ~ values:", values);
        console.log("error",errors)
        resetForm();
    }
})

  return (
    <div>
      
      <IconButton color="primary" onClick={handleClickOpen} >
        <TuneIcon sx={{color:"white", backgroundColor:"crimson", fonstSize:"large", rotate:"90deg"}}/>
     </IconButton>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <Box sx={{display:"flex",justifyContent:"space-around", alignItems:"center"}}>

        <TuneIcon sx={{color:"white", backgroundColor:"crimson", fonstSize:"large", rotate:"90deg"}}/>
        <Typography sx={{color:"gray",marginTop:"5px", fontWeight:"bold"}}variant="subtitle1" component="subtitle1">CHARGER FILTER</Typography>
        <ReplayIcon sx={{color:"crimson", fonstSize:"large"}}/>
        </Box>

        <DialogContent >
            <Box width={"400px"}>
              <Box sx={{display:"flex",justifyContent:"space-between"}}>
              <TextField  
              name='firstname'
              label={errors.firstname && touched.firstname ? errors.firstname : "First Name"} 
              variant="outlined"  
              value={values.firstname} 
              onChange={handleChange} 
              onBlur={handleBlur}
              
              />

              <TextField  
              name='lastname'
              label={errors.lastname && touched.lastname ? errors.lastname : "last Name"} 
              variant="outlined" 
              value={values.lastname} 
              onChange={handleChange} 
              onBlur={handleBlur}/>
              </Box>

              <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"50px"}}>

              <TextField  
              name='email'
              label={errors.email && touched.email ? errors.email : "email"} 
              variant="outlined" 
              value={values.email} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <TextField  
              name='password'
              label={errors.password && touched.password ? errors.password : "password"} 
              variant="outlined" 
              value={values.password} 
              onChange={handleChange} 
              onBlur={handleBlur} />
              </Box>

            </Box>
          
        </DialogContent>
        <DialogActions>
         <Box sx={{width:"100%"}}>
         <Button  variant='contained'  sx={{backgroundColor:"crimson", width:"100%"}} onClick={handleSubmit}>Apply</Button>
         </Box>
          
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ChargerPracticeForm
