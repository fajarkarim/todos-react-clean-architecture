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

const INITIAL_STATE = new Todos();
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
const createTodosReducer = (content: string) => {
  const interactor = new TodosInteractors();
  interactor.create(content);
  return interactor.todos.list;
};

const updateTodosReducer = (id: number, newContent: string) => {
  const interactor = new TodosInteractors();
  interactor.update(id, newContent);
  return interactor.todos.list;
};

const removeTodosReducer = (id: number) => {
  const interactor = new TodosInteractors();
  interactor.remove(id);
  return interactor.todos.list;
};

export const todosReducer = (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case CREATE:
      return createTodosReducer(action.content);
    case UPDATE:
      return updateTodosReducer(action.id, action.content);
    case REMOVE:
      return removeTodosReducer(action.id);
    default:
      return state;
  }
};
