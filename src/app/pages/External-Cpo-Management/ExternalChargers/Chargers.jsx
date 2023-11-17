import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import { UsersListHeader } from './UsersListHeader'
const column=[
  {name:"S.no"},
  {name:"Charger Name"},
  {name:"CPO Name"},
  {name:"RF Id"},
  {name:"Map Location"},
  {name:"Status"},
  {name:"Alias"},
]

const rows=[
  {Sno:"1",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="true" />,Alias:"None"},
  {Sno:"2",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="false" />,Alias:"None"},
  {Sno:"3",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="true" />,Alias:"None"},
  {Sno:"4",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="false" />,Alias:"None"},
  {Sno:"5",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="true" />,Alias:"None"},
  {Sno:"6",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="false" />,Alias:"None"},
  {Sno:"7",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="true" />,Alias:"None"},
  {Sno:"8",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="false" />,Alias:"None"},
  {Sno:"9",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="true" />,Alias:"None"},
  {Sno:"10",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:"12.11 ,123.22",Status:<ActiveStatus status="false"/>,Alias:"None"},
]
const Chargers_E = () => {
  return (
    <div>
      <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}

export default Chargers_E
