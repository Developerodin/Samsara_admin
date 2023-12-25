import React, { useEffect, useState } from "react";
import {
    ChartsWidget1,
  ListsWidget1,
  ListsWidget2,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../../_metronic/partials/widgets";

import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { KTSVG,toAbsoluteUrl } from "../../../../_metronic/helpers";
import axios from "axios";
import { Base_url } from "../../../Config/BaseUrl";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";
import { ListsWidget10 } from "../../../../_metronic/partials/widgets/lists/ListsWidget10";

export const UserView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      name: "Emma Smith",
      color: "primary",
      totalExperience: "5 years",
      totalClasses: "350",
      job: "Hatha Yoga",
      online: false,
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
  const [userData, setuserData] = useState(null);
  const handelChatClick = () => {
    navigate("chats/");
  };
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${Base_url}api/users/${id}`); // Replace with your actual API endpoint
      // setUsers(response.data.data.users);
      const Data= response.data.data.user
      console.log("User Data ==>",Data)
      setuserData(Data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };
  useEffect(() => {
    const ProfileDataFilter = Data.filter((el) => {
      return el.id === parseInt(id);
    });
    // console.log("Data =>",ProfileDataFilter)
    setProfileData(Data[0]);
    fetchUsers();
  }, []);
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                {userData && userData.images.length === 0 ? (
                  <span
                    className={`symbol-label bg-light-${ProfileData.color} text-${ProfileData.color} fs-5 fw-bolder`}
                  >
                    {userData.name.charAt(0)}
                  </span>
                ) : (
                  userData &&  userData.images && (
                    <img
                      src={`${Base_url}api/${userData.images[0].path}`}
                      alt="Metronic"
                    />
                  )
                )}

                {userData && userData.active ? (
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
                      {userData && userData.name}
                    </a>
                    <a href="#">
                      <KTSVG
                        path="/media/icons/duotune/general/gen026.svg"
                        className="svg-icon-1 svg-icon-primary"
                      />
                    </a>
                  </div>

                  <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                  {
                    userData && userData.company_name !== "" && <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                  >
                    <KTSVG
                      path="/media/icons/duotune/communication/com001.svg"
                      className="svg-icon-4 me-1"
                    />
                    {userData && userData.company_name}
                  </a>
                  } 
                  
                    {
                        userData && userData.corporate_id !== "" && <a
                        href="#"
                        className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                      >
                        <KTSVG
                          path="/media/icons/duotune/communication/com013.svg"
                          className="svg-icon-4 me-1"
                        />
                        {userData && userData.corporate_id}
                      </a>
                    }
                    

                    <a
                      href="#"
                      className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com011.svg"
                        className="svg-icon-4 me-1"
                      />
                      {userData && userData.email}
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
                          {userData && userData.attendance.length}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">
                      Attendance
                      </div>
                    </div>

                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {ProfileData && ProfileData.totalClasses}
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
            <label className="col-lg-4 fw-bold text-muted">
              
            Gender
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.gender}</span>
            </div>
          </div>
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              
            Height
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.height}</span>
            </div>
          </div>
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              
            Weight
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.weight}</span>
            </div>
          </div>
        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              
              Date of birth
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.dob}</span>
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
              <span className='fw-bolder fs-6 me-2'>{userData && userData.mobile}</span>

              <span className='badge badge-success'>Verified</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Address
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.Address},{userData && userData.pincode}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              City
              
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.city}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Country
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.country}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Prior Yogs Experience</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              {userData && userData.PriorExperience}
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">How user know us</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              {userData && userData.howyouknowus}
              </a>
            </div>
          </div>

          

        


          <div className="row mb-10">
            <label className="col-lg-4 fw-bold text-muted">About</label>

            <div className="col-lg-8">
              <span className="fw-bold fs-6">
                {userData && userData.description}
              </span>
            </div>
          </div>

          {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTSVG
              path='icons/duotune/general/gen044.svg'
              className='svg-icon-2tx svg-icon-warning me-4'
            />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                <div className='fs-6 text-gray-600'>
                  Your payment was declined. To start using tools, please
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>


      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Student Track</h3>
          </div>
        </div>

        <div className="card-body p-9">
        


        

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Attendance</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              <Accordion style={{marginTop:"-5px",width:"60%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* {userData && 
              userData.attendance.map((el,index)=>{
               
                return <div>
                    <p>{el}</p>
                  </div>
               
              })
            } */}
        </AccordionDetails>
      </Accordion>
            
              </a>
            </div>
          </div>
          
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Achievements</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              <Accordion style={{marginTop:"-5px",width:"60%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {userData && 
              userData.achievements.map((el,index)=>{
               
                return <div>
                    <p>{el}</p>
                  </div>
               
              })
            }
        </AccordionDetails>
      </Accordion>
            
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Class Feedback</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              <Accordion style={{marginTop:"-5px",width:"60%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* {userData && 
              userData.classFeedback.map((el,index)=>{
               
                return <div>
                    <p>{el}</p>
                  </div>
               
              })
            } */}
        </AccordionDetails>
      </Accordion>
            
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Assessments</label>

            <div className="col-lg-8">
              <a href="#" className="fw-bold fs-6 text-dark text-hover-primary">
              <Accordion style={{marginTop:"-5px",width:"60%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* {userData && 
              userData.Assessments.map((el,index)=>{
               
                return <div>
                    <p>{el}</p>
                  </div>
               
              })
            } */}
        </AccordionDetails>
      </Accordion>
            
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
        <ListsWidget2 className='mb-5 mb-xxl-8' />
        
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
            {
                userData && <ListsWidget10 className='mb-5 mb-xxl-8' Data={userData.health_issues} />
            }
        
        </div>

      
      </div>
    </>
  );
};

