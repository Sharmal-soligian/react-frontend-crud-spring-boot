import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {

  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, [users]);

  const loadUsers = async () => {
    const res = await axios.get('http://localhost:8080/api/v1/users');
    setUsers(res.data);
  }

  const handleDelete = async (id) => {
    try {
      axios.delete(`http://localhost:8080/api/v1/user/${id}`);
      loadUsers();
    } catch (err) {
      console.error('Error deleting User', err);
    }
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{ index + 1 }</th>
                <td>{ user.name }</td>
                <td>{ user.username }</td>
                <td>{ user.email }</td>
                <td>
                  <Link className="btn btn-info mx-2" to={`viewuser/${user.id}`}>View</Link>
                  <Link to={`/edituser/${user.id}`} className="btn btn-outline-info mx-2">Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
