
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
import TablePagination from '@mui/material/TablePagination';
import axios from "axios";
import { errorMonitor } from 'events';
import CircularProgress from '@mui/material/CircularProgress';

import LinearProgress from '@mui/material/LinearProgress';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const GenralTabel = (props) => {
const {rows,column}=props;
const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
    
   

       <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
        <TableRow>
            {column.map((el,index)=>{
               return(
                  
                    <TableCell key={index+123} align="center" sx={{fontWeight:600,fontSize:15,color:"grey"}}>{el.name}</TableCell>
                    
               )
               })}
               </TableRow>
            
          
        </TableHead>
        <TableBody>
        {rows .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((el,index)=>{
         let data={};
         let data2=[];
         for(let i=0;i<Object.keys(el).length;i++)
         {
            data = Object.keys(el)[i];
            data2[i]=el[data]
            

         }
         
         
               return(
                  <>
                  <TableRow key={index+1234} tabIndex={-1}>
                     {data2.map((els,index)=>{
                        return <TableCell key={index+13} align="center" style={{fontSize:13}}>{els}</TableCell>;
                     })}
                  </TableRow>
                  
                  </>
                    
                    
               )
               })}
         
        </TableBody>
      </Table>
      
    </TableContainer>
    <div>
    <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        
        
      />
    </div>
      </div>
  )
}





