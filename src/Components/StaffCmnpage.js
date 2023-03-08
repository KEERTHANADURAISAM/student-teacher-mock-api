import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Base from '../Base/Base';

export default function StaffCmnpage() {
    const [staff,setStudent]=useState([])
    const[isloading,setLoading]=useState(false)
useEffect(()=>{
loadStudent()
},[]);
const loadStudent=async()=>{
    setLoading(true)
let staff=await axios.get("https://63ff3f15571200b7b7d92b4b.mockapi.io/staff")
setStudent(staff.data)
setLoading(false)

}
let userDelete=async(id)=>{
    try{
     await axios.delete(`https://63ff3f15571200b7b7d92b4b.mockapi.io/staff/${id}`);
     loadStudent()
   }catch(err){
   }
   }
  return (
    <Base>
    <Grid container>
        <Grid item xs={12}>
            <Box className='container'>
                {isloading?<span>Loading...</span>:
                <table>
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Staff Name</th>
                            <th>department</th>
                            <th>Joining-Date</th>                    
                            <th>Ph_No</th>
                            <th>Address</th>                       
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((staff,idx)=>(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{staff.name}</td>
                            <td>{staff.department}</td>
                            <td>{staff.joiningdate}</td>
                            <td>{staff.phno}</td>
                            <td>{staff.address}</td>
                           <td>
                                <Link to={`/staffpage/edit/${staff.id}`}>
                                <button variant='contained' className='btn-color1'>Edit</button></Link>
                                <Link to={`/staffpage/view/${staff.id}`}>
                                <button variant='contained' className='btn-color2'>View</button></Link>
                                <button variant='contained' className='btn-color3' onClick={()=>userDelete(staff.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
}
            </Box>
        </Grid>

    </Grid>

    </Base>
  )
}
