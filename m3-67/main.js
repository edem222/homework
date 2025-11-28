const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
  day: "day"
};

const todos = [];

const errTodoNotFoundId = todoId => `Todo with id ${todoId} not found`;
const errTodoNotFoundDay = todoDay => `Todo with day ${todoDay} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text, day) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
    [todoKeys.day]: day,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFoundId(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const completeTodoByDay = (todos, todoDay) => {
  const todo = todos.find(todo => todo[todoKeys.day] === todoDay);

  if (!todo) {
    console.error(errTodoNotFoundDay(todoDay));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const deleteTodoByDay = (todos, todoDay) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.day] === todoDay);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoDay));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};