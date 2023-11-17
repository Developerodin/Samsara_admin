
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Switch, TextField } from '@mui/material';
import { KTCard } from '../../../../../_metronic/helpers';
import { GenralTabel } from '../../../../TabelComponents/GenralTable';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import EvStationIcon from '@mui/icons-material/EvStation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextareaAutosize from '@mui/base/TextareaAutosize';
const column=[
    {name:"Name"},
    {name:"Type"},
    {name:"Pricing"},
    {name:"Date of Onboarding "}
]

const rows=[
    {name:"Intercharge",Type:"CPO",Pricing:"1x/unit",Date:"23/02/2023"},
    {name:"Intercharge",Type:"CPO",Pricing:"1x/unit",Date:"23/02/2023"},
    
]


const ChargerDetails = () => {
    const location=useLocation();
    console.log("🚀 ~ file: ChargerDetails.jsx:7 ~ ChargerDetails ~ location:", location.state)
    
    const [age, setAge] = React.useState('');
    const [connection, setconnection] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const navigate = useNavigate();

    const handelBack=()=>{
      console.log("back")
      navigate("/manage-cpos/chargers/");
    }





  return (
    <KTCard >
      <Box padding="10px" marginLeft="10px">
      <IconButton color="primary" aria-label="upload picture" component="label" onClick={handelBack} sx={{"&:hover": { backgroundColor: "none"}}}>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      <ArrowBackIosIcon fontSize='large' sx={{color:"crimson"}}/>
      </IconButton>
        </Box>
    <Box margin="30px">
        <Box display="flex" justifyContent="space-between" sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}}}>
            <Box sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}}}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant='h5' fontWeight="bold">Amasstech DC charger 67 <Switch  /></Typography>

        <Typography variant='h6' style={{color:"crimson"}}>Disconnected</Typography>
        
        </Box>
          

         <Box sx={{display:"flex", justifyContent:"space-between",marginTop:"20px"}}>
            <Box >
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Station Name: Amass Test Station Dc</Typography>
            <Typography  sx={{marginTop:"10px"}} variant='subtitle1'>Ownership: intercharge </Typography>
            </Box>
            <Box>
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Location: 28.4441N,77.0174E</Typography>
            <Typography sx={{marginTop:"10px"}} variant='subtitle1'>Access Type: public</Typography>
            </Box>
         </Box>
        
         <Box sx={{marginTop:"30px"}}>
         <Typography variant='h5'>Connectors</Typography>
         <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>

         <Box  display="flex">
            <Box sx={{width:"40px"}}>  <Box sx={{width:"30px",margin:"13px auto"}}> <EvStationIcon fontSize='large' sx={{color:"crimson"}}/></Box> </Box>
            <Box>
            <Typography sx={{marginTop:"10px"}} variant='subtitle2'>Power Rating:60</Typography>
            <Typography sx={{marginTop:"10px"}} variant='subtitle2'>Units Consumed:0.95 </Typography>
            </Box>
            
         </Box>
         
         <Box sx={{marginTop:"10px"}}>
            <Typography sx={{marginTop:"5px"}} variant='subtitle1'>Total Power Rating: 60</Typography>
            <Typography sx={{marginTop:"5px"}} variant='subtitle1'>Total Units Consumed: 0.95</Typography>
        </Box>

        </Box>

         </Box>


      </CardContent>
    
    </Card>
            </Box>

{/* ====================================================== */}

            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginTop:{xs:"100px",sm:"100px",md:"0px",lg:"0px",xl:"0px"}}}>
            <Card sx={{ minWidth: 275,padding:"0px" ,minHeight:"100%" }}>
      <CardContent padding="0px">
        <Typography variant='h5' fontWeight="bold">Stakeholder Information</Typography>
        <GenralTabel rows={rows} column={column}/>
          
      </CardContent>
     
    </Card>
            </Box>
        </Box>
     
{/* =================================================================================================== */}
<Box  paddingTop="20px" marginTop="50px" marginBottom="20px">

<Box display="flex"  justifyContent="space-between" sx={{alignItems:"center",width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginLeft:{xs:"none",sm:"none",md:"auto",lg:"auto",xl:"auto"}}}>

  <Box >

  <LocalizationProvider dateAdapter={AdapterDayjs} >
    
      <DatePicker label="From" />
   
    </LocalizationProvider>
    </Box>

    <Box >

<LocalizationProvider dateAdapter={AdapterDayjs} >
  
    
    <DatePicker label="To"/>
  </LocalizationProvider>
  </Box>

    <Box >
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Daily</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box >
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </Box>
 

    </Box>
</Box>

{/* =================================================================================================== */}
<Box display="flex" justifyContent="space-between" sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}}}>
            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"}}}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant='h5' fontWeight="bold">OCPP Commands</Typography>


          <Box marginTop="30px" display="flex" justifyContent="space-between">
            <Box >
            <Box>
            <Typography variant='subtitle2'>Clear Cach <ClearAllIcon sx={{color:"crimson"}}/></Typography>
            </Box>
            <Box sx={{marginTop:"20px"}}>
            
            <Typography variant='subtitle2'>Get Configration <SystemUpdateAltIcon sx={{color:"crimson"}}/></Typography>
            </Box>
            
            </Box>


            <Box >
              <Box>
              <Typography variant='subtitle2'>Reset Charger <RefreshIcon sx={{color:"crimson"}}/></Typography>
              </Box>
          
            <Box sx={{marginTop:"20px",display:"flex", alignItems:"center"}}>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Unlock Connector</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Unlock Connector"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      <LockOpenIcon sx={{color:"crimson"}}/>
    </Box>

            </Box>
          </Box>




<Box display="flex" justifyContent="space-between" marginTop="30px">
<TextField id="outlined-basic" label="Set Configuration" variant="outlined" />
<TextField id="outlined-basic" label="Enter Value" variant="outlined" />
<TextField id="outlined-basic" label="Enter URL" variant="outlined" />
</Box>

<Box marginTop="30px" display="flex" justifyContent="space-between">
  <Button variant="contained" sx={{backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}}>Configure</Button>
  <Button variant="contained" sx={{backgroundColor:"crimson","&:hover": { backgroundColor: "#E21818"}}}>Upgrade</Button>
</Box>

      </CardContent>
      
    </Card>
            </Box>

{/* ====================================================== */}

            <Box  sx={{width:{xs:"100%",sm:"100%",md:"48%",lg:"48%",xl:"48%"},marginTop:{xs:"100px",sm:"100px",md:"0px",lg:"0px",xl:"0px"}}}>
            <Card sx={{ minWidth: 275,padding:"0px" ,minHeight:"100%" }}>
      <CardContent>
      <Typography variant='h5' fontWeight="bold">Utilisation Summary</Typography>

      <TextareaAutosize
      aria-label="minimum height"
      minRows={10}
      placeholder="Summary....."
      style={{ width:"100%",marginTop:"20px"}}
    />
          
      </CardContent>
     
    </Card>
            </Box>

        </Box>
     
{/* =================================================================================================== */}






    </Box>
    </KTCard>
  )
}

export default ChargerDetails





