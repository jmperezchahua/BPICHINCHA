import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { data } from "../../redux/data";
import "./index.css";

const Body = () => {
  const [index, setIndex] = useState(0);
  const [pagination, setPagination] = useState(0);
  const dispatch = useDispatch();

  const dataApi = useSelector((state) => state.serie);
  const dataFront = useSelector((state) => state.data);

  const cards = (data_, position) => data_.slice(position, position + 6);

  useEffect(() => {
    if (dataApi.length) {
      dispatch(data(cards([...dataApi], index)));
    }
  }, [dispatch, dataApi, index]);

  return (
    <div>
      <Search />
      <button
        className="btn btn-warning"
        onClick={() => {
          if (index > 0) {
            setPagination(pagination - 1);
            setIndex(index - 6);
          }
        }}
      >
        <i class="bi bi-caret-left-square-fill"></i>
      </button>
      <button className="btn btn-outline-warning text-black" disabled>
        {pagination + 1}
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          if (index + 6 < dataApi.length) {
            setPagination(pagination + 1);
            setIndex(index + 6);
          }
        }}
      >
        <i class="bi bi-caret-right-square-fill"></i>
      </button>
      <div className="grid-container">
        {dataFront.length &&
          dataFront.map((ele, index) => <Card data={ele} key={index} />)}
      </div>
    </div>
  );
};

export default Body;
