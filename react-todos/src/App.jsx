import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ItemAppender from "./components/ItemAppender";
import TodoList from "./components/TodoList";

const initState = [
  { id: 1632152706185, text: "테스트입니다", done: false },
  { id: 1632152711567, text: "안녕하세요", done: false },
];

function App() {
  const [todoList, setTodoList] = useState(initState);

  const onAddTodo = (todoItem) => {
    setTodoList(todoList.concat(todoItem));
  };

  const onUpdateToggleItem = (itemId) => {
    setTodoList(
      todoList.map((todoItem) => {
        return todoItem.id !== itemId
          ? todoItem
          : {
              ...todoItem,
              done: !todoItem.done,
            };
      })
    );
  };

  const onUpdateItemText = (itemId, text) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id !== itemId) {
          console.log("fsdfa", todoItem);
        }

        return todoItem.id !== itemId
          ? todoItem
          : {
              ...todoItem,
              text,
            };
      })
    );
  };

  const onDeleteItem = (itemId) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== itemId));
  };

  return (
    <>
      <Header />
      <main className="todoapp">
        <ItemAppender onAddTodo={onAddTodo} />
        <TodoList
          todoList={todoList}
          onUpdateToggleItem={onUpdateToggleItem}
          onUpdateItemText={onUpdateItemText}
          onDeleteItem={onDeleteItem}
        />

        <div className="todo-list-footer">
          <span className="todo-count">총 2개</span>
          <ul className="filters">
            <li key="all">전체보기</li>
            <li key="tobe">해야할 일</li>
            <li key="done">완료한 일</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
