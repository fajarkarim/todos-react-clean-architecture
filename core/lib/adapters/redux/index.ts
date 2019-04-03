/**
 * 1. import usecases here
 * 2. write actions
 * 3. combine to reducer here
 * 4. Take entities as redux store
 * */

import { Todos } from "../../entities";
import { TodosInteractors } from "../../useCases";
import { StateType } from "../../frameworks";

type StateSliceType = Todos;
type ActionType = {
  type: string;
  id: number;
  content: string;
};

const INITIAL_STATE = new Todos([]);
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";

export const todosSelector = (state: StateType) => state.todos;

/** actions */
export const createTodoAction = (content?: string) => ({
  type: CREATE,
  content
});

export const updateTodoAction = (id: number, content?: string) => ({
  type: UPDATE,
  id,
  content
});

export const removeTodoAction = (id: number) => ({
  type: REMOVE,
  id
});

/** reducers */
const createTodosReducer = (todos: StateSliceType, action: ActionType) => {
  const interactor = new TodosInteractors(todos.list);
  interactor.create(action.content);
  return new Todos(interactor.todos.list);
};

const updateTodosReducer = (todos: StateSliceType, action: ActionType) => {
  const interactor = new TodosInteractors(todos.list);
  interactor.update(action.id, action.content);
  return new Todos(interactor.todos.list);
};

const removeTodosReducer = (todos: StateSliceType, action: ActionType) => {
  const interactor = new TodosInteractors(todos.list);
  interactor.remove(action.id);
  return new Todos(interactor.todos.list);
};

export const todosReducer = (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case CREATE:
      return createTodosReducer(state, action);
    case UPDATE:
      return updateTodosReducer(state, action);
    case REMOVE:
      return removeTodosReducer(state, action);
    default:
      return state;
  }
};
