import {
  AppBar,
  Avatar,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import "./Base.css";
import { useNavigate } from "react-router-dom";


export default function Base({children}) {
  const navigate=useNavigate();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Box>
            <AppBar position="relative">
              <Toolbar variant="dense" >
                <Typography >
                 
                  <lable className="head"><SchoolIcon /> Welcome To School Management</lable>
                
                </Typography>
                <div className="btn">  
                <span onClick={()=>navigate('/home/dashboard')}>Home</span>
                <span  onClick={()=>navigate('/loadingdata')}> Student</span>
                <span  onClick={()=>navigate('/staffpage')}> Teacher</span>
                <Avatar alt="K"  sx={{color:'black',backgroundColor:'white'}}  /> 
               
                    </div> 
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <div>
            {children}
        </div>
       
      </Grid>
    </div>
  );
}
