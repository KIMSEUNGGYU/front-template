import React from "react";

// FILTER = ALL | ACTIVE | COMPLETED

const TodoListFooter = ({ todoList, filter, onChangeFilter }) => {
  const handleChangeFilter = ({ target }) => {
    const filter = target?.dataset?.filter;
    if (filter) {
      onChangeFilter(filter);
    }
  };

  return (
    <div className="todo-list-footer">
      <span className="todo-count">총 {todoList?.length} 개</span>
      <ul className="filters">
        <li
          data-filter="all"
          className={filter === "all" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          전체보기
        </li>
        <li
          data-filter="active"
          className={filter === "active" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          해야할 일
        </li>
        <li
          data-filter="completed"
          className={filter === "completed" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          완료한 일
        </li>
      </ul>
    </div>
  );
};

export default TodoListFooter;
