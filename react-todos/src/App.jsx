import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ItemAppender from "./components/ItemAppender";
import TodoList from "./components/TodoList";
import TodoListFooter from "./components/TodoListFooter";

import { getTodoListByFilter } from "./services/service";

const initState = [
  { id: 1632152706185, text: "테스트입니다", done: false },
  { id: 1632152711567, text: "안녕하세요", done: false },
];

// FILTER = ALL | ACTIVE | COMPLETED

function App() {
  const [todoList, setTodoList] = useState(initState);
  const [filter, setFilter] = useState("all");

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

  const onChangeFilter = (filter) => {
    setFilter(filter);
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
          todoList={getTodoListByFilter(todoList, filter)}
          onUpdateToggleItem={onUpdateToggleItem}
          onUpdateItemText={onUpdateItemText}
          onDeleteItem={onDeleteItem}
        />

        <TodoListFooter
          todoList={getTodoListByFilter(todoList, filter)}
          filter={filter}
          onChangeFilter={onChangeFilter}
        />
      </main>
    </>
  );
}

export default App;
