import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import serieReducer from "./serie";
import dataReducer from "./data";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    serie: serieReducer,
    data: dataReducer,
  },
});

export default store;
