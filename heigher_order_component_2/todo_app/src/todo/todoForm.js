const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a new todo"
      />
      <span>&nbsp;&nbsp;</span>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
