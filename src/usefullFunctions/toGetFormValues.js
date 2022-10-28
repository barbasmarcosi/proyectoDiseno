const toGetFormValues = (index, ref) =>
  ref.current.children[index].children[1].children[0].value;

  export default toGetFormValues;