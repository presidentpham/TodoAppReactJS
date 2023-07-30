import { PropTypes } from "prop-types";
import { useState } from "react";
const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const addTodo = props.addTodo;
  const addTodoFormStyle = {
    display: "flex",
    margin: "0 10px 0",
  };
  const addTodoInputStyle = {
    flex: 9,
    padding: "5px",
  };
  const addTodoSubmitStyle = {
    flex: 1,
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
      <input
        type="text"
        name="title"
        placeholder="Enter your work ..."
        style={addTodoInputStyle}
        value={title}
        onChange={changeTitle}
      />
      <input
        type="submit"
        value="Add"
        className="btn"
        style={addTodoSubmitStyle}
      />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
