import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValues } from "../ReduxSlice/SliceValues";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const DisplayValues = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");

  let dispatch = useDispatch();
  let history = useNavigate();

  function handarClick(e) {
    e.preventDefault();

    let idValues = uuid();
    let uniqueId = idValues.slice(0, 8);
    let a = name;
    let b = age;
    dispatch(addValues({ id: uniqueId, name: a, age: b }));
    history("/");
  }

  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="">Age</label>
      <br />
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={(e) => handarClick(e)}>CREATE</button>
    </div>
  );
};

export default DisplayValues;
