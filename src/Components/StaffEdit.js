import React, { useEffect } from 'react'
import './EditStd.css';
import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Base from "../Base/Base";




export default function StaffEdit() {
    const navigate=useNavigate()
    const params =useParams()
    let formik = useFormik({
      initialValues: {
        name: "",
        department: "",
        joiningdate: "",
        phno: "",
        address: ""
       
      },
      validate: (values) => {
        let errors = {};
        if (values.name === "") {
          errors.name = "please enter a name";
        }
        if (values.department === "") {
          errors.department = "please enter a Department";
        }
        if (values.joiningdate === "") {
          errors.joiningdate = "please enter a  Joining-Date";
        }
        if (values.phno === "") {
          errors.phno = "please enter a Ph_no";
        }
       if (values.address === "") {
          errors.address = "please enter a  Address";
        }

  
        return errors;
      },
      // update the values
      onSubmit: async(values) => {
        await axios.put(`https://63ff3f15571200b7b7d92b4b.mockapi.io/staff/${params.id}`,values)
     alert("staff details updated successfully")
    navigate('/staffpage') 
    },
  
  
    });
  
    // get the data
    useEffect(()=>{
    loaduser();
    },[])
    let loaduser=async()=>{
      try{
  let std=await axios.get(`https://63ff3f15571200b7b7d92b4b.mockapi.io/staff/${params.id}`)
  formik.setValues({
    name: std.data.name,
    department: std.data.department,
    joiningdate:std.data. joiningdate,
    phno: std.data.phno,
    address: std.data. address,
   
  }) 
  }catch(err){
  
    }
  }
  
  
  return (
    <Base>
    <Grid container className="container">
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12}>
          <Box>
            <Card>
              <CardContent>
                <h1>Welcome To User Page</h1>
                <label>User Name</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.name}</span>
                <br></br>
                <label>Department</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  name="department"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.department}</span>
                <br></br>
                <label>Joining-Date</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.joiningdate}
                  onChange={formik.handleChange}
                  name="joiningdate"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.joiningdate}</span>
                <br></br>
                <label>Ph_Number</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.phno}
                  onChange={formik.handleChange}
                  name="phno"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.phno}</span>
                <br></br>

                <label>Address</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  name="address"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.address}</span>
               
                <br></br>
                
                <div>
                  <Button
                    variant="contained"
                    className="btn"
                    type="submit"
                    value="submit"
                    disabled={!formik.isValid}
                  >
                    Update User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </form>
    </Grid>
  </Base>
  )
}
