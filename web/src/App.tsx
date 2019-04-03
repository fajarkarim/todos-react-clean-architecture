import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import {
  StateType,
  createTodoAction,
  removeTodoAction,
  Todos,
  TodosInteractors
} from "core";

// COMPONENTS
import Layout from "./components/Layout";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";

interface Props {
  todos: Todos;
  dispatchCreateTodo: (content: string) => void;
  dispatchRemoveTodo: (id: number) => void;
}

interface States {
  todo: string;
}

class App extends Component<Props, States> {
  state = {
    todo: ""
  };

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      todo: e.target.value
    });
  };

  handleOnRemove = (id: number) => (e: EventListener) => {
    this.props.dispatchRemoveTodo(id);
  };

  handleOnSubmit = (): any => {
    const { todo } = this.state;
    this.props.dispatchCreateTodo(todo);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      todo: ""
    });
  };

  render() {
    const {
      todos: { list }
    } = this.props;

    const { todo } = this.state;

    return (
      <Layout>
        <Header />
        {list.map(todo => {
          const { value, id } = todo;
          return (
            <Todo
              text={value}
              key={"todo" + id}
              onRemove={this.handleOnRemove(id)}
            />
          );
        })}

        <Input
          onChange={this.handleOnChange}
          value={todo}
          onSubmit={this.handleOnSubmit}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  dispatchCreateTodo: createTodoAction,
  dispatchRemoveTodo: removeTodoAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
