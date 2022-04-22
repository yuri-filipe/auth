import { InterfaceType } from "./types";
import { Reducer } from "redux";
const initialState: InterfaceType = {
  theme: "dark",
  toggle_modal: false,
  toggle_backdrop: false,
  alert: null
};

const Index: Reducer<InterfaceType> = (state = initialState, action) => {
  switch (action.type) {
    case "initialState":
      return {
        ...initialState,
      };
    case "theme":
      return {
        ...state,
        theme: action.payload,
      };
    case "toggle_modal":
      return {
        ...state,
        toggle_modal: action.payload,
      };
    case "toggle_backdrop":
      return {
        ...state,
        toggle_backdrop: action.payload,
      };

    case "alert":
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default Index;
