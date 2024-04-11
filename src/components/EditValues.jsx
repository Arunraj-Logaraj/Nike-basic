import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValues, addEdit } from "../ReduxSlice/SliceValues";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import dataValues from "../data";

const EditValues = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [id, setId] = useState(0);

  let dispatch = useDispatch();
  let history = useNavigate();

  let customerData = useSelector((state) => state.customer);
  let index = customerData.find((item) => item.id == id);

  function handarClick(e) {
    e.preventDefault();

    dispatch(
      addEdit({
        id,
        name,
        age,
      })
    );
    history("/");
  }

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedName = localStorage.getItem("Name");
    const storedAge = localStorage.getItem("Age");

    setId(storedId);
    setName(storedName);
    setAge(storedAge);
  }, []);

  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="">Age</label>
      <br />
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={(e) => handarClick(e)}>CREATE</button>
    </div>
  );
};

export default EditValues;
