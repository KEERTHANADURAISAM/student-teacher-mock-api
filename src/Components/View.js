import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Base from '../Base/Base';
import { Card, CardContent, Typography } from '@mui/material';

export default function View() {
  const params=useParams()
  const [user,setUser]=useState([])

useEffect(()=>{
  loaddata()
},[])
let loaddata=async()=>{
  try{
  let student=await axios.get(`https://63ae58f93e465169166fab20.mockapi.io/student/${params.id}`)
  setUser(student.data)
  }catch(err){
  }
}
  return (
  <Base>
  <Card sx={{maxWidth:545,marginLeft:80,marginTop:10,padding:5,textAlign:'justify',fontFamily:'monospace'}}>
    <CardContent>
      <Typography>
     <b>Student Name:</b>{user.name}
      </Typography>
      <Typography>
      <b>Course:</b>{user.course}
      </Typography>
      <Typography>
      <b>E-Mail:</b>{user.email}
      </Typography>
      <Typography>
      <b>Ph_No:</b>{user.phno}
      </Typography>
      <Typography>
      <b>Age:</b>{user.age}
      </Typography>
      <Typography>
      <b>Blood_grp:</b>{user.bloodgrp}
      </Typography>
    </CardContent>

  </Card>
  </Base>
  )
}
