import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Base from '../Base/Base'
import './Common.css';

export default function Common() {
    const navigate=useNavigate()
    const [student,setStudent]=useState([])
    const[isloading,setLoading]=useState(false)
useEffect(()=>{
loadStudent()
},[]);
const loadStudent=async()=>{
    setLoading(true)
let student=await axios.get("https://63ae58f93e465169166fab20.mockapi.io/student")
setStudent(student.data)
setLoading(false)

}
let userDelete=async(id)=>{
    try{
     await axios.delete(`https://63ae58f93e465169166fab20.mockapi.io/student/${id}`);
     loadStudent()
   }catch(err){
   }
   }
  return (
    <Base>
   
    <Grid container>
        <Grid item xs={12} sx={{my:5,mx:5}}>
        <Button variant='contained' onClick={()=>navigate('/home/dashboard')}>back to dashboard</Button>
            <Box className='container'>
                {isloading?<span>Loading...</span>:
                    
                <table>
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Student Name</th>
                            <th>Course</th>
                            <th>E-Mail</th>                    
                            <th>Ph_No</th>
                            <th>Age</th>
                            <th>Blood_grp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((student,idx)=>(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>{student.email}</td>
                            <td>{student.phno}</td>
                            <td>{student.age}</td>
                            <td>{student.bloodgrp}</td>
                            <td>
                                <Link to={`/student/edit/${student.id}`}>
                                <button variant='contained' className='btn-color1'>Edit</button></Link>
                                <Link to={`/loadingdata/student/${student.id}`}>
                                <button variant='contained' className='btn-color2'>View</button></Link>
                                <button variant='contained' className='btn-color3' onClick={()=>userDelete(student.id)}>Delete</button>
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
