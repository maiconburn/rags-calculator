import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
};

function answers(state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case "ADD_TO_STATE":
      return { data: data };
    case "STATE_BY_GEOLOCATION":
      return {
        ...state,
        data: data,
      };
    case "STATE_BY_GOOGLE":
      return {
        data: data,
        initialState:
          state.initialState === undefined ? state.data : state.initialState,
      };
    case "FILTER_ALL":
      return { data: data };
    case "GET_STATE":
      return { state };
    case "FILTER_LEVEL":
      return {
        data: [...data.state.filter((element) => element.level == data.level)],
      };
    default:
      return state;
  }
}

const store = createStore(answers);

export default store;
