export const setName = (str) => {
  return {
    type: "SET_NAME",
    payload: str,
  };
};

export const setEmail = (str) => {
  return {
    type: "SET_EMAIL",
    payload: str,
  };
};

export const setSelectedFont = (str) => {
  return {
    type: "SET_SELECTED_FONT",
    payload: str,
  };
};
