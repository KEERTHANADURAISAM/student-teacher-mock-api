import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Base from '../Base/Base';
import { Card, CardContent, Typography } from '@mui/material';




export default function StaffView() {
    const params=useParams()
    const [staff,setUser]=useState([])
  
  useEffect(()=>{
    loaddata()
  },[])
  let loaddata=async()=>{
    try{
    let staff=await axios.get(`https://63ff3f15571200b7b7d92b4b.mockapi.io/staff/${params.id}`)
    setUser(staff.data)
    }catch(err){
    }
  }
  return (
    <Base>
    <Card sx={{maxWidth:545,marginLeft:80,marginTop:10,padding:5,textAlign:'justify',fontFamily:'monospace'}}>
      <CardContent>
        <Typography>
       <b>Staff Name:</b>{staff.name}
        </Typography>
        <Typography>
        <b>Department:</b>{staff.department}
        </Typography>
        <Typography>
        <b>Joining-Date:</b>{staff.joiningdate}
        </Typography>
        <Typography>
        <b>Ph_No:</b>{staff.phno}
        </Typography>
        <Typography>
        <b>Address:</b>{staff.address}
        </Typography>
        </CardContent>
  
    </Card>
    </Base>
  )
}
