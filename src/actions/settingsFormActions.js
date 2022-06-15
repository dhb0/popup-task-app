export const setHeadline = (str) => {
  return {
    type: "SET_HEADLINE",
    payload: str,
  };
};

export const setDescription = (str) => {
  return {
    type: "SET_DESCRIPTION",
    payload: str,
  };
};

export const setSuccessMessage = (str) => {
  return {
    type: "SET_SUCCESS_MESSAGE",
    payload: str,
  };
};
