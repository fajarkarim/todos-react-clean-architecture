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

  handleOnSubmit = (): any => {
    const { todo } = this.state;
    let todos = new TodosInteractors();
    todos.create(todo);
    console.log(todos);
    let items = todos.readAll();
    console.log("items", items);
    // this.props.dispatchCreateTodo(todo);
  };

  componentWillReceiveProps(nextProps: any) {
    console.log("next props ", nextProps);
  }

  render() {
    const { todos } = this.props;
    // console.log("todos ", todos);
    const { todo } = this.state;

    return (
      <Layout>
        <Header />
        {/* {todos.list.map(todo => {
          const { value } = todo;
          return <Todo text={value} />;
        })} */}

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
  dispatchCreateTodo: createTodoAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
