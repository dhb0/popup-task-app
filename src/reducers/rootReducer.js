import { combineReducers } from "redux";
import { settingsFormReducer } from "./settingsFormReducer";
import { userFormReducer } from "./userFormReducer";
import { uiGlobalReducer } from "./uiGlobalReducer";

export default combineReducers({
  settings: settingsFormReducer,
  userInfo: userFormReducer,
  uiGlobal: uiGlobalReducer
});