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
        break;
    }
    return defaultClass;
  };
  return (
    <div className="col p-3" key={data.id}>
      <div className="row">
        <div className="col">
          <img src={data.image} alt="" />
        </div>
        <div className="col">
          <h3>{data.name}</h3>
          <div>
            <p>{data.gender}</p>
            <p>{data.origin.name}</p>
            <p>{data.species}</p>
            <p className={`bg-${setStatusClass(data.status)}`}>{data.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
