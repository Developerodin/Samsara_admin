import { Autocomplete, Box, Button, Card, CardContent, TextField,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import { AddCircle } from '@mui/icons-material';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../../Config/BaseUrl';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const KJUR = require('jsrsasign')
const column=[
    {name:"Trainer"},
    {name:"User"},
    {name:"Schedule Date"},
    {name:"Schedule Time"},
    {name:"message"},
    {name:"Status"},
    {name:"Delete"},
    {name:"Action"}

    
  ]
export const CustomSessions = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [CustomSessions, setCustomSessions] = useState([]);
    const [filterRows,setFilterRows] = useState([])
    const [update,setupdate] = useState(0)
    const [zoomToken, setZoomToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = React.useState('');
    const handelCustomSessionsAdd = ()=>{

    }
  
    const handelDeleteSessions=async(id)=>{
      console.log("delete Customer",id)
     
      try {
        const res = await axios.delete(`${Base_url}api/custom_session/${id}`, {
          // headers: { "Authorization": `${token}` }
        });
        console.log("res Customer delete === ==>", res);
        setupdate((prev)=>prev+1)
      } catch (err) {
        console.log("error in Customer delete", err);
      }
    }
    const handleApprove = async (sessionId) => {
        try {
          const response = await axios.put(`${Base_url}api/custom_session/approve/${sessionId}`);
    
          // Assuming your backend returns the updated session data
          const updatedSession = response.data;
          setupdate((prev)=>prev+1)
          // Handle the updated session data as needed
          console.log('Updated Session:', updatedSession);
    
          // Optionally, you can trigger a UI update or perform other actions here
        } catch (error) {
          console.error('Error:', error.message);
          // Handle error, show a message to the user, etc.
        }
      };

    const getAllCustomSessions = async () => {
      try {
        const response = await axios.get(`${Base_url}api/custom_session`); // Update the API endpoint accordingly
        setCustomSessions(response.data);
        const Data = response.data
        console.log("Data Class DAta in if  : ",response)
        if(Data){
        
            const formattedData = Data.map((item) => ({

           "Teacher":item.teacher ? item.teacher.name : "no teacher assigned",
           "User":item.user ? item.user.name : "no user assigned",
           "Date":item.date,
           "Time":item.time,
           "message":item.message,
          "Status":item.approved ? <Button color='success' variant="contained" >Approved</Button> : <Button color='error' variant="contained">Pending</Button>,
         "Delete": <DeleteIcon  onClick={() => handelDeleteSessions(item._id)}/>,
          "Action":item.approved ? <Button color='error' variant="contained" onClick={()=>handleApprove(item._id)} >Un approve</Button> : <Button color='success' variant="contained" onClick={()=>handleApprove(item._id)} >Approve</Button>
       }));

  
        // console.log("Formated DAta ==>",formattedData)
  
       setRows(formattedData);
       setFilterRows(formattedData);
     
      
      
        }
      } catch (error) {
        console.error('Error fetching classes:', error.message);
      }
    };


    const handleSearch = () => {
      const filteredData = rows.filter((row) =>
        Object.values(row)
          .filter((value) => typeof value === 'string') // Filter only string values
          .some((value) =>
            value.toLowerCase().includes(searchInput.toLowerCase())
          )
      );
      setFilterRows(filteredData);
    };
    const handleResetFilter = () => {
      setSearchInput('');
      setFilterRows(rows);
    };
       

  

    useEffect(() => {
      // Fetch all classes when the component mounts
      getAllCustomSessions();
    }, [update]);
  return (
    <div>
      <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <Card>
        <CardContent>
          {/* <Box>
            <p>current active metting:{meetingNumberMain}</p>
          </Box> */}
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
           

          <Box sx={{marginTop:"30px",display:"flex",alignItems:"center"}}>
      <Box>
        <Box sx={{display:"flex", width:"100%"}}>
            {/* <TextField fullWidth label="Search" /> */}
            
            <TextField
          label="Search"
          id="outlined-start-adornment"
          size='small'
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
          value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
        />
            </Box>
        </Box>
  
        <Button  sx={{marginLeft:"20px"}} variant="contained" onClick={handleSearch}> Search</Button>
        <Button sx={{marginLeft:"20px"}} variant="outlined" onClick={handleResetFilter}> <FilterAltIcon sx={{marginRight:"10px"}} />Reset Filter</Button>
      </Box>

            <Box >
        
             
              <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                <TuneIcon />
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>


       <Box style={{marginTop:"-2px"}}>
       
          <GenralTabel column={column} rows={filterRows} />
        
       </Box>
    </div>
  )
}
