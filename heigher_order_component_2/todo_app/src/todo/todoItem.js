const TodoItem = ({ todo, handleComplete }) => {
  return (
    <li>
      {todo}
      <span>&nbsp;&nbsp;</span>
      <button onClick={handleComplete}>Complete</button>
    </li>
  );
};

export default TodoItem;
