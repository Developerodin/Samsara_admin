import { Box, Button, Card, CardContent, CardHeader, Typography,Switch,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { AddCircle } from '@mui/icons-material';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const column = [
 
  { name: "Name" },
  {name: "Email"},
  {name: "Mobile No"},
  {name:"Address"},
  {name:"City"},
  { name: "Status" },
  { name: "Active" },
  {name:"View"},
  { name: "Update" },
  { name: "Delete" },
];

export const Trainers = () => {

  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [update, setupdate] = useState(0);
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = React.useState('');
 

  const handelViewClick=()=>{
    navigate("/trainer_view");
  }

  const handelAddNew=()=>{
    navigate("/add_trainer");
  }

  const updateFunctionalStatus=async(checked,id)=>{
    // const values={
    //   customerId:id,
    //   functionalStatus:checked
    // }
    // try {
    //   const res = await axios.post(`${BASE_URL}/customers/update-functional`, values, {
    //     headers: { "Authorization": `${token}` }
    //   });
    //   console.log("res charger status updated === ==>", res);
    // } catch (err) {
    //   console.log("error in charger adding", err);
    // }
    // setupdate((prev)=>prev+1); 
  }

  const handleUpdateCustomerOpen=(id)=>{
    console.log("Customer Update  Open");
    // getCustomerById(id);
    // handleOpen();
  }

  const handelDeleteCustomer=async(id)=>{
    console.log("delete Customer",id)
    try {
      const res = await axios.delete(`${Base_url}api/teacher/${id}`, {
        // headers: { "Authorization": `${token}` }
      });
      console.log("res Customer delete === ==>", res);
      setupdate((prev)=>prev+1)
    } catch (err) {
      console.log("error in Customer delete", err);
    }
  }
  
  const handleSwitchChange=async(event,id)=>{
    const checked = event.target.checked;
    console.log("Check sttaus===>",checked,id)
    // try {
    //   await updateFunctionalStatus( checked,id);
    // } catch (err) {
    //   console.log("Error updating functional status", err);
    // }
  }

  const handelTrainerView = (id)=>{
    navigate(`trainer_view/${id}`)
  }

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/teacher`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.teachers
      console.log("Trainer Data ==>",Data)
      if(Data){
      
          const formattedData = Data.map((item) => ({
         "Name":item.name,
         "Email":item.email,
         "Phone":item.mobile,
        "Address":item.Address,
        "City":item.city,
         "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
         // "Wallet":<Button sx={{color:"black"}}onClick={()=>handelWalletClick(item._id,item)}><AccountBalanceWalletIcon/></Button>,
     
         "Active":<Switch checked={item.status}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
         "View":<RemoveRedEyeIcon onClick={()=>handelTrainerView(item._id)}/>,
         // "Functional":<Switch checked={item.functional}  onChange={(e)=>handleSwitchChange(e,item._id)} />,
         
       Update: <BorderColorIcon onClick={() => handleUpdateCustomerOpen(item._id)} />,
       Delete: <DeleteIcon  onClick={() => handelDeleteCustomer(item._id)}/>
     }));


     setRows(formattedData);
     setFilterRows(formattedData);

    
    
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
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
  useEffect(()=>{
    fetchTeachers();
  },[update])
  
  return (
   <Box >

       <Card>
        <CardContent>
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
          onClick={handelAddNew}
        >
          Add Trainer
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
   </Box>
  )
}

