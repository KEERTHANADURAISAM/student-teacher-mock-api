import { Card, CardContent, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Base from '../Base/Base'
import "./Dashboard.css";

export default function Dashboard() {
  const navigate=useNavigate();
  return (
    <Base>
    <Grid container>
<Grid item xs={12}>
  <Box className='card'>
    <Card onClick={()=>navigate('/student')} >
      <CardContent>
<div>
  <h1>👩‍🎓👩‍🎓👩‍🎓 STUDENT </h1>
  </div>
        </CardContent>

    </Card>
    <Card onClick={()=>navigate('/staffadd')}>
      <CardContent sx={{padding:1}}>
  <div>
    <h1>👩‍🏫👩‍🏫👩‍🏫 MENTOR </h1>
  </div>
 
  
      </CardContent>

    </Card>
    <Card sx={{maxWidth:400}}onClick={()=>navigate('/rewards')}>
      <CardContent>
          <div>

  <h1>👑👑👑  REWARDS</h1>
  </div>
  
      </CardContent>

    </Card>
  </Box>
</Grid>
    </Grid>
    </Base>
  )
}
