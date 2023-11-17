import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import { UsersListHeader } from './UsersListHeader'

const column=[
  {name:"S.no"},
  {name:"Charger Name"},
  {name:"City"},
  {name:"Slot"},
  {name:"Start Time"},
  {name:"End Time"},
  
]

const rows=[
  {Sno:"1",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"01",Start_Time:"12:09",End_Time:"1:09"},
  {Sno:"2",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"12",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"3",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"07",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"4",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"12",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"5",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"02",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"6",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"03",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"7",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"12",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"8",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"08",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"9",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"07",Start_Time:"12.09",End_Time:"1:09"},
  {Sno:"10",Charger_Name:"Tata-Ev-1",City:"Jaipur",Slot:"05",Start_Time:"12.09",End_Time:"1:09"},
]

const ChargingSessions = () => {
  return (
    <div>
      <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}

export default ChargingSessions
