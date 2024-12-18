import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_SUBADMIN_PROGESS,
  POST_SUBADMIN_PROGESS,
} from "../../../redux-saga/subadmin/action/action";
import { DELETE_SUBADMIN_PROGESS } from "../../../redux-saga/subadmin/action/action";
const Subadmins = () => {
  const dispatch = useDispatch();
  const subadmin = useSelector((state) => state.SubadminReducer.subadmin);

  // GET SUBADMIN

  useEffect(() => {
    dispatch({ type: GET_SUBADMIN_PROGESS });
  }, []);

  // POST SUBADMIN

  const [add, setadd] = useState({
    id: JSON.stringify(Math.floor(Math.random() * 10000)),
    admin_name: "",
    password: "",
    role: "admin",
  });

  const changedata = (e) => {
    setadd({ ...add, [e.target.name]: e.target.value });
  };
  const submit = () => {
    dispatch({ type: POST_SUBADMIN_PROGESS, paylod: add });
  };

  // DELETE SUBADMIN

  const Deletesubadmin = (id) => {
    dispatch({ type: DELETE_SUBADMIN_PROGESS, paylod: id });
  };

  return (
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
          {/* Modal */}
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
                    Add Admin
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
                    <label className="form-label fw-bold">
                      Admin Name :{" "}
                    </label>
                    <input
                      type="text"
                      name="admin_name"
                      onChange={changedata}
                      className="form-control mt-2"
                      placeholder="admin Name"
                      required
                    />

                    <label className="form-label mt-3 fw-bold">
                      Password :{" "}
                    </label>
                    <input
                      name="password"
                      onChange={changedata}
                      type="password"
                      className="form-control mt-2"
                      placeholder="*****"
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
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subadmin page */}

          <div className="m-4 shadow rounded">
            <div className="table-responsive shadow-md rounded-lg">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Admin Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subadmin?.map((e, index) => (
                    <tr
                      className="bg-white text-center border-bottom"
                      key={index}
                    >
                      <td className="px-6 py-4 font-weight-bold">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{e.admin_name}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => Deletesubadmin(e.id)}
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
    </div>
  );
};

export default Subadmins;
