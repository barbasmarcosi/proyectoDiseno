import toGetFormValues from "./toGetFormValues";

const formValidator = (
  setModal,
  message,
  messageType,
  messageVisible,
  successMessage,
  ref,
  multiple,
) => {
  const formLength = ref.current.children.length;
  let isNotComplete = false;
  for (let i = 0; i < formLength - 1; i++) {
    if (!toGetFormValues(i, ref).length) {
      isNotComplete = true;
    }
  }
  if (!isNotComplete) {
    if (!multiple) {
      setModal(false);
    }
    messageType("success");
    message(successMessage);
    messageVisible(false);
    setTimeout(() => {
      messageVisible(true);
    }, 5000);
    return true;
  } else {
    messageType("warning");
    message("Hay campos sin completar");
    messageVisible(false);
    setTimeout(() => {
      messageVisible(true);
    }, 5000);
    return false;
  }
};

export default formValidator;
