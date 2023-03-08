import { Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  let navigate=useNavigate()
  let student=()=>{
    navigate('./home/dashboard')
  }
  return (
 <div>
    <div className='img'>
        <h1>Welcome To School Management System</h1>
        
        <img src="http://www.pschoolonline.in/Content/BlogImage/23_Benefits-of-School-Management-ERP-Software---Get-Free-Demo-Now.jpg"></img>
        </div>
      <div >
        
       <Button variant='contained' className='btn' onClick={student}>Let's Start!</Button>
       </div>
       </div>
    
  )
}

export default Home