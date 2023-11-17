import React, { useContext } from "react";
import { Box, Typography ,Modal,TextField,Checkbox,Button, Card, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { BASE_URL } from "../../../Config/BaseUrl";
import { ListsWidget1, ListsWidget2, ListsWidget3, ListsWidget4, ListsWidget5, ListsWidget6, ListsWidget7, ListsWidget8, ListsWidget9 } from "../../../../_metronic/partials/widgets";
import { KTSVG } from "../../../../_metronic/helpers";
import UserContext from "../../../../Context/UserContext";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#302A4E",
    color:"white",
    fontSize:"20px",
    fontWeight:"bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color:"#FFFF",
  fontSize:"20px",
  backgroundColor:"#394867",
  width:"10%",
  height:"40px",
  borderRadius:"20px",
  '&:hover': {
    backgroundColor:"#302A4F",
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'80%',
  height:"80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialPermission={
  Dashboard: false,
  Overview: false,
  Cpos: false,
  Chargers:false,
  ChargingStations: false,
  StationLogs: false,
  ChargerMap: false,
  EVOwnersOverView: false,
  UserList: false,
  Complains: false,
  PrivateChat: false,
  BillingOverview: false,
  AllTransactions: false,
  CompanyPayouts: false,
  DiscountCoupons: false,
  
}

const initialEditState={
  name: '',
    permissions: {},
}

const AccessManagement = () => {
  const {userToken,setRefresh}=useContext(UserContext);
  const token = sessionStorage.getItem('token');
  const [open, setOpen] = React.useState(false);
  const [Editopen, setEditOpen] = React.useState(false);
  const [roleName, setRoleName] = React.useState('');
  const [permissions, setPermissions] = React.useState(initialPermission);
  const [roles, setRoles] = React.useState([]);
  const [selectedRole, setSelectedRole] = React.useState(null);
  const [editedRole, setEditedRole] = React.useState(initialEditState);
  const [updatedRole, setUpdatedRole] = React.useState(0);
  const [allChecked, setAllChecked] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = (role) =>{
    handleRoleSelection(role)
    setEditOpen(true);
  } 
  const handleEditClose = () => setEditOpen(false);

  

  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
 
  
  const rows = [
    createData('Administrator', 159, 6.0, 24, 4.0),
    createData('Demonstration', 237, 9.0, 37, 4.3),
    
  ];

  const handlePermissionChange = (permissionName) => {
    
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permissionName]: !prevPermissions[permissionName],
    }));
  };

  const submitNewGroup = async () => {
    const roleData = {
      name: roleName,
      permissions,
    };

    // console.log("Role Data===>", roleData);
  
    try {
      const response = await axios.post(`${BASE_URL}/roles`, roleData,{ headers: { "Authorization": `${token}` } });
      // console.log('Role created:', response.data);
      setRoleName('')
      setPermissions(initialPermission);
      setAllChecked(false)
      setUpdatedRole((prev)=>prev+1);
      setRefresh((prev)=>prev+1);
      handleClose();
      // Perform any additional actions after role creation
    } catch (error) {
      console.log('Error creating role:', error.response.data.error);
      // Handle error case
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setEditedRole({
      name: role.name,
      permissions: { ...role.permissions },
    });
  };

  const handleEditPermissionChange = (permissionName) => {
    setEditedRole((prevRole) => ({
      ...prevRole,
      permissions: {
        ...prevRole.permissions,
        [permissionName]: !prevRole.permissions[permissionName],
      },
    }));
  };

  const handleEditSubmit = async (event) => {
    

    try {
      const response = await axios.put(`${BASE_URL}/roles/${selectedRole._id}`, editedRole,{ headers: { "Authorization": `${token}` } });
      // console.log('Role updated:', response.data);
      setSelectedRole(null);
      setEditedRole(initialEditState);
      setUpdatedRole((prev)=>prev+1);
      setRefresh((prev)=>prev+1);
      handleEditClose();

      // Perform any additional actions after role update
    } catch (error) {
      console.log('Error updating role:', error.response.data.error);
      // Handle error case
    }
  };

  const handleDelete = async (roleId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/roles/${roleId}`,{ headers: { "Authorization": `${token}` } });
      // console.log('Role deleted:', response.data);
      setUpdatedRole((prev)=>prev+1);
      setRefresh((prev)=>prev+1);
      // Perform any additional actions after role deletion
      // For example, you could refresh the roles list
      
    } catch (error) {
      console.log('Error deleting role:', error.response.data.error);
      // Handle error case
    }
  };

  React.useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/roles`,{ headers: { "Authorization": `${token}` } });
        setRoles(response.data);
      } catch (error) {
        console.log('Error fetching roles:', error.response.data.error);
        // Handle error case
      }
    };

    fetchRoles();
  }, [updatedRole])
  
  const handleAllChange = () => {
    setAllChecked(!allChecked);
     Object.entries(permissions).map(([permissionName, isChecked])=>{
      return handlePermissionChange(permissionName);
    })
  };
  return (
    <Box>
      

      <Box sx={{marginTop:"50px"}}>
      <div className='card card-xl-stretch mb-5 mb-xl-8'> 
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Access Management</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            onClick={handleOpen}
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen035.svg' className='svg-icon-1' />
          </button>
        
          {/* end::Menu */}
        </div>
      </div>
     
      <div className='card-body pt-0'>
      {roles.length > 0 && roles.map((role,index) => (
           
           <div className={`d-flex align-items-center bg-light-${index % 4 === 0 ? 'warning' : index % 4 === 1 ? 'success' : index % 4 === 2 ? 'danger' : 'info'} rounded p-5 mb-7`}>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              {role.name}
            </a>
            <span className='text-muted fw-semibold d-block'></span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          
          <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"80px"}}>
                  <EditIcon  onClick={()=>handleEditOpen(role)} sx={{color:"#302A4E",display:`${role.name==="Admin" ? "none" :"block"}`}}  color="primary"/>
                  <DeleteIcon onClick={() => handleDelete(role._id)} sx={{color:"crimson",display:`${role.name==="Admin" ? "none" :"block"}`}}  />
                  
                  
                  </Box>
                
                </Box>
          {/* end::Lable */}
        </div>
                
             
          ))}
          </div>

          </div>
           </Box>
      

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{textAlign:"center"}}>
          <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>Access Permission</Typography>
          </Box>
        
          <Box sx={{marginTop:"50px"}}>
          <TextField id="standard-basic" label="User Group Name" variant="outlined"  sx={{width:"100%"}} value={roleName}
          onChange={(event) => setRoleName(event.target.value)}/>
          </Box>
        

        <Box sx={{marginTop:"20px",textAlign:"left",padding:"10px",height:"380px",overflow:"auto"}}>
          
            <label>
            <input
            className="form-check-input"
            type="checkbox"
            checked={allChecked}
            onChange={handleAllChange}
          />
          <span style={{ fontSize: "16px", fontWeight: "bold", marginLeft: "20px" }}>
            Select All
          </span>
            </label>
            <br/>
         

<label>

 
  {Object.entries(permissions).map(([permissionName, isChecked]) => (
    <Box sx={{marginTop:"20px"}}>
      <label key={permissionName}>
      <input
      className="form-check-input"
        type="checkbox"
        checked={allChecked || isChecked}
        onChange={() => !allChecked && handlePermissionChange(permissionName)}
      />
      <span style={{fontSize:"16px",fontWeight:"bold",marginLeft:"20px"}}>{" "+permissionName}</span>
    </label>
    </Box>
   
  ))}
</label>
<br />
          
        
          
          
        </Box>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
               <ColorButton  onClick={submitNewGroup}>Submit</ColorButton>
        </Box>

      




        </Box>
      </Modal>


      <Modal
        open={Editopen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{textAlign:"center"}}>
          <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>Edit Access Permission</Typography>
          </Box>
          <Box sx={{marginTop:"50px"}}>
          <TextField id="standard-basic" label="User Group Name" variant="outlined"  sx={{width:"100%"}} value={editedRole.name}
          onChange={(event) =>
            setEditedRole((prevRole) => ({
              ...prevRole,
              name: event.target.value,
            }))
          }/>
          </Box>
        

        <Box sx={{marginTop:"50px",textAlign:"left",padding:"10px",height:"380px",overflow:"auto"}}>
          

      <label>
       
      {Object.entries(editedRole.permissions).map(([permissionName, isChecked]) => (
        <Box sx={{marginTop:"20px"}}>
                <label key={permissionName}>
                  <input
                  className="form-check-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleEditPermissionChange(permissionName)}
                  />
                  <span style={{fontSize:"16px",fontWeight:"bold",marginLeft:"20px"}}>{" "+permissionName}</span>
                </label>
                </Box>
              ))}
      </label>
      <br />
          
          
        </Box>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
               <ColorButton  onClick={handleEditSubmit}>Submit</ColorButton>
        </Box>

      




        </Box>
      </Modal>
    </Box>
  );
};

export default AccessManagement;
