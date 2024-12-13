import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_STUDENT_PROGESS,
  GET_STUDENT_PROGESS,
  POST_STUDENT_PROGESS,
  UPDATE_STUDENT_PROGESS,
} from "../../../redux-saga/student/action/action";

const Studentsubadmin = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.StudentReducer.student);

  // GET

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS });
  }, []);

  // POST
  const [data, setdata] = useState({
    id: Math.floor(Math.random() * 10000).toString(),
    student_name: "",
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    assigned_faculty: "",
    password: "",
    role: "student",
  });  

  const changedata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submit = () => {
    dispatch({ type: POST_STUDENT_PROGESS, paylod: data });
  };

  // DELETE

  const Deletestudent = (id) => {
    dispatch({ type: DELETE_STUDENT_PROGESS, paylod: id });
    // console.log(id);
  };

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
      {/* input data */}

      <div>
        <div>
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-success m-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ADD
            </button>
            {/* ADD STUDENT DATA */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Student
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
                      <label className="form-label fw-bold">Student Name : </label>
                      <input
                        type="text"
                        name="student_name"
                        onChange={changedata}
                        value={data.student_name}
                        className="form-control mt-2"
                        placeholder="Student Name"
                        required
                      />
                      <label className="form-label fw-bold">Title : </label>
                      <input
                        type="text"
                        name="title"
                        onChange={changedata}
                        value={data.title}
                        className="form-control mt-2"
                        placeholder="Student Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Description :{" "}
                      </label>
                      <input
                        type="text"
                        name="description"
                        onChange={changedata}
                        value={data.description}
                        className="form-control mt-2"
                        placeholder="Course Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Start Time :{" "}
                      </label>
                      <input
                        name="start_time"
                        onChange={changedata}
                        value={data.start_time}
                        type="date"
                        className="form-control mt-2"
                        placeholder="*****"
                        required
                      />
                      <label className="form-label mt-3 fw-bold">
                        End Time :{" "}
                      </label>
                      <input
                        name="end_time"
                        onChange={changedata}
                        value={data.end_time}
                        type="date"
                        className="form-control mt-2"
                        placeholder=""
                        required
                      />
                      <label className="form-label mt-3 fw-bold">
                        Assigned Faculty :{" "}
                      </label>
                      <input
                        name="assigned_faculty"
                        onChange={changedata}
                        value={data.assigned_faculty}
                        type="text"
                        className="form-control mt-2"
                        placeholder="Assigned Faculty Name"
                        required
                      />
                      <label className="form-label mt-3 fw-bold">
                        Password :{" "}
                      </label>
                      <input
                        name="password"
                        onChange={changedata}
                        value={data.password}
                        type="password"
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
                      onClick={submit}
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* UPDATE STUDENT DATA */}

            <div
              className="modal fade"
              id="examModal"
              tabIndex={-1}
              aria-labelledby="examModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Chang Student
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
                      <label className="form-label fw-bold">Title : </label>
                      <input
                        type="text"
                        name="title"
                        onChange={changeUdata}
                        value={Udata.title}
                        className="form-control mt-2"
                        placeholder="Title"
                        required
                      />
                      <label className="form-label fw-bold">
                        Description :{" "}
                      </label>
                      <input
                        type="text"
                        name="description"
                        onChange={changeUdata}
                        value={Udata.description}
                        className="form-control mt-2"
                        placeholder="Description"
                        required
                      />
                      <label className="form-label fw-bold">
                        Start Time :{" "}
                      </label>
                      <input
                        type="date"
                        name="start_time"
                        onChange={changeUdata}
                        value={Udata.start_time}
                        className="form-control mt-2"
                        placeholder="start_time"
                        required
                      />
                      <label className="form-label fw-bold">End Time : </label>
                      <input
                        type="date"
                        name="end_time"
                        onChange={changeUdata}
                        value={Udata.end_time}
                        className="form-control mt-2"
                        placeholder="end_time"
                        required
                      />
                      <label className="form-label fw-bold">
                        Assigned Teacher :{" "}
                      </label>
                      <input
                        type="text"
                        name="assigned_faculty"
                        onChange={changeUdata}
                        value={Udata.assigned_faculty}
                        className="form-control mt-2"
                        placeholder="assigned_faculty"
                        required
                      />
                      <label className="form-label fw-bold">Password : </label>
                      <input
                        type="password"
                        name="password"
                        onChange={changeUdata}
                        value={Udata.password}
                        className="form-control mt-2"
                        placeholder="password"
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
        </div>
      </div>

      {/* Sow Data */}

      <div>
        <div className="m-4 shadow rounded">
          <div className="table-responsive shadow-md rounded-lg">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Course Start Time End Time</th>
                  <th scope="col"> End Time</th>
                  <th scope="col">Assigned Faculty</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {student?.map((e, index) => (
                  <tr
                    className="bg-white text-center border-bottom"
                    key={index}
                  >
                    <td className="px-6 py-4 font-weight-bold">{e.title}</td>
                    <td className="px-6 py-4">{e.description}</td>
                    <td className="ps-6 py-4">{e.start_time}:</td>
                    <td className="pe-6 py-4">{e.end_time}</td>
                    <td className="px-6 py-4">{e.assigned_faculty}</td>
                    <td className="px-6 py-4">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => Editdata(e)}
                        data-bs-toggle="modal"
                        data-bs-target="#examModal"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => Deletestudent(e.id)}
                        className="btn btn-outline-danger ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentsubadmin;
