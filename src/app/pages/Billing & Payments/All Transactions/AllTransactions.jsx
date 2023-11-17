import React, { useEffect, useState } from 'react'
import PageHeader from './Components/PageHeader'
import SessionHeader from './Components/SessionHeader'
import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditBooking from './Components/EditBooking'
import { SessionDrawer } from './Components/SessionDrawer'


const AllTransactions = () => {
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");

  const column=[
    {name:"Transactions Id"},
    {name:"Title"},
    {name:"Type"},
    {name:"User"},
    {name:"Product"},
    {name:"Price"},
    {name:"Quantity"},
    {name:"Actions"},
  ]
  const rows = [
    {
      TranId: <SessionDrawer user={"9823325"} />,
      Title: "Credited By Admin",
      Type: "credit",
      User: "Test user",
     
      Product: "News Paper",
      Price: "₹ 52.16",
      Quantity: "4 Kg",
      Action: <EditBooking />,
    },
    // Add more data entries as needed
  ];
  
const handleSearchInputChange = (event) => {
  const inputValue = event.target.value.toLowerCase();

  if(inputValue === ""){
    setFilterRows(rows)
  }
  else{
       // Filter the rows based on whether any property contains the search input
  const filteredResults = rows.filter((item) =>
  Object.values(item).some((value) =>
    String(value).toLowerCase().includes(inputValue.toLowerCase())
  )
);

// Update the filteredRows state
setFilterRows(filteredResults);
  }
 

  // Update the search input state
  setSearchInput(inputValue);
};

useEffect(()=>{
  setFilterRows(rows)
},[])

  return (
    <div>
       {/* <SessionHeader handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/> */}
   
       <KTCard>
      <GenralTabel rows={filterRows} column={column}/>
      </KTCard>
    </div>
  )
}

export default AllTransactions
