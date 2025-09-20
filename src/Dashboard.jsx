import React, { useState, useEffect } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
  if (username) {
    const formattedUsername = username.replace(/\s+/g, '');
    fetch(`https://rp2backend.vercel.app/Dashboard?formattedUsername=${formattedUsername}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error("Fetch error:", err));
  }
}, [username]);


  if (!username) return <h2>No user logged in</h2>;
  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Dashboard</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Type</th>
            <th>Status</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.ID}</td>
            <td>{user.Name}</td>
            <td>{user.Country}</td>
            <td>{user.Gender}</td>
            
            <td>
              {user.DateOfBirth 
                ? new Date(user.DateOfBirth).toLocaleDateString() 
                : 'Not available'}
            </td>
            <td>{user.Type}</td>
            <td>{user.Status}</td>
            <td>{user.Risk}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
