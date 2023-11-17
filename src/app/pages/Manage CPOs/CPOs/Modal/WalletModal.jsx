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


export const WalletModel=(props)=>{
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


        <Box sx={{padding:"15px"}}>
        <Typography sx={{color:"#F16767"}}variant="h6" component="h2">COMPANY WALLET</Typography>
          <Box sx={{margin:"20px 0px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Company Name</Typography>
            <Typography sx={{color:"black"}}variant="subtitle1" component="h2">Townhall Fleet</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Company Pin</Typography>
          <Typography sx={{color:"black"}}variant="subtitle1" component="h2">147525</Typography>
            </Box>
          </Box>
        </Box>
     <hr/>
      
      
        <Box sx={{padding:"5px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{fontWeight:"bold"}} variant="h6" component="h2">Available Balance</Typography>
            <Typography variant="h6" component="h2">₹-90</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",margin:"20px 5px"}}>
            <TextField id="outlined-basic" label="Amount" variant="outlined" name="Amount" onChange={handleChange} value={values.Amount}/>
             <TextField id="filled-basic" label="Description" variant="outlined" name="Description" onChange={handleChange} value={values.Description}/>
            </Box>

            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                <Box sx={{display:"flex",width:"150px" , justifyContent:"space-evenly",marginTop:"20px",marginBottom:"20px"}}>
                <Button variant="contained" color="success" onClick={()=>setState({['right']: false })}>Add</Button>
                <Button variant="contained" color="error" onClick={()=>setState({['right']: false })}>Debit</Button>
                </Box>
           
            </Box>
        </Box>

        <hr/>

        <Box sx={{padding:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"#f4f5f7",padding:"10px",borderRadius:"10px"}}>
            <Typography sx={{fontWeight:"bold"}}variant="h6" component="h2">Payment History</Typography>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
            <RotateLeftIcon/>
            <AddRoadIcon/>
            <RemoveIcon/>
            </Box>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"15px",padding:"10px"}}>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">QQ</Typography>
             <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Debited by Gaurav Pandey</Typography>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">Fri feb 17 2023</Typography>
             </Box>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle1" component="h2"><CurrencyRupeeIcon sx={{fontSize:"small",color: "red" }} />190</Typography>
             </Box>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"15px",padding:"10px"}}>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">QA</Typography>
             <Typography sx={{color:"gray",fontWeight:"bold"}}variant="subtitle1" component="h2">Added by Gaurav Pandey</Typography>
             <Typography sx={{color:"gray"}}variant="subtitle2" component="h2">Fri feb 17 2023</Typography>
             </Box>
             <Box>
             <Typography sx={{color:"gray"}}variant="subtitle1" component="h2"><CurrencyRupeeIcon sx={{fontSize:"small",color: "green" }}  />100</Typography>
             </Box>
            </Box>

        </Box>


    </Box>
  );

  return (
    <div>
     
          <Button sx={{color:"black"}}onClick={toggleDrawer('right', true)}><AccountBalanceWalletIcon/></Button>
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
