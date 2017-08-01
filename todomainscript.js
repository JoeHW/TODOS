// Todo version 6

const todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('Your todo list is empty!');
    } else {
      console.log('MyTodos:');
      this.todos.filter(c => c.completed === true)
                .forEach(c => console.log('(x)', c.todoText));
      this.todos.filter(c => c.completed === false)
                .forEach(c => console.log('( )', c.todoText));
    }
  },
  
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
    this.displayTodos();
  },

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position,todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

let handlers = {
displayTodos: function(){
  todoList.displayTodos();  
  },
toggleAll: function(){
  todoList.toggleAll()
  },
addTodo: function(){
  let addTodoTextInput = document.getElementById('addTodoTextInput');
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput = "";
  },
changeTodo: function(){
  let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
  let changeTodoTextInput = document.getElementById("changeTodoTextInput");
  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  changeTodoPositionInput.value = "";
  changeTodoTextInput.value = "";
 },
deleteTodo: function(){
  let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
  deleteTodoPositionInput = "";
 },
toggleCompleted: function(){
  let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput = "";
 } 
};












