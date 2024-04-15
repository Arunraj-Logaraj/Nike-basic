import { createSlice } from "@reduxjs/toolkit";
import dataValues from "./../data";

let initialState = dataValues;

let sliceValues = createSlice({
  name: "customerName",
  initialState,
  reducers: {
    addValues(state, action) {
      state.push(action.payload);
    },
    deleteValues(state, action) {
      let returnId = state.filter((item) => item.id !== action.payload);
      return returnId;
    },
    editValues(state, action) {
      let { id, name, age } = action.payload;
      let exisitedCode = state.find((item) => item.id == id);
      if (exisitedCode) {
        exisitedCode.name = name;
        exisitedCode.age = age;
      }
    },
  },
});

export const { addValues, deleteValues, editValues } = sliceValues.actions;
export default sliceValues.reducer;
