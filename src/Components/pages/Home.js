import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
function Home() {
  const Location=useLocation()
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    if(users.length===0){
    axios.get("http://localhost:3002/users")
    .then(Response=>Response.data)
    .then(res=>{setUsers([...res,Location.state])})
    console.log('hello');
    }
  //  setUsers([...users,Location.state])
  });
  // const loadUsers =  () => {
     
  // };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users &&  users.map((user,index)=>(
                    <tr>
                    <th scope="row">{index +1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {/* <td>{Location.state && Location.state.name}</td>
                    <td>{Location.state && Location.state.username}</td>
                    <td>{Location.state &&Location.state.email}</td> */}
                    <td>
                        <Link className="btn btn-primary me-2">View</Link>
                        <Link className="btn btn-outline-primary me-2" to='/users/edit'>Edit</Link>
                        <Link className="btn btn-danger">Delete</Link>
                    </td>
                    </tr>

                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
