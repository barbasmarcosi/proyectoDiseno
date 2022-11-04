import initialState from "../initialState/initialState";

const manageLocalStorage = (type, entity, changes, id) => {
  const haveItems = localStorage.getItem(entity);
  if (!haveItems) {
    localStorage.setItem(
      entity,
      initialState[entity]
        ? JSON.stringify(initialState[entity])
        : JSON.stringify([])
    );
  }
  console.log(initialState[entity]);
  if (type === "get") return JSON.parse(haveItems);
  if (type === "delete") {
    const newData = JSON.parse(haveItems).filter(
      (element) => element.id !== id
    );
    localStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
  if (type === "post") {
    const maxLength = localStorage.getItem(`${entity}Length`)
      ? JSON.parse(localStorage.getItem(`${entity}Length`))
      : 0;
    const itemsLength = JSON.parse(haveItems).length;
    const newId = maxLength > itemsLength ? maxLength || 0 : itemsLength || 0;
    localStorage.setItem(`${entity}Length`, JSON.stringify(newId + 1));
    const newData = JSON.parse(haveItems).length
      ? [...JSON.parse(haveItems), { id: newId + 1, ...changes }]
      : [{ id: newId + 1, ...changes }];

    localStorage.setItem(entity, JSON.stringify(newData));

    return newData;
  }
  if (type === "patch") {
    const useful = JSON.parse(haveItems).filter((element) => element.id !== id);
    const newData =
      JSON.parse(haveItems).length - 1
        ? [...useful, { ...changes }]
        : [changes];
    localStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
};

export default manageLocalStorage;
