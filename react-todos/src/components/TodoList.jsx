import { useState } from "react";

function TodoItem({
  todoItem,
  onUpdateToggleItem,
  onUpdateItemText,
  onDeleteItem,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editText, setEditText] = useState(todoItem.text);

  const handleDoubleClick = () => {
    setIsEditMode(true);
  };

  const updateItemText = (event) => {
    if (event.key !== "Enter") return;

    const itemId = +event.target.dataset?.id;
    onUpdateItemText(itemId, editText);
    setIsEditMode(false);
  };

  return (
    <li
      onDoubleClick={handleDoubleClick}
      className={isEditMode ? "editing" : ""}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => onUpdateToggleItem(todoItem.id)}
          checked={todoItem.done}
        />
        <label className={todoItem.done ? "completed" : ""}>
          {todoItem?.text}
        </label>
        <button
          className="destroy"
          onClick={() => onDeleteItem(todoItem.id)}
        ></button>
      </div>
      <input
        data-id={todoItem.id}
        type="text"
        className="edit"
        value={editText}
        onChange={({ target }) => setEditText(target.value)}
        onKeyPress={updateItemText}
      />
    </li>
  );
}

function TodoList({
  todoList,
  onUpdateToggleItem,
  onDeleteItem,
  onUpdateItemText,
}) {
  return (
    <ul className="todo-list">
      {todoList?.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onUpdateToggleItem={onUpdateToggleItem}
          onUpdateItemText={onUpdateItemText}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}

export default TodoList;
