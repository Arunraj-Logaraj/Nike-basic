import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValues, editValues } from "../ReduxSlice/SliceValues";
import { useNavigate } from "react-router";

const EditValues = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [id, setId] = useState(0);

  let dispatch = useDispatch();
  let history = useNavigate();

  function handlarClick(e) {
    e.preventDefault();
    dispatch(
      editValues({
        id,
        name,
        age,
      })
    );
    history("/");
  }

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={(e) => handlarClick(e)}>EDIT</button>
    </div>
  );
};

export default EditValues;
