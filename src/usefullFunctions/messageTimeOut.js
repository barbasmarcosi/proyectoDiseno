const messageTimeOut = (messageVisible) => {
  setTimeout(() => {
    messageVisible(true);
  }, 5000);
  return false;
};

export default messageTimeOut;
