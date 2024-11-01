import React, { useState } from "react";
import axios from "axios";

const TestPage = () => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const buttonClick = () => {
    axios
      .get(`${input}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container">
      <label htmlFor="input"></label>
      <input type="text" name="input" onChange={inputChange} />
      <button className="btn btn-primary" onClick={buttonClick}>
        test
      </button>
    </div>
  );
};

export default TestPage;
