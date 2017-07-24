// Todo version 4

var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('Your todo list is empty!');
    } else {
      console.log('MyTodos:');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
        } else {
        console.log('( )',this.todos[i].todoText);
      }
    }
  }
},

  toggleAll: function(){
    var completed = this.todos.every(function(c){
      return c.completed === true;
  });
    if(completed){
      this.todos.forEach(function(c){
        c.completed = false;
      });
    } else { 
      this.todos.forEach(function(c){
       c.completed = true;
      });
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
  deleteTodo: function(item,position){
    this.todos[item].splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos;
  }
};