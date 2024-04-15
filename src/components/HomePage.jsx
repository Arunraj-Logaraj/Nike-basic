import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteValues } from "../ReduxSlice/SliceValues";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let customer = useSelector((state) => state.customer);
  let dispatch = useDispatch();
  let history = useNavigate();

  function handlarDelete(id) {
    dispatch(deleteValues(id));
    history("/");
  }

  function handleEdit(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  return (
    <div>
      <Link to="/create">
        <button>CREATE</button>
      </Link>
      <table>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        {customer.length > 0
          ? customer.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <Link to="/edit">
                    <button
                      onClick={() => handleEdit(item.id, item.name, item.age)}
                    >
                      EDIT
                    </button>
                  </Link>
                  <button onClick={() => handlarDelete(item.id)}>DELETE</button>
                </tr>
              );
            })
          : "NO"}
      </table>
    </div>
  );
};

export default HomePage;
