import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENT_PROGESS, UPDATE_STUDENT_PROGESS } from "../../redux-saga/student/action/action";

const   Student_studen = () => {
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
      assignments_file: Udata.assignments_file,
      role: "student",
    };

    dispatch({ type: UPDATE_STUDENT_PROGESS, paylod: send });
  };
  return (
    <div>
      <div className="">
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
                  <label className="form-label fw-bold">Assignments:</label>
                  <input
                    type="file"
                    name="assignments_file"
                    onChange={changeUdata}
                    value={Udata.assignments_file}
                    className="form-control mt-2"
                    placeholder="assignments_file"
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
      <div className="m-4 shadow rounded">
        <div className="table-responsive shadow-md rounded-lg">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Assigned Faculty</th>
                <th scope="col">Your Course</th>
                <th scope="col">Description</th>
                <th scope="col">Assignments</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {student?.map((e, index) => (
                <tr className="bg-white text-center border-bottom" key={index}>
                  <td className="px-6 py-4 font-weight-bold">
                    {e.student_name}
                  </td>
                  <td className="px-6 py-4">{e.assigned_faculty}</td>
                  <td className="px-6 py-4 font-weight-bold">{e.title}</td>
                  <td className="px-6 py-4">{e.description}</td>
                  <td className="px-6 py-4">{e.assignments || "none"}</td>
                  <td className="px-6 py-4">
                    <button
                      className="btn btn-outline-success"
                      data-bs-toggle="modal"
                      data-bs-target="#examModal"
                      onClick={() => Editdata(e)}
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

export default Student_studen;
