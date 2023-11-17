import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import { UserActionsCell } from '../../cpos/table/columns/UserActionsCell'
import { UsersListHeader } from './UsersListHeader'



const column=[
  {name:"Sno"},
  {name:"Name"},
  {name:"City"},
  {name:"Total Chargers"},
  {name:"Date Added"},
  {name:"Action"},
]

const rows=[
  {Sno:"1",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"2",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"3",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"4",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"5",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"6",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"7",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"8",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"9",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"10",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:<UserActionsCell/>},
]

const Communications = () => {
  return (
    <div>
       <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}


export default Communications

