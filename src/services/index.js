import axios from "axios";

const Serie = (filterInput) => {
  const api = `https://rickandmortyapi.com/api/character`;
  return (
    axios
      .get(api)
      .then((res) => res.data)
      // .then((data) =>
      //   filterInput.length
      //     ? data.results.filter(
      //         (ele) =>
      //           ele.name.toLowerCase().indexOf(filterInput.toLowerCase()) >= 0
      //       )
      //     : data.results
      // )
      .then((data) => data.results)
      .catch((err) => console.log("Horror ...", err))
  );
};

export default Serie;
