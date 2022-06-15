const initState = {
  name: "",
  email: "",
  selectedFont: "",
};

export const userFormReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_EMAIL":
      return { ...state, email: payload };
    case "SET_SELECTED_FONT":
      return { ...state, selectedFont: payload };
    default:
      return state;
  }
};
