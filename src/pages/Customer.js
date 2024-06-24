import { useState } from "react";
import Axios from "axios";

function Customer() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  //const [responseMessage, setResponseMessage] = useState(""); // New state variable

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      // const response =
      await Axios.post("http://localhost:4000/insert", {
        fullName: name,
        service: service,
        date: date,
      });
      console.log("Appointment fixed!");
      //setResponseMessage(response.data);
      setDate("");
      setName("");
      setService("");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div>
      <h1>Online Appointment Sheduler</h1>
      <form onSubmit={submitHandle}>
        <label>Enter Name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Enter the Service:</label>
        <input
          value={service}
          type="text"
          onChange={(e) => {
            setService(e.target.value);
          }}
        />

        <label>Date and Time:</label>
        <input
          value={date}
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        <button>Book the Appointment</button>
      </form>
    </div>
  );
}

export default Customer;
