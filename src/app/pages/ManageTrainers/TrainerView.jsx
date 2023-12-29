
import React, { useEffect, useState } from "react";
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../_metronic/partials/widgets";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useParams } from "react-router-dom";
import { Dropdown1 } from "../../../_metronic/partials";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../Config/BaseUrl";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Drawer from '@mui/material/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from "@mui/material";
export const TrainerView = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [state2, setState2] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [state3, setState3] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      name: "Emma Smith",
      avatar: "/media/avatars/300-6.jpg",
      totalExperience: "5 years",
      totalClasses: "350",
      job: "Hatha Yoga",
      online: false,
      color: "primary",
    },
    {
      id: 2,
      name: "Melody Macy",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "150",
      job: "Vinyasa Yoga",
      online: true,
    },
    {
      id: 3,
      name: "Max Smith",
      avatar: "/media/avatars/300-1.jpg",
      totalExperience: "2 years",
      totalClasses: "90",
      job: "Ashtanga Yoga",
      online: true,
    },
    {
      id: 4,
      name: "Sean Bean",
      avatar: "/media/avatars/300-5.jpg",
      totalExperience: "2 years",
      totalClasses: "150",
      job: "Power Yoga",
      online: true,
    },
    {
      id: 5,
      name: "Brian Cox",
      avatar: "/media/avatars/300-25.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Bikram Yoga",
      online: true,
    },
    {
      id: 6,
      name: "Mikaela Collins",
      color: "warning",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Jivamukti Yoga",
      online: true,
    },
    {
      id: 7,
      name: "Francis Mitcham",
      avatar: "/media/avatars/300-9.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Iyengar Yoga",
      online: true,
    },
    {
      id: 8,
      name: "Olivia Wild",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Anusara Yoga",
      online: true,
    },
    {
      id: 9,
      name: "Neil Owen",
      color: "primary",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Sivananda Yoga",
      online: true,
    },
    {
      id: 10,
      name: "Dan Wilson",
      avatar: "/media/avatars/300-23.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Viniyoga",
      online: true,
    },
    {
      id: 11,
      name: "Emma Bold",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Kundalini Yoga",
      online: true,
    },
    {
      id: 12,
      name: "Ana Crown",
      avatar: "/media/avatars/300-12.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Yin Yoga",
      online: true,
    },
  ];
  const [ProfileData, setProfileData] = useState(null);
  const [teacherData, setTeacherData] = useState(null);
  const handelChatClick = () => {
    navigate("chats/");
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Base_url}api/teacher/${id}`);

      if (response.status === 200) {
        setTeacherData(response.data.data.teacher);
      } else {
        console.error('Error fetching data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  useEffect(() => {
    const ProfileDataFilter = Data.filter((el) => {
      return el.id === parseInt(id);
    });
    // console.log("Data =>",ProfileDataFilter)
    setProfileData(Data[0]);
    fetchData();
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:450,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {teacherData && 
              teacherData.qualification.map((el,index)=>{
               
                return <div>
                   { 
                    index  % 3 === 0 &&  <div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Qualification </p>
                   </div>
                   }
                  
                    <div style={{marginTop:"20px",textAlign:"left"}}>
                    <p>  <span style={{fontSize:"14px",fontWeight:"bold"}}>{el.label}  : </span>  <span style={{fontSize:"14px",fontWeight:"bold"}}>{el.value} </span>    </p>
                      </div>
                  </div>
               
              })
            }
    </Box>
  );

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };

  const list2 = (anchor) => (
    <Box
      sx={{ width:450,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >

      {teacherData && 
              teacherData.additional_courses.map((el,index)=>{
               
                return <div>
                   { 
                    index  % 3 === 0 &&  <div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Additional Courses </p>
                   </div>
                   }
                  
                    <div style={{marginTop:"20px",textAlign:"left"}}>
                    <p>  <span style={{fontSize:"14px",fontWeight:"bold"}}>{el.label}  : </span>  <span style={{fontSize:"14px",fontWeight:"bold"}}>{el.value} </span>    </p>
                      </div>
                  </div>
               
              })
            }
    </Box>
  );

  const toggleDrawer3 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState3({ ...state2, [anchor]: open });
  };

  const list3 = (anchor) => (
    <Box
      sx={{ width:450,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer3(anchor, false)}
      onKeyDown={toggleDrawer3(anchor, false)}
    >
 <div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Achievements </p>
                   </div>
      {teacherData && 
              teacherData.achievements.map((el,index)=>{
               
                return <div>
                  
                  
                    <div style={{marginTop:"20px",textAlign:"left"}}>
                    <p>  <span style={{fontSize:"14px",fontWeight:"bold"}}>{el}</span> </p>
                      </div>
                  </div>
               
              })
            }
    </Box>
  );
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
              {teacherData && teacherData.images.length === 0 ? (
                  <span
                    className={`symbol-label bg-light-${ProfileData.color} text-${ProfileData.color} fs-5 fw-bolder`}
                  >
                    {teacherData.name.charAt(0)}
                  </span>
                ) : (
                  teacherData &&  teacherData.images && (
                    <img
                      src={`${Base_url}api/${teacherData.images[0].path}`}
                      alt="Metronic"
                    />
                  )
                )}

                {teacherData && teacherData.active ? (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                ) : (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-danger rounded-circle border border-4 border-white h-20px w-20px"></div>
                )}
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {teacherData && teacherData.name}
                    </a>
                    <a href="#">
                      <KTSVG
                        path="/media/icons/duotune/general/gen026.svg"
                        className="svg-icon-1 svg-icon-primary"
                      />
                    </a>
                  </div>

                  <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                  

                    <a
                      href="#"
                      className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com011.svg"
                        className="svg-icon-4 me-1"
                      />
                      {teacherData && teacherData.email}
                    </a>

                    <span
                      onClick={handelChatClick}
                      className="d-flex align-items-center text-gray-400 text-hover-primary mb-2 me-3"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com003.svg"
                        className="svg-icon-4 me-1"
                      />
                      Chat
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                        {teacherData && teacherData.teachingExperience} years
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">
                        Experience
                      </div>
                    </div>

                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {teacherData && teacherData.attendance.length}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Classes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>
        </div>

        <div className="card-body p-9">
        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Date of birth</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                {teacherData && teacherData.dob}
              </a>
            </div>
          </div>
          <div className="row mb-7">
             <label className='col-lg-4 fw-bold text-muted'>
              Contact Phone
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label> 
           
            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{teacherData && teacherData.mobile}</span>

              <span className='badge badge-success'>Verified</span>
            </div> 
          </div>

        

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Address</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                {teacherData && teacherData.Address}, {teacherData && teacherData.pincode}
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              City
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{teacherData && teacherData.city}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Country
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{teacherData && teacherData.country}</span>
            </div>
          </div>
        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Expertise</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
                {teacherData && 
                teacherData.expertise.map((el)=>{
                  return el
                })
                }
              </a>
            </div>
          </div>

       

          <div className="row mb-10">
            <label className="col-lg-4 fw-bold text-muted">About</label>

            <div className="col-lg-8">
              {/* {
                teacherData && teacherData.Address
              } */}
              <span className="fw-bold fs-6">
                {teacherData && teacherData.description} Namaste 🙏✨
              </span>
            </div>
          </div>

        </div>
      </div>


      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Yoga Information</h3>
          </div>
        </div>

        <div className="card-body p-9">
        

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Qualification</label>

            <div className="col-lg-8">
              <a  className="fw-bold fs-6 text-dark text-hover-primary">
              {/* <Accordion style={{marginTop:"-5px",width:"60%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {teacherData && 
              teacherData.qualification.map((el,index)=>{
               
                return <div>
                    <p>{el.label} = {el.value}</p>
                  </div>
               
              })
            }
        </AccordionDetails>
      </Accordion> */}
      <Button variant="outlined" onClick={toggleDrawer("right", true)}>View</Button>
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Additional courses </label>

            <div className="col-lg-8">
              <a className="fw-bold fs-6 text-dark text-hover-primary">
            

      <Button variant="outlined" onClick={toggleDrawer2("right", true)}>View</Button>
            
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Achievements </label>

            <div className="col-lg-8">
              <a  className="fw-bold fs-6 text-dark text-hover-primary">
           
      <Button variant="outlined" onClick={toggleDrawer3("right", true)}>View</Button>
              </a>
            </div>
          </div>

         
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        <div className="col-xl-6">
          <ChartsWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>

        {/* <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div> */}
        <div className="col-xl-6">
          <ListsWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}

    <Drawer
            anchor={`right`}
            open={state[`right`]}
            onClose={toggleDrawer(`right`, false)}
          >
            {list(`right`)}
          </Drawer>

          <Drawer
            anchor={`right`}
            open={state2[`right`]}
            onClose={toggleDrawer2(`right`, false)}
          >
            {list2(`right`)}
          </Drawer>

          <Drawer
            anchor={`right`}
            open={state3[`right`]}
            onClose={toggleDrawer3(`right`, false)}
          >
            {list3(`right`)}
          </Drawer>
    </>
  );
};

