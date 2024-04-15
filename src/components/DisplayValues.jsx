import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addValues } from "../ReduxSlice/SliceValues";
import { useNavigate } from "react-router";

const DisplayValues = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let dispatch = useDispatch();
  let history = useNavigate();

  function handlarClick(e) {
    e.preventDefault();
    let idvalue = uuid();
    let getid = idvalue.slice(0, 8);
    console.log(getid);
    let uniqueId = getid;
    let a = name;
    let b = age;
    dispatch(addValues({ id: uniqueId, name: a, age: b }));
    history("/");
  }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={(e) => handlarClick(e)}>CREATE</button>
    </div>
  );
};

export default DisplayValues;
