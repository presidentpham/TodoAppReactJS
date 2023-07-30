import { Fragment } from "react";
import { PropTypes } from "prop-types";
const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markComplete;
  const deleteTodo = props.deleteTodo;
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: !todo.complete ? "none" : "line-through",
    margin: "10px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  };
  const deleteButtonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px, 9px",
    borderRadius: "10px",
    cursor: "pointer",
    float: "right",
    height: "25px",
    width: "50px",
  };
  return (
    <Fragment>
      <div style={todoItemStyle}>
        <input
          type="checkbox"
          onChange={markComplete.bind(this, todo.id)}
          checked={todo.complete}
        />
        {todo.title}
        <button
          style={deleteButtonStyle}
          onClick={deleteTodo.bind(this, todo.id)}
        >
          Delete
        </button>
      </div>
    </Fragment>
  );
};

// PropTypes
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;
