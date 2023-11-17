import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import { UsersListHeader } from './UsersListHeader'
import { Button } from '@mui/material'
import MapLocation from '../../../MapLocation/MapLocation'




const Chargers = () => {
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
    {Sno:"1",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true" />,Alias:"None"},
    {Sno:"2",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true"/>,Alias:"None"},
    {Sno:"3",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="false"/>,Alias:"None"},
    {Sno:"4",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true"/>,Alias:"None"},
    {Sno:"5",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true"/>,Alias:"None"},
    {Sno:"6",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="false"/>,Alias:"None"},
    {Sno:"7",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true"/>,Alias:"None"},
    {Sno:"8",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="false"/>,Alias:"None"},
    {Sno:"9",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="true"/>,Alias:"None"},
    {Sno:"10",Charger_name:"Mark-1",CPO_name:"Tata-Ev",Rf_id:"12ew234qqw21",Map_location:<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant="outlined">12.11 ,123.22</button>,Status:<ActiveStatus status="false"/>,Alias:"None"},
  ]
 const data = "26.509904,75.410153";
  return (
    <div>
      <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Location</h5>
         
           
      
      </div>
      <div className="modal-body" style={{"height":"400px"}}>
        <MapLocation data={data}/>
      </div>
      <div className="modal-footer" >
        <button type="button" className="btn btn-primary mt-5" data-bs-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Chargers
