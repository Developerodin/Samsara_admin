import React from 'react'
import PageHeader from '../Components/PageHeader'
import ComapnyPaymentHeader from '../Components/ComapnyPaymentHeader'
import { KTCard } from '../../../../../_metronic/helpers'
import { GenralTabel } from '../../../../TabelComponents/GenralTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button } from '@mui/material'
const RoamingRecon = () => {

  const column=[
    {name:"eMSP"},
   
    {name:"CPO"},
    {name:"Booking ID"},
    {name:"Units Consumed"},
    {name:"Revenue Genrated"},
    {name:"Reconcile Now"},
    {name:" "},
    
  ]
  const rows=[
{eMSP:"Tata",CPO:"Charge Xone",Booking_ID:"5670003",Units_Consumed:"100kw",Revenue_Genrated:"₹ 50,000",Reconcile_Now:<Button variant="contained">Reconcile Now</Button>},


]
  return (
    <div>
    <ComapnyPaymentHeader/>
    <KTCard>
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}

export default RoamingRecon
