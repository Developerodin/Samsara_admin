import React from 'react'
import { KTCard } from '../../../../_metronic/helpers'

import { GenralTabel } from '../../../TabelComponents/GenralTable'
import { UserActionsCell } from '../../cpos/table/columns/UserActionsCell'
import { UsersListHeader } from './UsersListHeader'

const column=[
  {name:"Sno"},
  {name:"Customer Name"},
  {name:"City"},
  {name:"Customer Location"},
  {name:"Join Date"},
  {name:"Action"}
  
]

const rows=[
  {Sno:"1",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"2",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"3",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"4",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"5",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"6",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"7",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"8",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"9",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
  {Sno:"10",Customer_Name:"Aksahy Pareek",City:"Jaipur",Customer_Location:"12.00L-13.8080A",Join_Date:"12.09.22",Action:<UserActionsCell/>},
]

const CustomerList = () => {
  return (
    <div>
       <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
    </div>
  )
}





export default CustomerList
