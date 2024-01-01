
import { Box, Button, Card, CardContent, CardHeader, Typography,InputAdornment } from '@mui/material'
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
import EditIcon from '@mui/icons-material/Edit';
import { AddCircle } from '@mui/icons-material';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const column = [
  {name:"Company Name"},
  { name: "Consult Person Name" },
  { name: "Email" },
  {name:"Mobile"},
  {name:"Designation"},
  {name:"Domain"},
  {name: "Employees"},
  {name: "GST"},
  {name:"Address"},
  {name: "Created At" },
  {name:"Status"},
  { name: "Update" },
  { name: "Delete" },
];

export const Company = () => {
  const navigate = useNavigate();

  const handelViewClick=()=>{
    navigate("/categories_view");
  }

  const handelAddCategorie=()=>{
    navigate("/add_categorie/")
  }
 const [rows,setRows]= useState([])
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update,setupdate] = useState(0)
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = React.useState('');
  
  const handleUpdateCompany =async(id)=>{

  }
  const getAllCompanies = async () => {
    try {
      // Get all companies
      const response = await axios.get(`${Base_url}api/company/companies`);
      if(response.status === 200) {
      setCompanies(response.data);
      const Data = response.data
      
      const formattedData = Data.map((item) => ({
        "Company Name":item.companyName,
        "Consult Person Name":item.consultPersonName,
       "Email":item.email,
       "Mobile":item.mobile,
       "Designation":item.designation,
       "Domain":item.domain,
       "Employees":item.numberOfEmployees,
       "Gst":item.numberOfEmployees,
       "Address":<span>{item.address},{item.pincode},{item.city},{item.country}</span>,
       "Created At":item.createdAt,
      "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
      //  "View":<RemoveRedEyeIcon />, 
     "Update": <BorderColorIcon onClick={() => handleUpdateCompany(item._id)} />,
     "Delete": <DeleteIcon  onClick={() => handleDelete(item._id)}/>,
     
   }));


   setRows(formattedData);
   setFilterRows(formattedData)
   setLoading(false);
      }
      
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleDelete = async (companyId) => {
    try {
      // Delete a company
      await axios.delete(`${Base_url}api/company/companies/${companyId}`);
      setupdate((prev)=>prev+1)
    } catch (error) {
      console.error('Error deleting company:', error);
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
    getAllCompanies()
  },[update])

 
  return (
   <Box >

       <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            {/* <Box>
            <Typography variant='h5' style={{fontWeight:600,letterSpacing:3}}>COMPANY</Typography>
            </Box> */}

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

            <Box>
              <Button variant='contained' startIcon={<AddCircle />} onClick={handelAddCategorie} style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}>Create new</Button>
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

