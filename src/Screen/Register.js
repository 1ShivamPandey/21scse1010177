import React, { useState } from "react";
import axios from "axios";
export default function Register() {
  const [response, setResponse] = useState(null);

  const postData = async () => {
    const data = {
      companyName: "goMart",
      ownerName: "Rahul",
      Rollno: "1",
      ownerEmail: "rahul@abc.edu",
      accesCode:"FKDLjg"
    };
    try {
      const res = await axios.post("http://20.244.56.144/test/Register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>This is Registration page</h1>
        <button onClick={postData}>
          <p>Register</p>
        </button>
      </div>
    </div>
  );
}
