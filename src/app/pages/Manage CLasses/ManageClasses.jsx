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
export const ManageClasses = () => {
  const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [classes, setClasses] = useState([]);
    const [filterRows,setFilterRows] = useState([])
    const [update,setupdate] = useState(0)
    const [zoomToken, setZoomToken] = useState(null);
  const [loading, setLoading] = useState(true);
const[ShowVideo,setShowVideo] = useState(false)
const [userToken, setUserToken] = useState(null);
const [OauthuserToken, setOauthUserToken] = useState(null);
const [meetingNumberMain, setMeetingNumber] = useState(null);
const [meetingPassowrdMain, setMeetingPassword] = useState(null);
const [searchInput, setSearchInput] = React.useState('');
const client = ZoomMtgEmbedded.createClient();
var authEndpoint = Base_url
var sdkKey = 'TsFvuPFLTeKf7_bNBWggPA'
var meetingNumber =meetingNumberMain
var passWord = meetingPassowrdMain
var role = 1
var userName = 'Akshay'
var userEmail = 'developer@theodin.in'
var registrantToken = ''
var zakToken = userToken
var leaveUrl = 'http://localhost:3000'
var userId="developer@theodin.in"
var SECRET="C7Dm4JuZ2QXoN0bM2OYTw5JxZvjPK1y9"

// function getSignature(e) {
//   const iat = Math.round(new Date().getTime() / 1000) - 30
//   const exp = iat + 60 * 60 * 2
//   const oHeader = { alg: 'HS256', typ: 'JWT' }

//   const oPayload = {
//     sdkKey: sdkKey,
//     appKey: sdkKey,
//     mn: meetingNumber,
//     role: role,
//     iat: iat,
//     exp: exp,
//     tokenExp: exp,
//     userId: userId,
//   }

//   const sHeader = JSON.stringify(oHeader)
//   const sPayload = JSON.stringify(oPayload)
//   const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, SECRET);
//   setTimeout(()=>{
//     startMeeting(sdkJWT)
//   },1000)
  
//   return sdkJWT
// }

// function startMeeting(signature) {

//   let meetingSDKElement = document.getElementById('meetingSDKElement');

//   client.init({zoomAppRoot: meetingSDKElement, language: 'en-US',
//   customize: {
//     video: {
//       isResizable: true,
//       viewSizes: {
//         default: {
//           width: 1300,
//           height: 600
//         },
//         ribbon: {
//           width: 700,
//           height: 700,
//         }
//       }
//     }
//   }

// }).then(() => {
//     client.join({
//       signature: signature,
//       sdkKey: sdkKey,
//       meetingNumber: meetingNumber,
//       password: passWord,
//       userName: userId,
//       userEmail: userEmail,
//       tk: registrantToken,
//       zak: zakToken,
      
//     }).then((res) => {
//       console.log('joined succesfully',res);
//       setShowVideo(true);
//     }).catch((error) => {
//       console.log(error)
//     })
//   }).catch((error) => {
//     console.log(error)
//   })
// }

const fetchZoomToken = async () => {
  try {
    // Redirect the user to the Zoom authorization URL
    window.location.href = `${Base_url}api/zoom/getZoomToken`;
  } catch (error) {
    console.error('Error redirecting to Zoom authorization URL:', error);
  }
};

const HandelOuth = ()=>{
  fetchZoomToken().then((res)=>{
      console.log("Res form zoom token",res)
  })
}

const createZoomMeeting = async (OauthToken,Data) => {
  try {
      
      const data = {
          token: OauthToken,
          data: Data
        };
    const response = await fetch(`${Base_url}api/zoom/createZoomMeeting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      setMeetingNumber(data.meetingNumber);
      setMeetingPassword(data.password);
      handleCreateMeeting(data.meetingNumber,data.password)
      const MeetingData ={
       number:data.meetingNumber,
       pass:data.password
      }
      setupdate((prev)=>prev+1)
      // setZoomMeetingNumber(MeetingData);
      console.log('Meeting Number:', data.meetingNumber);
    } else {
      console.error('Failed to create meeting:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error creating meeting:', error.message);
  }
};

const handleOuthAccessToken = async () => {
  // Extract the authorization code from the URL query parameters
  // const urlParams = new URLSearchParams(window.location.search);
  // const code = urlParams.get('code');
  //  console.log("Code ===> " + code)
  // if (code) {
    try {
      // Make a request to your backend to exchange the authorization code for an access token
      const tokenResponse = await axios.get(`${Base_url}api/zoom/zoom/oauth-token`);
      if (tokenResponse.data.access_token) {
        const token = tokenResponse.data.access_token
          setOauthUserToken(tokenResponse.data.access_token);
          
            fetchZoomTokenServerOauth(tokenResponse.data.access_token);
           return token
         
      } else {
        console.error('Failed to fetch Zoom token:', tokenResponse.data.error);
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  // } else {
  //   console.error('Authorization code not found in URL parameters.');
  // }
};

const fetchZoomTokenServerOauth = async (token) => {
  try {
    // Replace 'YOUR_NODE_API_URL' with the actual URL where your Node.js API is running
    const apiUrl = `${Base_url}api/zoom/fetchZoomToken`;
      console.log('Token',OauthuserToken)
    // Make the API request
    const response = await axios.post(apiUrl, {
      AccessTokenMain: token,
    });
      
    // Parse and set the Zoom token
    setUserToken(response.data.token);
  } catch (error) {
    // Handle errors
    console.error('Error fetching Zoom token:', error);
  } finally {
    // Set loading state to false
    setLoading(false);
  }
};


const handleCreateMeeting = async (id,pass) => {
  const meetingData = {
    meetingName: 'Example Meeting',
    title: 'Meeting Title',
    duration: 60,
    meetingId: id,
    meetingPassword: pass,
    hostName: 'Admin User',
    teacherName: 'Teacher Name',
  };

  try {
    const response = await axios.post(`${Base_url}api/meeting`, meetingData);

    if (response.status === 201) {
      // Meeting created successfully
      console.log('Meeting created successfully');
      setupdate((prev)=>prev+1)
    } else {
      // Handle error
      console.error('Failed to create meeting');
    }
  } catch (error) {
    console.error('Error creating meeting:', error);
  }
};

useEffect(() => {
  const handleZoomCallback = async () => {
      // Extract the authorization code from the URL query parameters
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
       console.log("Code ===> " + code)
      if (code) {
        try {
          // Make a request to your backend to exchange the authorization code for an access token
          const tokenResponse = await axios.get(`${Base_url}api/zoom/zoom/callback?code=${code}`);
          console.log("I am in if ")
          if (tokenResponse.data.userToken) {
            setUserToken(tokenResponse.data.userToken);
          } else {
            console.error('Failed to fetch Zoom token:', tokenResponse.data.error);
          }
        } catch (error) {
          console.error('Error exchanging code for token:', error);
        }
      } else {
        console.error('Authorization code not found in URL parameters.');
      }
    };

    handleZoomCallback();
}, []);
    const handelClassView = (id)=>{
      navigate(`class_view/${id}`)
    }

    const handelClassAdd = ()=>{
      navigate(`add_class/`)
    }

    const handleUpdateClassOpen=(id)=>{
      navigate(`class_update/${id}`)
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
   
    const handelMeetingStart=async(Data,id)=>{
      console.log("Meeting start =>",id)
      handleOuthAccessToken().then((res)=>{
        console.log("Token in fun ==>",res)
        setZoomToken(res)
        createZoomMeeting(res,Data,id);
      })
    }

    const handelZoomMeeting = (Data)=>{
    
      const data =Data
      console.log("Data===>",data)
      const ZoomMeetingNumber={
      number:data.meeting_number,
      pass:data.password,
      userToken:userToken
      }
      navigate(`zoom-meeting/`, { state: { ZoomMeetingNumber } });
    }

    const handelZoomMeetingEnd=async(id)=>{
      console.log("delete Meeting",OauthuserToken,"Id===============>",meetingNumberMain)
      const data = {
        token: OauthuserToken,
        meetingId:meetingNumberMain
      };
      try {
        const res = await axios.post(`${Base_url}api/classes/end_meeting/${id}`,data, {
          // headers: { "Authorization": `${token}` }
        });
        console.log("res Customer delete === ==>", res);
        if(res){ 
          alert("Meeting Ended successfully")
          setupdate((prev)=>prev+1)
        }
      
      } catch (err) {
        console.log("error in Customer delete", err);
      }
    }

    const getAllClasses = async () => {
      try {
        const response = await axios.get(`${Base_url}api/classes`); // Update the API endpoint accordingly
        setClasses(response.data.data);
        const Data = response.data.data
        if(Data){
        //  console.log("Data Class DAta in if  : ",Data)
            const formattedData = Data.map((item) => ({
            "Title":item.title,
           "Teacher":item.teacher ? item.teacher.name : "no teacher assigned",
           "Date":item.schedule,
           "Phone":item.teacher ? item.teacher.mobile : "no teacher assigned",
          "Students":item.students.length,
          "Recordings":"coming soon",
          "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
           "View":<RemoveRedEyeIcon onClick={()=>handelClassView(item._id)}/>, 
         "Update": <BorderColorIcon onClick={() => handleUpdateClassOpen(item._id)} />,
         "Delete": <DeleteIcon  onClick={() => handelDeleteClass(item._id)}/>,
         "Meeting":<Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          
          <Button variant='contained' onClick={()=>handelMeetingStart(item,item._id)}>Start</Button>

          {
            item.meeting_number && <Button variant='contained' style={{marginLeft:"20px"}} onClick={()=>{handelZoomMeeting(item)}}>Join</Button>
            
          }
          {
            item.meeting_number && <Button variant='contained' style={{marginLeft:"20px"}} onClick={()=>{handelZoomMeetingEnd(item._id)}}>End</Button>
            
          }
          
      </Box>
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
          Create new class
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
