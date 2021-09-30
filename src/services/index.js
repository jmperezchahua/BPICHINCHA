import axios from "axios";

const Serie = (name) => {
  const api = `https://rickandmortyapi.com/api/character/?name=${name}`;
  return axios
    .get(api)
    .then((res) => res.data)
    .then((data) => data.results)
    .catch((err) => console.log("Horror ...", err));
};

export default Serie;
