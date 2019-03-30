import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Todos } from "../entities";
import { todosReducer } from "../adapters/redux";

export type StateType = {
  todos: Todos;
};

const reducers = {
  todos: todosReducer
};

export const configureStore = () => {
  const middleware = [];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  return createStore(
    combineReducers(reducers as any),
    applyMiddleware(...middleware)
  );
};
