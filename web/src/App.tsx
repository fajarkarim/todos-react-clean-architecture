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

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
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
    try {
      this.props.dispatchCreateTodo(todo);
      this.clearInput();
    } catch (e) {
      alert(e.message);
    }
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
      <ErrorBoundary>
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
      </ErrorBoundary>
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
