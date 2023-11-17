import { Box ,Button,Modal,Typography} from '@mui/material'
import {useState,useEffect,useContext} from 'react'
import UserContext from '../../../../Context/UserContext';
import axios from 'axios';
import { BASE_URL } from '../../../Config/BaseUrl';

import { GenralTabel } from '../../../TabelComponents/GenralTable';

const StationLogs = () => {
  const token =sessionStorage.getItem('token');
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height:"700px",
    overflow:"auto",
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    border: "none",
    p: 4,
  };
  const [data,setData]=useState([]);
  const {userData}=useContext(UserContext);
  const[StationData,setStationData]=useState([]);
  const[Rowdata,setRowData]=useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setData([])
    setOpen(false);

  }
  const addStringToState = () => {
    const fixedString = "[2023-07-26 10:15] DEBUG: Charger Status - Connected | Battery Level - 80% | Charging State - In Progress | Power Input - 5V | Charging Rate - 2.1A | Time Since Connected - 00:15:23 | Time Remaining - 01:45:12 | Temperature - 37°C | Voltage - 4.9V | Current - 1.9A | Device ID - ABC1234XYZ | Manufacturer - XYZ Corp. | Model - SuperCharge 2000 | Firmware Version - v2.5.3 | Serial Number - CHG98765432 | Health Status - Good | Last Maintenance - 2023-06-15 | Next Maintenance Due - 2024-01-15";
    setData(prevData => [...prevData, fixedString]);
  };

  const column=[
    {name:"Station Name"},
    {name: "Station Logs"}
   ]
  useEffect(() => {
    const interval = setInterval(() => {
      addStringToState();
    }, 2000);

    
    return () => clearInterval(interval);
  }, [])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/stations/stations`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        
        const data = response.data;
        // const ChargerData=data.data.chargers;
        console.log("response stations==>", data);
        const rows= data.map((item)=> ({
          "Name":<Button variant="outline" >{item.StationName}</Button>,
          "Logs":<Button variant="contained" onClick={()=>{handelLogClick()}}>Logs</Button>,
          
      }))
      setRowData(rows);
        setStationData(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    };
  
    // console.log("UserData", userData);
    fetchData();
  },[])

 
const handelLogClick=()=>{
  console.log("Clicked On Logs");
  handleOpen();
}

  
  return (
    <div>
      <GenralTabel rows={Rowdata} column={column}/>
     

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
          
          
            {
              data.map((el,index)=>{
                return <Typography style={{color:"green",marginTop:"20px",padding:"7px"}}>{el}</Typography>
              })
            }
    
         
        </Box>
      </Modal>
    </div>
  )
}

export default StationLogs
