import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import { UsersListHeader } from './UsersListHeader'

const column=[
  // {name:"Sno"},
  // {name:"Name"},
  // {name:"City"},
  // {name:"Total Chargers"},
  // {name:"Date Added"},
  // {name:"Action"},
]

const rows=[
  // {Sno:"1",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"2",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"3",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"4",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"5",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"6",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"7",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"8",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"9",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
  // {Sno:"10",Name:"Aksahy",City:"Jaipur",Total_chargers:"12",Date_added:"12.09.22",Action:"Action"},
]

const Invoices_E = () => {
  return (
    <div>
       <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
      {/* Invoices */}
    </div>
  )
}

export default Invoices_E
