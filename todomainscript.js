// Todo version 9;

const todoList = {
todos: [],
toggleAll: function(){
    let completed = this.todos.every(c =>
        c.completed === true)
      if(completed){
      this.todos.forEach(c =>
        c.completed = false);
      } else {
      this.todos.forEach(c =>
       c.completed = true);
    }
   },
addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
   });
  },
changeTodo: function(position,todoText){
    this.todos[position].todoText = todoText;
  },
deleteTodo: function(position){
    this.todos.splice(position, 1);
  },
toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  }
};

const handlers = {
toggleAll: function(){
  todoList.toggleAll();
  view.displayTodos();
  },
addTodo: function(){
  let addTodoTextInput = document.getElementById("addTodoTextInput");
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = "";
  view.displayTodos();
  },
changeTodo: function(){
  let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
  let changeTodoTextInput = document.getElementById("changeTodoTextInput");
  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  changeTodoPositionInput.value = "";
  changeTodoTextInput.value = "";
  view.displayTodos();
 },
deleteTodo: function(position){
  todoList.deleteTodo(position);
  view.displayTodos();
 },
toggleCompleted: function(){
  let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value = "";
  view.displayTodos();
 }
};

const view = {
  displayTodos: function() {
  let todosUl = document.querySelector('ul');
  todosUl.innerHTML = "";
  todoList.todos.forEach((x,i) => {
  let todosLi = document.createElement('li');
  let todoTextWithCompletion = '';
    if(x.completed === true){
      todoTextWithCompletion = "(x) " + x.todoText + " ";
    } else {
      todoTextWithCompletion = "( ) " + x.todoText + " ";
    }
    todosLi.id = i;
    todosLi.textContent = todoTextWithCompletion;
    todosLi.appendChild(this.createDeleteButton());
    todosUl.appendChild(todosLi);
  });
 },
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
 },
  setUpEventListeners: function() {
    let todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
    let elementClicked = event.target;
    if(elementClicked.className === 'deleteButton'){
    handlers.deleteTodo(elementClicked.parentNode.id)
   }});
 }
}



view.setUpEventListeners();
