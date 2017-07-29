// Todo version 5 

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

let displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos()
});

let toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll()
});

