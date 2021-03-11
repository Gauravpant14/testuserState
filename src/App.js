import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");

  const onInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");

  const onInputC = (event) => {
    setLastName(event.target.value);
  };

  const [email, setEmail] = useState("");

  const onInputCha = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");

  const onInputCh = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="head">REGISTRATION FORM</h1>
        Enter Your First Name{" "}
        <input
          className="one"
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => onInputChange(e)}
        />
        Enter Your Last Name
        <input
          className="two"
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => onInputC(e)}
        />
        Enter Your Email Address
        <input
          className="three"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => onInputCha(e)}
        />
        Enter Your Password
        <input
          className="four"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => onInputCh(e)}
        />
        <button
          className="btn"
          onClick={() => {
            let arr = {
              fName: `${firstName}`,
              lName: `${lastName}`,
              email: `${email}`,
             
            };

            fetch("http://localhost:8080/users", {
              method: "POST",
              body: JSON.stringify({
                name: arr.fName,
                email: arr.email,
                password: arr.password,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          }}
        >
          <b> Submit</b>
        </button>
      </header>
    </div>
  );
}

export default App;
