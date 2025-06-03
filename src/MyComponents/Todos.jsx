import PropTypes from "prop-types";
import TodoItem from "../MyComponents/TodoItem";

function Todos(props) {
  let myStyle = {
    MinHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" my-3"> Todos List </h3>

      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} onDelete={props.onDelete} key={todo.desc} />
            );
          })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todos;
