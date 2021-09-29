import axios from "axios";

const Serie = () => {
  const api = `https://rickandmortyapi.com/api/character`;
  return axios
    .get(api)
    .then((res) => res.data)
    .then((data) => data.results)
    .catch((err) => console.log("Horror ...", err));
};

export default Serie;
