const useLocalStorage = (place, value) => {
  const setLocalStorage = localStorage.setItem(place, JSON.stringify(value))
  const getLocalStorage =  JSON.parse(localStorage.getItem(place));
  return {setLocalStorage, getLocalStorage}
};

export default useLocalStorage;
