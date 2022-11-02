import initialState from "../initialState/initialState";

const manageLocalStorage = (type, entity, changes, id) => {
  if (!localStorage.getItem(entity)) {
    localStorage.setItem(
      entity,
      initialState[entity]
        ? JSON.stringify(initialState[entity])
        : JSON.stringify([])
    );
  }
  if (type === "get") return JSON.parse(localStorage.getItem(entity));
  if (type === "delete") {
    const newData = JSON.parse(localStorage.getItem(entity)).filter(
      (element) => element.id !== id
    );
    localStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
  if (type === "post") {
    const newData = JSON.parse(localStorage.getItem(entity)).push(changes);
    localStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
  if (type === "patch") {
    const usefull = JSON.parse(localStorage.getItem(entity)).filter(
      (element) => element.id !== id
    );
    const newData = usefull.push(usefull);
    localStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
};

export default manageLocalStorage;
