import { useState } from "react";

export const FriendList=(props)=>{
const {count} = props
const data = [];
const [textFields,setTextFields]=useState([])
console.log(count)
for( let i=0;i<count;i++)
{
  data.push(i)
}
const valueHandler=(e)=>
{
  console.log(e.target.value,e.target.name)
}
 
return(

  <>
  
  {  data.map((self)=>{
    return( <input type="text"
     name={`field_${self}`} 
     id={`field_${self}`} 
      onBlur = {valueHandler} />)
    
  })}
  
 {/* <div className="d-flex justify-content-start mt-4">
 <button type="btn" className="btn btn-primary" onClick={addFields}>Save</button>
 </div> */}

  
  
  
  
  </>
)
}