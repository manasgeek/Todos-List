/ eslint-disable react/;

import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

TodoItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
