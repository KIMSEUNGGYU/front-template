export const getTodoListByFilter = (todoList = [], filter = "all") => {
  return {
    ["all"]: todoList,
    ["active"]: todoList.filter((todoItem) => !todoItem.done),
    ["completed"]: todoList.filter((todoItem) => todoItem.done),
  }[filter];
};
