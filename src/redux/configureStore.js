import { createStore, combineReducers } from "redux";
import { Reducer, initialState } from "./reducer";
import { createForms } from "react-redux-form";
import { initialFeedback } from "./forms";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      Reducer, // reducer
      initialState,
      ...createForms({
        sendMessage: initialFeedback,
      }),
    })
    // our initialState
  );

  return store;
};
