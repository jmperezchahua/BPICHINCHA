import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { data } from "../../redux/data";

const Body = () => {
  const dispatch = useDispatch();

  const dataApi = useSelector((state) => state.serie);
  const dataFront = useSelector((state) => state.data);

  useEffect(() => {
    if (dataApi) {
      dispatch(data(dataApi));
    }
  }, [dispatch, dataApi]);

  return (
    <div>
      <Search />
      <div></div>
      <div className="d-flex align-content-between justify-content-center flex-wrap">
        <div className="row">
          {dataFront.length &&
            dataFront.map((ele, index) => <Card data={ele} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Body;
