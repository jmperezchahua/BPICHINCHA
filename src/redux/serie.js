import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services";

export const getSerie = createAsyncThunk("GET-SERIE", (value) => api(value));

export default createReducer(
  {},
  {
    [getSerie.fulfilled]: (state, action) => action.payload,
  }
);
