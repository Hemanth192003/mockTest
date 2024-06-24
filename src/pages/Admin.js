import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/appointments")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>The Appointment List</h1>
      <div>
        {data.map((ele) => (
          <div>
            <p key={ele.fullName}>Name: {ele.fullName}</p>
            <p key={`${ele.fullName}Service`}>Service: {ele.service}</p>
            <p key={`${ele._id}${ele.fullName}date`}>Date: {ele.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
