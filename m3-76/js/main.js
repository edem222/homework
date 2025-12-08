"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
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

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');

const createTodoElement = (text) => {
  const todo = createTodo(todos, text);
  
  const todoElement = document.createElement('li');
  todoElement.className = 'todo';
  
  todoElement.innerHTML = `
    <div class="todo-text">Задача ${text}</div>
    <div class="todo-actions">
      <button class="button-complete button">${todo[todoKeys.is_completed] ? '↶' : '✓'}</button>
      <button class="button-delete button">×</button>
    </div>
  `;
  
  const completeBtn = todoElement.querySelector('.button-complete');
  const deleteBtn = todoElement.querySelector('.button-delete');
  
  completeBtn.addEventListener('click', () => {
    const updatedTodo = completeTodoById(todos, todo[todoKeys.id]);
    if (updatedTodo) {
      todoElement.classList.toggle('completed');
      completeBtn.textContent = todoElement.classList.contains('completed') ? '↶' : '✓';
    }
  });
  
  deleteBtn.addEventListener('click', () => {
    deleteTodoById(todos, todo[todoKeys.id]);
    todoElement.remove();
  });
  
  return todoElement;
};

const handleCreateTodo = (todos, text) => {
  
  const todoElement = createTodoElement(text);
  todosContainer.appendChild(todoElement);
  
  input.value = '';
  return todoElement;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleCreateTodo(todos, input.value);
});