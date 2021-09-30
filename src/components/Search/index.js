import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../redux/data";
import { getSerie } from "../../redux/serie";

import "./index.css";

const Search = () => {
  const [input, stateInput] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    stateInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getSerie(input));
  };

  useEffect(() => {}, [dispatch]);

  return (
    <form className="filter-form" onSubmit={onSubmit}>
      <input
        className="form-control search"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
      />
      <button className="btn btn-outline-success" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default Search;
