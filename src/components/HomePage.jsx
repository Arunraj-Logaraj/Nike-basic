import React from "react";
import dataValues from "../data";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteValues } from "../ReduxSlice/SliceValues";

const HomePage = () => {
  let customer = useSelector((state) => state.customer);
  let dispatch = useDispatch();

  function handlarDelete(id) {
    dispatch(deleteValues(Array.isArray(id) ? id.map((idItem) => idItem) : id));
  }

  function handlarEdit(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  return (
    <div className="parentStyle">
      <Link to="/create">
        <button>CREATE</button>
      </Link>

      <table>
        <tr>
          <div>
            <th>NAME</th>
            <th>AGE</th>
          </div>
        </tr>
        <tr>
          {customer.length > 0
            ? customer.map((item, index) => {
                return (
                  <div key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <Link to="/edit">
                      <button
                        onClick={() =>
                          handlarEdit(item?.id, item?.name, item?.age)
                        }
                      >
                        EDIT
                      </button>
                    </Link>
                    <button onClick={() => handlarDelete(item.id)}>
                      DELETE
                    </button>
                  </div>
                );
              })
            : "NO"}
        </tr>
      </table>
    </div>
  );
};

export default HomePage;
