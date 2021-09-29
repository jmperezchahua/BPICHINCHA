import { createReducer, createAction } from "@reduxjs/toolkit";
export const data = createAction("GET-DATA-FRONT");

export default createReducer([], {
  [data]: (state, action) => action.payload,
});
