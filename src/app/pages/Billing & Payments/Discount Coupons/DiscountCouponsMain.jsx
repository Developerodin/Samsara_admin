import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import { UserActionsCell } from '../../cpos/table/columns/UserActionsCell'
import { UsersListHeader } from '../../Internal-Cpo-Managment/AllCpos/UsersListHeader'
import { Button } from '@mui/material'


const column=[
  {name:"Sno"},
  {name:"Coupons Name"},
  {name:"Status"},
  {name:"Starting Date"},
  {name:"Expire Date"},
  {name:"Action"},
]

const rows = [
  {
    Sno: "1",
    Coupons_Name: "Welcome 50",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-01-01",
    Expire_Date: "2022-01-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "2",
    Coupons_Name: "#tryNew230",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-02-01",
    Expire_Date: "2022-02-28",
    Action: <UserActionsCell />,
  },
  {
    Sno: "3",
    Coupons_Name: "Rh50Ev",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-03-01",
    Expire_Date: "2022-03-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "4",
    Coupons_Name: "Electrify500",
    Status: <Button variant="contained" color='error'>In Active</Button>,
    Starting_Date: "2022-04-01",
    Expire_Date: "2022-04-30",
    Action: <UserActionsCell />,
  },
  {
    Sno: "5",
    Coupons_Name: "NewFor465",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-05-01",
    Expire_Date: "2022-05-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "6",
    Coupons_Name: "ChargeSol679",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-06-01",
    Expire_Date: "2022-06-30",
    Action: <UserActionsCell />,
  },
  {
    Sno: "7",
    Coupons_Name: "OELECT45",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-07-01",
    Expire_Date: "2022-07-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "8",
    Coupons_Name: "#fr09Try67",
    Status: <Button variant="contained" color='error'>In Active</Button>,
    Starting_Date: "2022-08-01",
    Expire_Date: "2022-08-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "9",
    Coupons_Name: "#ffhh432",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-09-01",
    Expire_Date: "2022-09-30",
    Action: <UserActionsCell />,
  },
  {
    Sno: "10",
    Coupons_Name: "Electrify100",
    Status: <Button variant="contained" color='error'>In Active</Button>,
    Starting_Date: "2022-10-01",
    Expire_Date: "2022-10-31",
    Action: <UserActionsCell />,
  },
  {
    Sno: "11",
    Coupons_Name: "Try50",
    Status: <Button variant="contained" color='success'>Active</Button>,
    Starting_Date: "2022-11-01",
    Expire_Date: "2022-11-30",
    Action: <UserActionsCell />,
  },
  // Add more data entries as needed
];


const DiscountCouponsMain = () => {
  return (
    <div>
       <KTCard>
    
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}





export default DiscountCouponsMain
