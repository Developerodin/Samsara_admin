import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader'
import ComapnyPaymentHeader from '../Components/ComapnyPaymentHeader'
import { KTCard } from '../../../../../_metronic/helpers'
import { GenralTabel } from '../../../../TabelComponents/GenralTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button } from '@mui/material'
const CompanyPayments = () => {
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const column=[
    {name:"Payment Id"},
   
    {name:"Company"},
    {name:"Paid Amount"},
    {name:"Status"},
    {name:"Date"},
    {name:"Payment Method"},
    {name:" "},
    
  ]
  const rows = [
    { PaymentId: "pay_ABC123XYZ456", Company: "ABC Corporation", PaidAmount: "7500", Status: "Completed", Date: "Mon 03 Oct 2023 14:45:30 GMT", "Payment Method": "Credit Card" },
    { PaymentId: "pay_DEF456UVW789", Company: "DEF Enterprises", PaidAmount: "5500", Status: "Pending", Date: "Tue 04 Oct 2023 10:22:15 GMT", "Payment Method": "PayPal" },
    { PaymentId: "pay_GHI789PQR123", Company: "GHI Solutions", PaidAmount: "9200", Status: "Failed", Date: "Wed 05 Oct 2023 19:18:05 GMT", "Payment Method": "UPI" },
    { PaymentId: "pay_JKL123STU456", Company: "JKL Industries", PaidAmount: "3200", Status: "Refunded", Date: "Thu 06 Oct 2023 16:55:40 GMT", "Payment Method": "Debit Card" },
    { PaymentId: "pay_MNO456XYZ789", Company: "MNO Services", PaidAmount: "4300", Status: "Completed", Date: "Fri 07 Oct 2023 08:30:20 GMT", "Payment Method": "Netbanking" },
    { PaymentId: "pay_PQR789UVW123", Company: "PQR Ventures", PaidAmount: "6100", Status: "Pending", Date: "Sat 08 Oct 2023 21:12:10 GMT", "Payment Method": "Credit Card" },
    { PaymentId: "pay_STU123ABC456", Company: "STU Tech Solutions", PaidAmount: "8700", Status: "Failed", Date: "Sun 09 Oct 2023 12:07:55 GMT", "Payment Method": "PayPal" },
    { PaymentId: "pay_VWX456GHI789", Company: "VWX Innovations", PaidAmount: "5200", Status: "Refunded", Date: "Mon 10 Oct 2023 17:33:30 GMT", "Payment Method": "UPI" },
    { PaymentId: "pay_YZA789JKL123", Company: "YZA Systems", PaidAmount: "9800", Status: "Completed", Date: "Tue 11 Oct 2023 09:20:45 GMT", "Payment Method": "Debit Card" },
    { PaymentId: "pay_BCD123MNO456", Company: "BCD Tech Solutions", PaidAmount: "7500", Status: "Pending", Date: "Wed 12 Oct 2023 14:05:15 GMT", "Payment Method": "Netbanking" }
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
    <ComapnyPaymentHeader handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/>
    <KTCard>
      <GenralTabel rows={filterRows} column={column}/>
      </KTCard>
    </div>
  )
}

export default CompanyPayments
