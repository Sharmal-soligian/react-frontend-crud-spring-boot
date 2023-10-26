import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/v1/user/${id}`, user);
      navigate("/");
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handleSubmit}
          >
            Save Edit
          </button>
          <button type="submit" className="btn btn-danger mx-2">
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
