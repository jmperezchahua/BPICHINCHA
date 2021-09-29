import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../redux/data";

const Search = () => {
  const [input, stateInput] = useState("");
  const dispatch = useDispatch();
  const dataApi = useSelector((state) => state.serie);

  const filter = (data, input) =>
    data.filter(
      (ele) => ele.name.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );

  const onChange = (e) => {
    stateInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input && input.length) {
      if (dataApi) {
        const filterResult = filter(dataApi, input);
        if (filterResult.length) dispatch(data(filterResult));
      }
    } else {
      if (dataApi) dispatch(data(dataApi));
    }
  };

  return (
    <form className="d-flex text-center m-5" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
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
