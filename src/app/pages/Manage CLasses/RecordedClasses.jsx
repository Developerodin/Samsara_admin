import { Autocomplete, Box, Button, Card, CardContent, TextField } from '@mui/material'
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
const KJUR = require('jsrsasign')
const column=[
    {name:"Title"},
    {name:"Teacher"},
    {name:"Schedule Date"},
    {name:"Teacher Phone Number"},
    {name:"Total Students Joined"},
    {name:"Recordings"},
    {name:"Status"},
    {name:"View"},
    {name:"Update"},
    {name:"Delete"},
    {name:"Meeting"}
    
  ]
export const RecordedClasses = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [classes, setClasses] = useState([]);
    const [filterRows,setFilterRows] = useState([])
    const [update,setupdate] = useState(0)
    const [zoomToken, setZoomToken] = useState(null);
  const [loading, setLoading] = useState(true);

    const handelClassView = (id)=>{
      navigate(`class_view/${id}`)
    }

    const handelClassAdd = ()=>{
      navigate(`add_class/`)
    }

    const handleUpdateClassOpen=(id)=>{
      console.log("Customer Update  Open");
      // getCustomerById(id);
      // handleOpen();
    }
  
    const handelDeleteClass=async(id)=>{
      console.log("delete Customer",id)
     
      try {
        const res = await axios.delete(`${Base_url}api/classes/${id}`, {
          // headers: { "Authorization": `${token}` }
        });
        console.log("res Customer delete === ==>", res);
        setupdate((prev)=>prev+1)
      } catch (err) {
        console.log("error in Customer delete", err);
      }
    }
  

    const getAllClasses = async () => {
      try {
        const response = await axios.get(`${Base_url}api/custom_session`); // Update the API endpoint accordingly
        setClasses(response.data.data);
        const Data = response.data.data
        if(Data){
         console.log("Data Class DAta in if  : ",Data)
      //       const formattedData = Data.map((item) => ({
      //       "Title":item.title,
      //      "Teacher":item.teacher ? item.teacher.name : "no teacher assigned",
      //      "Date":item.schedule,
      //      "Phone":item.teacher ? item.teacher.mobile : "no teacher assigned",
      //     "Students":item.students.length,
      //     "Recordings":"coming soon",
      //     "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
      //      "View":<RemoveRedEyeIcon onClick={()=>handelClassView(item._id)}/>, 
      //    "Update": <BorderColorIcon onClick={() => handleUpdateClassOpen(item._id)} />,
      //    "Delete": <DeleteIcon  onClick={() => handelDeleteClass(item._id)}/>,
      //    "Meeting":<Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          
      //     <Button variant='contained' onClick={()=>handelMeetingStart(item,item._id)}>Start</Button>

      //     {
      //       item.meeting_number && <Button variant='contained' style={{marginLeft:"20px"}} onClick={()=>{handelZoomMeeting(Data)}}>Join</Button>
      //     }
          
      // </Box>
      //  }));

  
        // console.log("Formated DAta ==>",formattedData)
  
      //  setRows(formattedData);
      //  setFilterRows(formattedData);
     
      
      
        }
      } catch (error) {
        console.error('Error fetching classes:', error.message);
      }
    };

  

    useEffect(() => {
      // Fetch all classes when the component mounts
      getAllClasses();
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
           

            <Box style={{width:"30%"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </Box>

            <Box >
            <Button
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}
          startIcon={<AddCircle />}
          onClick={handelClassAdd}
        >
          Add new recording
        </Button>
             
              <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                <TuneIcon />
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>


       <Box style={{marginTop:"-2px"}}>
       
          <GenralTabel column={column} rows={rows} />
        
       </Box>
    </div>
  )
}
