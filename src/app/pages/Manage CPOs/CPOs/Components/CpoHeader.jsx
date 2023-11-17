import React, { useState } from 'react'
import { KTCard } from '../../../../../_metronic/helpers'
import { styled } from '@mui/system';
import { Box, Button, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import ChargerFilter from './ChargerFilter';
import ChargerPracticeForm from './ChargerPracticeForm';
import UserModal from '../ClientComponents/UserModal';
import ChargeList from '../ClientComponents/ChargeList';

const MyBox = styled('Button')({
    width:'100%',
    color: '#fff',
    backgroundColor: '#009ef7',
    padding: 8,
    borderRadius: 4,
    border:"none",
    fontWeight: 'bold'
  });



const CpoHeader = ({state,AcFunc,DcFun,AllFunc,DcLength,AcLength,handleSearchInputChange,searchInput}) => {


  return (
    <KTCard>
        <Box    justifyContent={"space-between"} p={"10px"} display='flex' sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex",xl:"flex"}, alignItems:"center"}} >

            <Box display={'flex'}   justifyContent={"space-evenly"} alignItems={"center"} sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"45%"}}}>
        
            <Box  sx={{display:"flex", width:"20%"}}>

<MyBox onClick={AllFunc}>
  ALL
</MyBox>

{/* <Box sx={{ marginLeft:"10px"}}>
<Typography sx={{color:"gray",marginTop:"5px"}}variant="h5" component="h3"></Typography>
</Box> */}

</Box>
        
            <Box  sx={{display:"flex", width:"20%"}}>

            <MyBox onClick={AcFunc}>
              AC ({AcLength})
            </MyBox>

            {/* <Box sx={{ marginLeft:"10px"}}>
            <Typography sx={{color:"gray",marginTop:"5px"}}variant="h5" component="h3"></Typography>
            </Box> */}
            
            </Box>


            <Box sx={{display:"flex",  width:"20%"}}>
            <MyBox onClick={DcFun}>DC  ({DcLength})
          
            </MyBox>

            {/* <Box sx={{ marginLeft:"10px"}}>
            <Typography sx={{color:"gray",marginTop:"5px"}}variant="h5" component="h3"></Typography>
            </Box> */}
            
            </Box>

            {/* <Box sx={{display:{xs:"none",md:"flex",lg:"flex",xl:"flex"},  width:"20%"}} >

            <Button sx={{backgroundColor:"#259300","&:hover": { backgroundColor: "#1b6802"}}}   variant="contained" >Active</Button>
            <Button  sx={{backgroundColor:"gray","&:hover": { backgroundColor: "#259300"}}} variant="contained" >InActive</Button>
            </Box> */}
            
            </Box>
            
            {/* ===================================================================== */}
            

            <Box display={'flex'}   justifyContent={"space-evenly"} alignItems={"center"} sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"45%"}}}>

            <Box sx={{display:"flex", width:"40%"}}>
            {/* <TextField fullWidth label="Search" /> */}
            
            <TextField
         label="Search"
         id="outlined-start-adornment"
         size='small'
         sx={{ m: 1, width: '100%' }}
         InputProps={{
           startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
         }}
         onChange={handleSearchInputChange}
        value={searchInput}
        />
            </Box>


            <Box sx={{display:"flex", alignItems:"center",width:"40%",justifyContent:"space-evenly"}}>

                <ChargerFilter/>
               
            
            
                {/* <IconButton aria-label="Download" color="primary">
                <CloudDownloadIcon  fontSize='large'/> 
                 </IconButton> */}
           
                 <Box sx={{ marginLeft:"10px", display:'flex', alignItems:"center"}}>
            <Typography sx={{color:"gray",marginTop:"5px",display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"}}}variant="subtitle1" component="h6">Add Charger</Typography>
            <IconButton  ><ChargeList setUpdate={state}/></IconButton>
           
            </Box>
            </Box>

            
            
            </Box>




           
        </Box>
        </KTCard>
    
  )
}

export default CpoHeader
