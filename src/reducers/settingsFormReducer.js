const initState = JSON.parse(localStorage.getItem("popupGeneralSettings")) || 
{
    headline: "",
    description: "",
    successMessage: ""
};

export const settingsFormReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "SET_HEADLINE":
        return {...state, headline:payload};
      case "SET_DESCRIPTION":
        return {...state, description:payload};
      case "SET_SUCCESS_MESSAGE":
        return {...state, successMessage:payload};
      default:
        return state;
    }
  };