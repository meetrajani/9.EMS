import axios from "axios";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Subadmins from "../admin/body/Subadmins";
import Facultysubadmin from "../admin/body/Facultyadmin";
import Studentsubadmin from "../admin/body/Studentadmin";
import Asidebar from "../common/Asidebar";
import { admin } from "../common/Data/sidebarData";
import Header from "../common/Header";

const Login = ({ setRole }) => {
  const url = "http://localhost:3001";

  const [Udata, setUdata] = useState({
    email: "",
    password: "",
    role: "student", // Default role is 'student'
  });

  const chang = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => {
      const data = res.data[0];

      if (Udata.role === "admin") {
        const admin = data.subadmin.find(
          (admin) =>
            admin.admin_name === Udata.email &&
            admin.password === Udata.password
        );
        if (admin) {
          alert("Admin logged in successfully");
          
        } else {
          alert("Invalid Admin credentials");
        }
      } else if (Udata.role === "faculty") {
        const faculty = data.faculty.find(
          (faculty) =>
            faculty.faculty_name === Udata.email &&
            faculty.password === Udata.password
        );
        if (faculty) {
          alert("Faculty logged in successfully");
          setRole("faculty"); // role update karna
        } else {
          alert("Invalid Faculty credentials");
        }
      } else if (Udata.role === "student") {
        const student = data.student.find(
          (student) =>
            student.student_name === Udata.email &&
            student.password === Udata.password
        );
        if (student) {
          alert("Student logged in successfully");
          setRole("student"); // role update karna
        } else {
          alert("Invalid Student credentials");
        }
      }
    });
  };

  return (
    <div>
      <div className="text-center d-flex justify-content-center mt-5">
        <div className="w-50">
          <form onSubmit={Submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating my-1">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                onChange={chang}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating my-1">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={chang}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating my-1">
              <select
                className="form-select"
                id="floatingRole"
                name="role"
                onChange={chang}
                value={Udata.role}
              >
                <option value="admin">Admin</option>
                <option value="faculty">Faculty</option>
                <option value="student">Student</option>
              </select>
              <label htmlFor="floatingRole">Select Role</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>

            <p className="mt-5 mb-3 text-body-secondary"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
