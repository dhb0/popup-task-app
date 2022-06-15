const initState = {
  fonts: [],
};

export const uiGlobalReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_FONTS":
      return { ...state, fonts: payload };
    default:
      return state;
  }
};
