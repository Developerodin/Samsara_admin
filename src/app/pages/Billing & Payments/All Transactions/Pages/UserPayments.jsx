import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader'
import UserPaymentHeader from '../Components/UserPaymentHeader'
import { KTCard } from '../../../../../_metronic/helpers'
import { GenralTabel } from '../../../../TabelComponents/GenralTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button } from '@mui/material'
const UserPayments = () => {

  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");


  const column=[
    {name:"Payment Id"},
    {name:"User Name"},
    {name:"Phone Number"},
    {name:"Email"},
    {name:"Company"},
    {name:"Paid Amount"},
    {name:"Status"},
    {name:"Date"},
    {name:"Payment Method"},
    {name:" "},
    
  ]
  const rows = [
    {
      PaymentId: "pay_abc123",
      UserName: "John Doe",
      PhoneNumber: "+91-1234567890",
      Email: "johndoe@example.com",
      Company: "ABC Inc.",
      PaidAmount: "5000",
      Status: "Captured",
      Date: "15 Apr 2023",
      "Payment Method": "credit card",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_xyz456",
      UserName: "Alice Smith",
      PhoneNumber: "+91-9876543210",
      Email: "alicesmith@example.com",
      Company: "XYZ Corp.",
      PaidAmount: "7500",
      Status: "Refunded",
      Date: "20 Apr 2023",
      "Payment Method": "PayPal",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_pqr789",
      UserName: "Bob Johnson",
      PhoneNumber: "+91-5555555555",
      Email: "bob@example.com",
      Company: "PQR Ltd.",
      PaidAmount: "3000",
      Status: "Pending",
      Date: "25 Apr 2023",
      "Payment Method": "bank transfer",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_mno123",
      UserName: "Jane Williams",
      PhoneNumber: "+91-7777777777",
      Email: "jane@example.com",
      Company: "MNO Enterprises",
      PaidAmount: "9000",
      Status: "Refunded",
      Date: "30 Apr 2023",
      "Payment Method": "credit card",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_efg456",
      UserName: "Ella Davis",
      PhoneNumber: "+91-3333333333",
      Email: "ella@example.com",
      Company: "EFG Solutions",
      PaidAmount: "6000",
      Status: "Captured",
      Date: "5 May 2023",
      "Payment Method": "PayPal",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_hij789",
      UserName: "Samuel Brown",
      PhoneNumber: "+91-4444444444",
      Email: "samuel@example.com",
      Company: "HIJ Technologies",
      PaidAmount: "4500",
      Status: "Pending",
      Date: "10 May 2023",
      "Payment Method": "bank transfer",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_lmn123",
      UserName: "Olivia Lee",
      PhoneNumber: "+91-6666666666",
      Email: "olivia@example.com",
      Company: "LMN Innovations",
      PaidAmount: "7500",
      Status: "Refunded",
      Date: "15 May 2023",
      "Payment Method": "credit card",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_wxyz456",
      UserName: "William Turner",
      PhoneNumber: "+91-2222222222",
      Email: "william@example.com",
      Company: "WXYZ Systems",
      PaidAmount: "8500",
      Status: "Captured",
      Date: "20 May 2023",
      "Payment Method": "PayPal",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_def789",
      UserName: "Grace Harris",
      PhoneNumber: "+91-8888888888",
      Email: "grace@example.com",
      Company: "DEF Services",
      PaidAmount: "4000",
      Status: "Pending",
      Date: "25 May 2023",
      "Payment Method": "bank transfer",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
    {
      PaymentId: "pay_abcd123",
      UserName: "Liam Martinez",
      PhoneNumber: "+91-9999999999",
      Email: "liam@example.com",
      Company: "ABCD Solutions",
      PaidAmount: "7000",
      Status: "Refunded",
      Date: "30 May 2023",
      "Payment Method": "credit card",
      RefundButton: <Button sx={{ backgroundColor: "crimson", color: "#fff", "&:hover": { backgroundColor: "#E21818" } }}>Initiate Refund</Button>
    },
  ];
  
  // You can add more data entries as needed.
  

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
      <UserPaymentHeader handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/>
      <KTCard>
      <GenralTabel rows={filterRows} column={column}/>
      </KTCard>
    </div>
  )
}

export default UserPayments
