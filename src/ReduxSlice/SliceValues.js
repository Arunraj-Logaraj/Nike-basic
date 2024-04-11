import { createSlice } from "@reduxjs/toolkit";
import dataValues from "../data";

let initialState = dataValues;
let SliceValues = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addValues(state, action) {
      state.push(action.payload);
    },
    deleteValues(state, action) {
      let deleteValue = state.filter((item) => item.id !== action.payload);
      return deleteValue;
    },
    addEdit(state, action) {
      const { id, name, age } = action.payload;
      const existingUser = state.find((item) => item.id == id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.age = age;
      }
    },
  },
});

export const { addValues, deleteValues, addEdit } = SliceValues.actions;
export default SliceValues.reducer;
