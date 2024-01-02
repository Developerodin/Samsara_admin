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
    {name:"Recording"},
    {name:"Title"},
    {name:"Teacher"},
    {name:"Date"},
    {name:"Description"},
    {name:"Status"},
    {name:"Update"},
    {name:"Delete"},
    {name:"Action"}
    
  ]
export const RecordedClasses = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [classes, setClasses] = useState([]);
    const [filterRows,setFilterRows] = useState([])
    const [update,setupdate] = useState(0)
    const [zoomToken, setZoomToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = React.useState('');

    const handelClassView = (id)=>{
      navigate(`class_view/${id}`)
    }

    const handelClassAdd = ()=>{
      navigate(`add_class_recording/`)
    }

    const handleUpdateClassOpen=(id)=>{
      navigate(`update/${id}`)
    }
  
    const handelDeleteClass=async(id)=>{
      console.log("delete Customer",id)
     
      try {
        const res = await axios.delete(`${Base_url}api/recorded-classes/${id}`, {
          // headers: { "Authorization": `${token}` }
        });
        console.log("res Customer delete === ==>", res);
        setupdate((prev)=>prev+1)
      } catch (err) {
        console.log("error in Customer delete", err);
      }
    }
  
    const handleStatusChange = async (Id,value) => {
      try {
        const response = await axios.patch(`${Base_url}api/recorded-classes/${Id}/update-status`,{
          status: value
        });
  
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

    const getAllClasses = async () => {
      try {
        const response = await axios.get(`${Base_url}api/recorded-classes`); // Update the API endpoint accordingly
        setClasses(response.data.data);
        const Data = response.data;
        console.log("REdorder classes",Data)
        if(Data){
         console.log("Data Class DAta in if  : ",Data)
            const formattedData = Data.map((item) => ({
              "Recording": <div>
              <iframe
                title={item.title}
                className='embed-responsive-item rounded h-100px w-200px'
                src={item.classRecordingLink}
                allowFullScreen={true}
               
              />
            </div>,
            "Title":item.title,
           "Teacher":item.teacher ? item.teacher.name : "no teacher assigned",
           "Date":item.createdAt,
           "Description":item.description,
          "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
         "Update": <BorderColorIcon onClick={() => handleUpdateClassOpen(item._id)} />,
         "Delete": <DeleteIcon  onClick={() => handelDeleteClass(item._id)}/>,
         "Action":item.status ? <Button color='error' variant="contained" onClick={()=>handleStatusChange(item._id,false)} >Hide</Button> : <Button color='success' variant="contained" onClick={()=>handleStatusChange(item._id,true)} >Show</Button>
      
       }));

  
        console.log("Formated DAta ==>",formattedData)
  
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
       
          <GenralTabel column={column} rows={filterRows} />
        
       </Box>
    </div>
  )
}
