import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_STUDENT_PROGESS,
  UPDATE_STUDENT_PROGESS,
} from "../../redux-saga/student/action/action";

const Student = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.StudentReducer.student);

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS });
  }, []);

  // EDIT DATA

  const [Udata, setUdata] = useState([]);

  const Editdata = (e) => {
    setUdata(e);
    
  };

  const changeUdata = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const Editdatabtn = () => {
    const send = {
      id: Udata.id,
      student_name: Udata.student_name,
      title: Udata.title,
      description: Udata.description,
      assignments: Udata.assignments,
      start_time: Udata.start_time,
      end_time: Udata.end_time,
      assigned_faculty: Udata.assigned_faculty,
      password: Udata.password,
      role: "student",
    };

    dispatch({ type: UPDATE_STUDENT_PROGESS, paylod: send });
  };
  return (
    <div>
      <div className="">
        {/* UPDATE STUDENT DATA */}

        <div
          className="modal fade"
          id="examModal" // Updated modal id
          tabIndex={-1}
          aria-labelledby="examModalLabel" // Updated to match the modal title id
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="examModalLabel">
                  {" "}
                  {/* Updated title id */}
                  Change Student
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="p-2">
                  <label className="form-label fw-bold">Student Name:</label>
                  <input
                    type="text"
                    name="student_name"
                    onChange={changeUdata}
                    value={Udata.student_name}
                    className="form-control mt-2"
                    placeholder="Student Name"
                    required
                  />
                  <label className="form-label fw-bold">Title:</label>
                  <input
                    type="text"
                    name="title"
                    onChange={changeUdata}
                    value={Udata.title}
                    className="form-control mt-2"
                    placeholder="Title"
                    required
                  />
                  <label className="form-label fw-bold">Description:</label>
                  <input
                    type="text"
                    name="description"
                    onChange={changeUdata}
                    value={Udata.description}
                    className="form-control mt-2"
                    placeholder="Description"
                    required
                  />
                  <label className="form-label fw-bold">Assignments:</label>
                  <input
                    type="text"
                    name="assignments"
                    onChange={changeUdata}
                    value={Udata.assignments}
                    className="form-control mt-2"
                    placeholder="Assignments"
                    required
                  />
                  <label className="form-label fw-bold">Start Time:</label>
                  <input
                    type="date"
                    name="start_time"
                    onChange={changeUdata}
                    value={Udata.start_time}
                    className="form-control mt-2"
                    placeholder="Start Time"
                    required
                  />
                  <label className="form-label fw-bold">End Time:</label>
                  <input
                    type="date"
                    name="end_time"
                    onChange={changeUdata}
                    value={Udata.end_time}
                    className="form-control mt-2"
                    placeholder="End Time"
                    required
                  />
                  <label className="form-label fw-bold">
                    Assigned Teacher:
                  </label>
                  <input
                    type="text"
                    name="assigned_faculty"
                    onChange={changeUdata}
                    value={Udata.assigned_faculty}
                    className="form-control mt-2"
                    placeholder="Assigned Faculty"
                    required
                  />
                  <label className="form-label fw-bold">Password:</label>
                  <input
                    type="password"
                    name="password"
                    onChange={changeUdata}
                    value={Udata.password}
                    className="form-control mt-2"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={Editdatabtn}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 shadow rounded">
        <div className="table-responsive shadow-md rounded-lg">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Assignments</th>
                <th scope="col">Assigned Faculty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {student?.map((e, index) => (
                <tr className="bg-white text-center border-bottom" key={index}>
                  <td className="px-6 py-4 font-weight-bold">{e.student_name}</td>
                  <td className="px-6 py-4 font-weight-bold">{e.title}</td>
                  <td className="px-6 py-4">{e.description}</td>
                  <td className="px-6 py-4">{e.assignments|| "none"}</td>
                  <td className="px-6 py-4">{e.assigned_faculty}</td>
                  <td className="px-6 py-4">
                    <button
                      className="btn btn-outline-success"
                      data-bs-toggle="modal"
                      data-bs-target="#examModal" 
                      onClick={()=>Editdata(e)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
