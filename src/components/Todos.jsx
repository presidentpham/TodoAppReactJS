import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const Todos = () => {
  const [todosState, setTodosState] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodosState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodos();
  }, []);
  const markComplete = (id) => {
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    setTodosState(newTodos);
  };
  const deleteTodo = async (id) => {
    // const newTodos = todosState.filter((todo) => todo.id !== id);
    // setTodosState(newTodos);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const newTodos = todosState.filter((todo) => todo.id !== id);
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  const addTodo = async (title) => {
    // const newTodos = [
    //   ...todosState,
    //   {
    //     id: uuidv4,
    //     title,
    //     complete: false,
    //   },
    // ];
    // setTodosState(newTodos);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          complete: false,
        }
      );
      const newTodos = [res.data, ...todosState];
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <AddTodo addTodo={addTodo} />
      {todosState.map((todo) => (
        <TodoItem
          todoProps={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </Fragment>
  );
};
export default Todos;
