import './EditStd.css';
import React, { useEffect } from 'react'
import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { useFormik } from 'formik';
import Base from '../Base/Base';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditStd() {
  const params = useParams()
const navigate=useNavigate()


  let formik = useFormik({
    initialValues: {
      name: "",
      course: "",
      email: "",
      phno: "",
      age: "",
      bloodgrp: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "please enter a name";
      }
      if (values.course === "") {
        errors.course = "please enter a course ";
      }
      if (values.email === "") {
        errors.email = "please enter a  E-mail";
      }
      if (values.phno === "" && values.phno<10) {
        errors.phno = "please enter a  Ph_no";
      }
      if (values.age === "") {
        errors.age = "please enter a  age";
      }
      if (values.bloodgrp === "") {
        errors.bloodgrp = "please enter a  bloodgrp";
      }

      return errors;
    },
    // update the values
    onSubmit: async(values) => {
      await axios.put(`https://63ae58f93e465169166fab20.mockapi.io/student/${params.id}`,values)
   alert("student details updated successfully")
  navigate('/loadingdata') 
  },


  });

  // get the data
  useEffect(()=>{
  loaduser();
  },[])
  let loaduser=async()=>{
    try{
let std=await axios.get(`https://63ae58f93e465169166fab20.mockapi.io/student/${params.id}`)
formik.setValues({
  name: std.data.name,
  course: std.data.course,
  email:std.data. email,
  phno: std.data.phno,
  age: std.data. age,
  bloodgrp: std.data.bloodgrp
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
                <label>Student Name</label>
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
                <label>Course</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  name="course"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.course}</span>
                <br></br>
                <label>E-mail</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.email}</span>
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

                <label>Age</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  name="age"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.age}</span>
                <br></br>

                <label>Blood-Grp</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.bloodgrp}
                  onChange={formik.handleChange}
                  name="bloodgrp"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.bloodgrp}</span>
                <br></br>
                <br></br>
                <div>
                  <Button
                    variant="contained"
                    className="btn"
                    type="submit"
                    value="submit"
                    disabled={!formik.isValid}
                  >
                    Update
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
