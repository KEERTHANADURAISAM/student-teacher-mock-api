import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Base from "../Base/Base";
import "./Student.css";

export default function Student() {
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
        errors.course = "please enter a course name";
      }
      if (values.email === "") {
        errors.email = "please enter a  E-mail";
      }
      if (values.phno === "") {
        errors.phno = "please enter a Ph_no";
      }
     if (values.age === "") {
        errors.age = "please enter a  age";
      }
      if (values.bloodgrp === "") {
        errors.bloodgrp = "please enter a  bloodgrp";
      }

      return errors;
    },
    onSubmit:async (values) => {
      let student=await axios.post("https://63ae58f93e465169166fab20.mockapi.io/student",values)
   alert("student details created")
   navigate('/loadingdata')
    },
  });




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
                      Add User
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </form>
      </Grid>
    </Base>
  );
}
