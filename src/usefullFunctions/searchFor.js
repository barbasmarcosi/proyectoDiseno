import initalState from "../initialState/initialState";

const searchFor = (searchOn, id, field = "") => {
  return field
    ? initalState[`${searchOn}`].filter((search) => search.id === id)[0][
        `${field}`
      ]
    : initalState[`${searchOn}`].filter((search) => search.id === id)[0];
};

export default searchFor;
