import React from 'react'
import GeneralTable, { GenralTabel } from '../../../TabelComponents/GenralTable'
import { KTCard } from '../../../../_metronic/helpers'

import { UserActionsCell } from '../../cpos/table/columns/UserActionsCell'
import { UsersListHeader } from './UsersListHeader'
import AddCpoModel from './Components/AddCPOModel'

const column=[
  {name:"Sno"},
  {name:"Name"},
  {name:"City"},
  {name:"Total Chargers"},
  {name:"Joined Date"},
  {name:"Action"},
]

const rows=[
  {Sno:"1",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"2",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"3",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"4",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"5",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"6",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"7",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"8",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"9",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"10",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Joined_Date:"12.09.22",Action:<UserActionsCell/>},
]
const AllCpos = () => {

  return (
    <div>
      <KTCard>
      <UsersListHeader />
      <AddCpoModel/>
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}

export default AllCpos
