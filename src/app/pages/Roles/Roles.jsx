
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';

import axios from "axios";
import { errorMonitor } from 'events';
import CircularProgress from '@mui/material/CircularProgress';

import LinearProgress from '@mui/material/LinearProgress';
import { KTCard } from '../../../_metronic/helpers';
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader';
import { GenralTabel } from '../../TabelComponents/GenralTable';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const rows = [
  {name:'Admin',Dashboard:<Checkbox {...label} />     ,Dashboard:<Checkbox {...label} />,Cpos:<Checkbox {...label} />,Payments: <Checkbox {...label} />,Settings:<Checkbox {...label} />,Update:<Button>Update</Button>},
  {name:'Developer',Dashboard:<Checkbox {...label} /> ,Dashboard:<Checkbox {...label} />,Cpos:<Checkbox {...label} />,Payments: <Checkbox {...label} />,Settings:<Checkbox {...label} />,Update:<Button>Update</Button>},
  {name:'Analyst',Dashboard:<Checkbox {...label} />   ,Dashboard:<Checkbox {...label} />,Cpos:<Checkbox {...label} />,Payments: <Checkbox {...label} />,Settings:<Checkbox {...label} />,Update:<Button>Update</Button>},
  {name:'Support',Dashboard:<Checkbox {...label} />   ,Dashboard:<Checkbox {...label} />,Cpos:<Checkbox {...label} />,Payments: <Checkbox {...label} />,Settings:<Checkbox {...label} />,Update:<Button>Update</Button>},
  {name:'Trial',Dashboard:<Checkbox {...label} />     ,Dashboard:<Checkbox {...label} />,Cpos:<Checkbox {...label} />,Payments: <Checkbox {...label} />,Settings:<Checkbox {...label} />,Update:<Button>Update</Button>},
  
];
const column=[
  {name:"Field"},
  
  {name:"Dashboard"},
  {name:"Cpos"},
  {name:"Payments"},
  {name:"Settings"},
  {name:"Update"},
]
const initvalues={
  email:"",
  name:"",
  password:""
}

const getData=async()=>{
  const url=`https://jsonplaceholder.typicode.com/posts`
  try{
     const res=await axios.get(url);
     const data=await res.data;
    //  console.log(data);
     return data;
  }
  catch(err){
     console.log("Error :-",err)
  }
}


const Roles = () => {


  const[Data,setData]=React.useState([]);
  const[valid,setvalid]=React.useState(false);
  const [progress, setProgress] = React.useState(0);
  
  const [userData,setUserData] = React.useState(initvalues)
React.useEffect(()=>{
  setTimeout(()=>{
    setvalid(true)
    
    getData().then((res)=>setData(res));
  },5000)

  
  // console.log(Data)
},[])


  return (
    <div>
        <KTCard>
      <UsersListHeader />
      <GenralTabel rows={rows} column={column}/>
      </KTCard>
      </div>
  )
}

export default Roles



              



// Dashboard - 
// 1. summery row : total charges, total CPOs, total customers, active charging total.
// 2. Sales graph: date v/s net sales, CPO graph: month v/s total CPOs
// 3. Activity log: s.no, customer name, CPO name, session started , session end
// 4. Complains box
// 5. TODO list
// 6. Calendar dates

// Internal CPO management 
// 1. All CPOs - list all CPOs in table: son, name, city, total chargers, date added, action: delete, edit, disable. Add new, copy, delete edit. CPO add form - name, city, state, pin code, country, contact person name, number, email, company email, bank account number & details, GST number.
// 2. Chargers- charger name, CPO name, rfid, map location, status, alias. 
// 3. Invoices- 
// 4. Payment managment- payout table: s.no, CPO name, payout amount, settlement date range. Create new payout: choose CPO, date range, payout total, enter custom amount, proceed to pay

// External CPO Management
// 1. All CPOs
// 2. Chargers
// 3. Invoices
// 4. Payout maangment

// End Users 
// 1. Customer list
// 2. Discount coupons
// 3. Charging sessions
// 4. Communications


// Settings
//  1. Users
// 2. Access management 
// 3. My profile
// 4. Error logs
// 5. System masters
// 6. Default settings



// Reports
// 1. Summery report
// 2. Revenue report dashboard
// 3. Charger usage report
// 4. CPO activity report
// 5. User stats
// 6. Coupon usages