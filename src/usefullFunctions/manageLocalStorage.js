import initialState from "../initialState/initialState.js";

const managesessionStorage = (type, entity, changes, id) => {
  const haveItems = sessionStorage.getItem(entity);
  if (!haveItems) {
    sessionStorage.setItem(
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
    sessionStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
  if (type === "post") {
    const maxLength = sessionStorage.getItem(`${entity}Length`)
      ? JSON.parse(sessionStorage.getItem(`${entity}Length`))
      : 0;
    const itemsLength = JSON.parse(haveItems).length;
    const newId = maxLength > itemsLength ? maxLength || 0 : itemsLength || 0;
    sessionStorage.setItem(`${entity}Length`, JSON.stringify(newId + 1));
    const newData = JSON.parse(haveItems).length
      ? [...JSON.parse(haveItems), { id: newId + 1, ...changes }]
      : [{ id: newId + 1, ...changes }];

    sessionStorage.setItem(entity, JSON.stringify(newData));

    return newData;
  }
  if (type === "patch") {
    const useful = JSON.parse(haveItems).filter((element) => element.id !== id);
    const newData =
      JSON.parse(haveItems).length - 1
        ? [...useful, { ...changes }]
        : [changes];
    sessionStorage.setItem(entity, JSON.stringify(newData));
    return newData;
  }
};

export default managesessionStorage;
