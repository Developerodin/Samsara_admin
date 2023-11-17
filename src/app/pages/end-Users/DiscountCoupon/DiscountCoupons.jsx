import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import { UserActionsCell } from '../../cpos/table/columns/UserActionsCell'
import { UsersListHeader } from './UsersListHeader'

const column=[
  {name:"Sno"},
  {name:"Coupons Name"},
  {name:"Status"},
  {name:"Starting Date"},
  {name:"Expire Date"},
  {name:"Action"},
]

const rows = [
  {Sno:"1",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"2",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"3",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"4",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"5",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"6",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"7",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"8",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"9",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"10",Coupons_Name:"Aksahy",Status:<ActiveStatus/>,Starting_Date:"12",Expire_Date:"12.09.22",Action:<UserActionsCell/>},
]

const DiscountCoupons = () => {
  return (
    <div>
       <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}





export default DiscountCoupons
