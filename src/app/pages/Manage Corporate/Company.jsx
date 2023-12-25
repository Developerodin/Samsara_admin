
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
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
const column = [
  {name:"Company Id"},
  { name: "Owner" },
  { name: "Company Name" },
  {name:"Mobile Number"},
  {name: "Employees"},
  { name: "Created At" },
  {name:"City"},
  {name:"Status"},
  {name:"View"},
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
        "CompanyId":item.companyId,
        "Owner":item.ownerName,
       "CompanyName":item.companyName,
       "Phone":item.mobile,
       "Total Users":item.numberOfEmployees,
       "Created At":item.companyStartDate,
       "City":item.city,
      "Status":item.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
       "View":<RemoveRedEyeIcon />, 
     "Update": <BorderColorIcon onClick={() => handleUpdateCompany(item._id)} />,
     "Delete": <DeleteIcon  onClick={() => handleDelete(item._id)}/>,
     
   }));


   setRows(formattedData);
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

            <Box style={{width:"30%"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Category)}
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
        style={{borderRadius:50}}
      />
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
       
          <GenralTabel column={column} rows={rows} />
        
       </Box>
   </Box>
  )
}

