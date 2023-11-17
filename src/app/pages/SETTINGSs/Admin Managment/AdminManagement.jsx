import React, { useContext } from "react";
import { Box, Typography ,Modal,TextField,Checkbox,Button } from "@mui/material";
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
import { Registration } from "../../../modules/auth/components/Registration";
import { BASE_URL } from "../../../Config/BaseUrl";
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { EditUser } from "../../../modules/auth/components/EditUser";
import { EngageWidget1, EngageWidget2, EngageWidget3, FeedsWidget2, FeedsWidget3, ListsWidget1, ListsWidget26, ListsWidget9, TablesWidget1, TablesWidget2, TablesWidget3, TablesWidget5, TablesWidget6, TablesWidget7 } from "../../../../_metronic/partials/widgets";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";
import DeleteIcon from '@mui/icons-material/Delete';
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
    backgroundColor:"#F5F5F5",
  },
  '&:nth-of-type(even)': {
    backgroundColor:"#F5F5F5",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color:"#FFFF",
  fontSize:"20px",
  backgroundColor:"#302A4E",
  width:"20%",
  height:"40px",
  '&:hover': {
    backgroundColor:"#302A4F",
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'90%',
  height:"95%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:"auto"
};

const AdminManagement = () => {
  const userData=JSON.parse(sessionStorage.getItem('User'));
  const {userToken}=useContext(UserContext);
  const token = sessionStorage.getItem('token');
  const [open, setOpen] = React.useState(false);
  const [Editopen, setEditOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [EditUserId, setEditUserId] = React.useState(null);
  const [updated, setUpdated] = React.useState(0);
  function createData(
    name,
    status,
    date,
    
  ) {
    return { name, status, date };
  }

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditOpen = (user) => {
    setEditUserId(user._id);
    setEditOpen(true);
  }
  const handleEditClose = () => setEditOpen(false);
  
  const rows = [
    createData('Administrator', "Enabled", "01/04.2023"),
    createData('Demonstration', "Enabled", "01/04.2023"),
    
  ];

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`,{ headers: { "Authorization": `${token}` } });
        setUsers(response.data);
        console.log("response Data ====>",response.data);
      } catch (error) {
        console.log('Error fetching users:', error.response.data.error);
        // Handle error case
      }
    };

    fetchUsers();
  }, [updated]);

  const deleteUser = async (userId) => {
    console.log("DElete user", userId);
    try {
      // Send a DELETE request to the server
      const response = await axios.delete(`${BASE_URL}/users/${userId}`, { headers: { Authorization: token } });
  
      if (response.status === 200) {
        // User deleted successfully
        console.log('User deleted successfully');
        setUpdated((prev)=>prev+1);
        // Perform any additional actions or UI updates as needed
      } else {
        // Failed to delete user
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  

  function getAvatarFileName(index) {
    const avatars = ['001-boy', '016-boy-7', '024-boy-9', '015-boy-6','049-boy-22','048-boy-21','044-boy-19','031-boy-12'];
    return avatars[index % avatars.length];
  }
  return (
    <Box>

      <Box sx={{marginTop:"50px"}}>
      <div className='card card-xl-stretch mb-5 mb-xl-8'> 
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Admin Management</h3>
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
      {users.length >0 && users.map((user,index) => { 
        const createdAtDate = new Date(user.createdAt);
        const formattedDate = `${createdAtDate.getDate()}-${createdAtDate.getMonth() + 1}-${createdAtDate.getFullYear()}`;
        return(
        <div key={user._id} style={{justifyContent:"space-between",alignItems:"center"}} className={`d-flex align-items-center bg-light-${index % 4 === 0 ? 'warning' : index % 4 === 1 ? 'success' : index % 4 === 2 ? 'danger' : 'info'} rounded p-5 mb-7`}> 
            
              
              <div className='symbol symbol-50px me-2 d-flex ' style={{width:"200px",justifyContent:"start"}} >
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl(`/media/svg/avatars/${getAvatarFileName(index)}.svg`)}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"10px",fontWeight:"bold",color:"#526D82"}}>{user.name}</div>
                </div>
                
           
              
              <div > 
                      <span className='text-dark fw-bold d-block fs-5'>
                      { user.status? 
                <Button variant="contained" color="success" size="small">Enabled</Button> 
                :
                <Button variant="contained" color="error" size="small">Disabled</Button>
                 }
                      </span>
                      </div>
               
                {/* {user.active} */}
              
                
                <div>
                <span className=' fs-7 fw-bold' style={{color:"#526D82"}}>{formattedDate}</span>
                </div>
              
                
              
                

                   <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"80px"}}>
                  <EditIcon onClick={()=>handleEditOpen(user)} sx={{color:"#302A4E"}}  color="primary"/>
                  <DeleteIcon onClick={() => deleteUser(user._id)} sx={{color:"crimson"}}  />
                  
                  
                  </Box>
                
                </Box>
                
                 
              
              
              
            
            </div>
          )})}

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
          
        
          <Registration handleClose={handleClose}  setUpdated={setUpdated}/>

      




        </Box>
      </Modal>


      <Modal
        open={Editopen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            

            <EditUser handleClose={handleEditClose} userId={EditUserId}  setUpdated={setUpdated}/>

      




        </Box>
      </Modal>
    </Box>
  );
}

export default AdminManagement
