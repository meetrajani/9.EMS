import React, { useState } from "react";

const Login = ({ setRole }) => {
  const url = "http://localhost:3001/posts";

  const [data, setdata] = useState([]);

  const chang = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const Submit = () => {
    console.log(data);
  };

  return (
    <div className="text-center d-flex justify-content-center mt-5">
      <div className="w-50">
        <form>
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
              value={data.role}
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

          <button
            onClick={Submit}
            className="btn btn-primary w-100 py-2"
            type="submit"
          >
            Sign in
          </button>

          <p className="mt-5 mb-3 text-body-secondary"></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
