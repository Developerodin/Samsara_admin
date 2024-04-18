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
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"400px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    height:190,
    p: 4,
    borderRadius:"24px"
  };
export const TimeSlots = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [CustomSessions, setCustomSessions] = useState([]);
    const [filterRows,setFilterRows] = useState([])
    const [update,setupdate] = useState(0)
    const [zoomToken, setZoomToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = React.useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState({ timeRange: '' });
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) =>{
    const teacherValue =id;
//   const userValue = user._id
    // setCustomSessionData((prev) => ({
    //   ...prev,
    //   teacher: teacherValue,
    //   user: userValue,
    // }));
    console.log("Id =>",id)
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);

    const handelCustomSessionsAdd = ()=>{

    }
    const handleInputChange = (e) => {
        setNewTimeSlot({ ...newTimeSlot, [e.target.name]: e.target.value });
      };
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
       
    const fetchTimeSlots = async () => {
        try {
          const response = await axios.get(`${Base_url}api/custom_session/time-slots`);  // Assuming your backend API endpoint is '/api/time-slots'
          setTimeSlots(response.data);
        } catch (error) {
          console.error('Error fetching time slots:', error);
        }
      };
      const handleCreate = async () => {
        try {
          await axios.post(`${Base_url}api/custom_session/time-slots`, newTimeSlot);
          setNewTimeSlot({ timeRange: '' });
          fetchTimeSlots();
          handleClose() // Refresh time slots after creating a new one
        } catch (error) {
          console.error('Error creating time slot:', error);
        }
      };
    
      const handleDelete = async (id) => {
        try {
          await axios.delete(`${Base_url}api/custom_session/time-slots/${id}`);
          fetchTimeSlots(); // Refresh time slots after deleting one
        } catch (error) {
          console.error('Error deleting time slot:', error);
        }
      };

    useEffect(() => {
      // Fetch all classes when the component mounts
    //   getAllCustomSessions();
      fetchTimeSlots();
    }, [update]);

    // useEffect(() => {

    //     fetchTimeSlots();
    //   }, []);
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
        
             
              <Button onClick={handleOpen} variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                Add
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>
           
           <div style={{marginTop:50,display:"flex",justifyContent:'left',alignItems:"center",flexWrap:"wrap",gap:20}}>
            {
                timeSlots && timeSlots.map((el,index)=>{
                    return  <div key={index} style={{position:"relative",border:"1px solid grey",height:80,width:150,borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span>{el.timeRange}</span>

                    <div onClick={()=>handleDelete(el._id)} style={{position:"absolute",top:-3,right:-3}}>
                      <HighlightOffIcon style={{color:"red",fontSize:"24px"}}/>
                        </div>
                 </div>
                })
            }
               

           </div>

           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
              style={{ width: "100%" }}
        label="Time Range"
        type="text"
        name="timeRange"
        value={newTimeSlot.timeRange}
        onChange={handleInputChange}
       
      />
                  </Grid>
          
                 
             
                

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EA6C13",marginTop:"-20px" }}
                      onClick={()=>handleCreate()}
                      
                    >
                     Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
        
        </Box>
      </Modal>
    </div>
  )
}
