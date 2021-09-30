import React from "react";

const Card = ({ data }) => {
  const setStatusClass = (status) => {
    let defaultClass = "";
    switch (status) {
      case "Alive":
        defaultClass = "success";
        break;
      case "Dead":
        defaultClass = "danger";
        break;
      default:
        defaultClass = "secondary";
        break;
    }
    return defaultClass;
  };
  return (
    <div className={`d-flex m-3 border bg-light rounded-3 `}>
      <div>
        <img src={data.image} alt="" />
      </div>
      <div className="text-start p-3">
        <h3>{data.name}</h3>
        <div className="py-3">
          <p>
            <strong>Gender: </strong>
            {data.gender}
          </p>
          <p>
            <strong>Origin: </strong>
            {data.origin.name}
          </p>
          <p>
            <strong>Species: </strong>
            {data.species}
          </p>
          <div className="d-flex">
            <p className="py-1">
              <strong>Status: </strong>
            </p>
            <p
              className={`bg-${setStatusClass(
                data.status
              )} rounded-3 text-white mx-2 py-1 px-3`}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
