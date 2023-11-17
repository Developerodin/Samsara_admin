import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CardsWidget20, ChartsWidget3, ListsWidget1, ListsWidget3, ListsWidget4, ListsWidget6, ListsWidget7, ListsWidget8, ListsWidget9 } from '../../../../../_metronic/partials/widgets';
import { KTSVG } from '../../../../../_metronic/helpers';
import { Box, Button, Typography } from '@mui/material';
import { GenralTabel } from '../../../../TabelComponents/GenralTable';


export const RoamingAgreements = () => {
  const [data,setData]=useState([]);
  const [rows,setRows]=useState([])
  const column=[
    {name:"Comapny Name"},
    {name:"emps Cost"},
    {name:"Additional Cost"},
    {name:"Own"},
    {name:"Roaming"},
    {name:"Download"}

  ]
    const location=useLocation();
    
    useEffect(()=>{
      console.log("🚀 ~ file: ChargerDetails.jsx:7 ~ ChargerDetails ~ location:", location.state.data)
      setData(location.state.data);

      const formatedData=location.state.data.map((el)=>({
       
         "Comapny_Name":el.Company_Name,
         "empsCost":el.eMsp_Cost,
         "Additional_cost":el.Additional_cost,
         "Own":"4",
         "Roaming":"25",
         "Download":<Button variant="contained">Download Aggrement</Button>
        
      }))
      setRows(formatedData);

    },[])
  return (
    <div>
      <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Roaming Agreement</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 40 Chargers</span>
        </h3>

        
      </div>
      <div className='card-body pt-5'>
       
       <GenralTabel column={column} rows={rows} />
        
       
      </div>

    </div>

    <div className={`card`} style={{marginTop:"30px"}}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Net Revenue</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>₹ 12,500</span>
        </h3>

        
      </div>
      <div className='card-body pt-5'>
       <Box>
       <ChartsWidget3 className='card-xl-stretch mb-xl-8'/>
       </Box>
        
       
      </div>

    </div>
    </div>
  )
}
