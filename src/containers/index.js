import "./index.css";
import Header from "./Header";
import Body from "./Body";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getSerie } from "../redux/serie";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerie());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
