import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography,TextField } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import RemoveIcon from '@mui/icons-material/Remove';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useFormik } from 'formik';


export const SessionDrawer=(props)=>{
  const {user}=props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (
    //   event &&
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };

  const initialValues={
    Amount:"",
    Description:""

  }
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    onSubmit:(values,{resetForm}) => {
      console.log("🚀 ~ file: WalletModal.jsx:52 ~ WalletModel ~ values:", values)
      resetForm();
             
    }
  })



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 , padding:"10px"}}
      role="presentation"
      
    >


        <Box sx={{padding:"5px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6">Session Details</Typography>
         
            </Box>
          <Box sx={{margin:"20px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Booking id</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">9823325</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Status</Typography>
          <Typography sx={{color:"#00af06"}}variant="subtitle1" component="h2">Completed</Typography>
          
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">User Details</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">336699</Typography>
            </Box>
          </Box>
        </Box>
     <hr/>
      
      
        <Box sx={{padding:"5px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}} variant="h6" component="h6"> Details</Typography>
         
            </Box>

            <Box sx={{margin:"20px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Total Duration</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">0:37:30</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Start Date</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">2034-08-30</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Stop Date</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">2034-08-30</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Start Time</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">13:06:48</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Stop Time</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">13:44:18</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Start SOC</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2"></Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Stop SOC</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2"></Typography>
            </Box>
          </Box>

           
        </Box>

        <hr/>

        <Box sx={{padding:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{color:"crimson"}}variant="h6" component="h2">Pricing Information</Typography>
           
            </Box>

            <Box sx={{margin:"20px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Total Cost</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">52.16</Typography>
            </Box>
           
            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">CGST</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">3.98</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">SGST</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">3.98</Typography>
            </Box>
          </Box>
            

           

        </Box>


    </Box>
  );

  return (
    <div>
     
          <Button variant="text" onClick={toggleDrawer('right', true)}>{user}</Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
     
    </div>
  );
}
