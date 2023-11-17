import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import { UsersListHeader } from './UsersListHeader'

const column=[
  {name:"Sno"},
  {name:"CPO Name"},
  {name:"Payout Amount"},
  {name:"Settlement Date Range"},
  
]

const rows=[
  {Sno:"1",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"2",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"3",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"4",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"5",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"6",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"7",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"8",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"9",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
  {Sno:"10",CPO_Name:"Tata Ev",Payout_Amount:"Rs80,000",Settlement_Date_Range:"12.01.2023-23-03-2023"},
]
const PayoutManagment = () => {
  return (
    <div>
       <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}

export default PayoutManagment
