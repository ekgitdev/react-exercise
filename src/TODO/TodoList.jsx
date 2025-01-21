import TodoItem from "./TodoItem";

const TodoList = () => {
  const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

  return (
    <div id="app" className="todo">
      <ul>
        {" "}
        {DUMMY_TODOS.map((todoItem, index) => (
          <TodoItem key={index} title={todoItem} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
