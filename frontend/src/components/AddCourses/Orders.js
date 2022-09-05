import React, { useState } from "react";

import "./AddCourses.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { addCourses } from "../../JS/actions/coursesActions";
import Typography from "@mui/material/Typography";
// Generate Order Data
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      { new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Orders() {
  const user=useSelector(state=>state.userReducer.currentUser)
  /*const [state, setState] = useState({
    courses: "",
    former: "",
    email: "",
    date: "",
    ammount: "",
    sent: false,
    buttonText: "Add Courses",
    emailError: false,
  });
  const resetForm = () => {
    setState({
      courses: "",
      former: "",
      email: "",
      date: "",
      ammount: "",
      buttonText: "Add Courses",
    });
    setTimeout(() => {
      setState({ ...state, Add: false });
    }, 3000);
  };*/

  /*const [courses, setCourses] = useState("");
  const [former, setFormer] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [ammount, setAmmount] = useState(0);*/
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      courses: data.get("courses"),
      former: data.get("former"),
      email: data.get("email"),
      date: data.get("date"),
      ammount: data.get("ammount"),
    });

    dispatch(
      addCourses(
        {
          courses: data.get("courses"),
          former: data.get("former"),
          email: data.get("email"),
          date: data.get("date"),
          ammount: data.get("ammount"),
        },
        navigate
      )
    )
  };

  return (
    <div className="container">
      <form
        id="contactus"
        onSubmit={handleSubmit}
        style={{
          width: "900px",
          marginTop:20,
          marginLeft: -250,
          height: 500,
        }}
      >
        <h3>Add Courses</h3>
        <fieldset>
          <input
            placeholder="courses"
            type="text"
            tabIndex={1}
            required
            name="courses"
            autoFocus
            //onChange={(e) => setCourses(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            value={user.fullName}
            type="text"
            tabIndex={1}
            required
            autoFocus
            name="former"
            readOnly
            // onChange={(e) => setFormer(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            value={user.email}
            type="email"
            tabIndex={1}
            required
            name="email"
            readOnly
            //onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="date"
            type="date"
            label="jj/mm/aaaa"
            tabIndex={3}
            required
            name="date"
            //onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <input
            placeholder="Ammount"
            type="number"
            tabIndex={1}
            required
            name="ammount"
            //onChange={(e) => setAmmount(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button
            name="Add"
            type="submit"
            id="contactus-submit"
            data-submit="...Adding"
          >
            Add
          </button>
        </fieldset>
        
      </form>
      <Copyright />
    </div>
  );
}
