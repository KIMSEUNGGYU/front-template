import { useState } from "react";

function ItemAppender({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleChangeText = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") return;

    const todoItem = {
      id: new Date().valueOf(),
      text,
      done: false,
    };

    onAddTodo(todoItem);
    setText("");
  };

  return (
    <div className="item-appender">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="item-appender__input"
          placeholder="할 일을 추가해주세요"
          autoFocus
          value={text}
          onChange={handleChangeText}
        />
      </form>
    </div>
  );
}
export default ItemAppender;
